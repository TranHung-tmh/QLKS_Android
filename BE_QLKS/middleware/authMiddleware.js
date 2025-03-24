// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

// Middleware xác thực token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Không tìm thấy token. Vui lòng đăng nhập",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).send({
            success: false,
            message: "Token không hợp lệ hoặc đã hết hạn",
        });
    }
};

// Middleware kiểm tra quyền Admin (MaQuyen = 1)
const authorizeAdmin = (req, res, next) => {
    if (req.user.MaQuyen !== 1) {
        return res.status(403).send({
            success: false,
            message: "Bạn không có quyền truy cập. Chỉ Admin được phép",
        });
    }
    next();
};

// Middleware kiểm tra quyền Nhân viên (MaQuyen = 2)
const authorizeNhanVien = (req, res, next) => {
    if (req.user.MaQuyen !== 2) {
        return res.status(403).send({
            success: false,
            message: "Bạn không có quyền truy cập. Chỉ Nhân viên được phép",
        });
    }
    next();
};

// Middleware kiểm tra quyền Khách hàng (MaQuyen = 3)
const authorizeKhachHang = (req, res, next) => {
    if (req.user.MaQuyen !== 3) {
        return res.status(403).send({
            success: false,
            message: "Bạn không có quyền truy cập. Chỉ Khách hàng được phép",
        });
    }
    next();
};

// Middleware kiểm tra nhiều vai trò
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.MaQuyen)) {
            return res.status(403).send({
                success: false,
                message: `Bạn không có quyền truy cập. Chỉ ${roles.map(role => {
                    if (role === 1) return "Admin";
                    if (role === 2) return "Nhân viên";
                    if (role === 3) return "Khách hàng";
                }).join(" hoặc ")} được phép`,
            });
        }
        next();
    };
};

module.exports = {
    authenticateToken,
    authorizeAdmin,
    authorizeNhanVien,
    authorizeKhachHang,
    authorizeRoles,
};