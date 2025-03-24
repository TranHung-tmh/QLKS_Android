// modules/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthService = require("../services/authService");

// Đăng ký người dùng
const register = async (req, res) => {
    try {
        const { TenDangNhap, MatKhau, MaQuyen } = req.body;

        if (!TenDangNhap || !MatKhau) {
            return res.status(400).send({
                success: false,
                message: "Vui lòng cung cấp đầy đủ tên đăng nhập và mật khẩu",
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(MatKhau, saltRounds);

        const nguoiDungData = {
            TenDangNhap,
            MatKhau: hashedPassword,
            MaQuyen: MaQuyen || 3, // Mặc định là KhachHang (MaQuyen = 3)
        };

        await AuthService.register(nguoiDungData);

        res.status(201).send({
            success: true,
            message: "Đăng ký thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong register API",
            error: error.message,
        });
    }
};

// Đăng nhập
const login = async (req, res) => {
    try {
        const { TenDangNhap, MatKhau } = req.body;

        if (!TenDangNhap || !MatKhau) {
            return res.status(400).send({
                success: false,
                message: "Vui lòng cung cấp tên đăng nhập và mật khẩu",
            });
        }

        const nguoiDung = await AuthService.findByTenDangNhap(TenDangNhap);
        if (!nguoiDung) {
            return res.status(404).send({
                success: false,
                message: "Tên đăng nhập không tồn tại",
            });
        }

        const isMatch = await bcrypt.compare(MatKhau, nguoiDung.MatKhau);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Mật khẩu không đúng",
            });
        }

        const token = jwt.sign(
            {
                MaNguoiDung: nguoiDung.MaNguoiDung,
                TenDangNhap: nguoiDung.TenDangNhap,
                MaQuyen: nguoiDung.MaQuyen,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).send({
            success: true,
            message: "Đăng nhập thành công",
            token,
            user: {
                MaNguoiDung: nguoiDung.MaNguoiDung,
                TenDangNhap: nguoiDung.TenDangNhap,
                MaQuyen: nguoiDung.MaQuyen,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong login API",
            error: error.message,
        });
    }
};

module.exports = {
    register,
    login,
};