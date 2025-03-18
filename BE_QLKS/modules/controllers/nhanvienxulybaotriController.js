const nhanVienXuLyBaoTriService = require("../services/nhanvienbaotriService");

// Lấy tất cả bản ghi nhân viên xử lý bảo trì
const getNhanVienXuLyBaoTri = async (req, res) => {
    try {
        const data = await nhanVienXuLyBaoTriService.getAllNhanVienXuLyBaoTri();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách bản ghi nhân viên xử lý bảo trì",
            totalRecords: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNhanVienXuLyBaoTri API",
            error: error.message,
        });
    }
};

// Lấy thông tin nhân viên xử lý bảo trì theo MaNV và MaYeuCau
const getNhanVienXuLyBaoTriByID = async (req, res) => {
    try {
        const { maNV, maYeuCau } = req.params;
        if (!maNV || !maYeuCau) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có MaNV hoặc MaYeuCau",
            });
        }
        const data = await nhanVienXuLyBaoTriService.getNhanVienXuLyBaoTriByID(maNV, maYeuCau);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy bản ghi",
            });
        }
        res.status(200).send({
            success: true,
            recordDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNhanVienXuLyBaoTriByID API",
            error: error.message,
        });
    }
};

// Thêm mới bản ghi nhân viên xử lý bảo trì
const createNhanVienXuLyBaoTri = async (req, res) => {
    try {
        const recordData = req.body;
        await nhanVienXuLyBaoTriService.createNhanVienXuLyBaoTri(recordData);
        res.status(201).send({
            success: true,
            message: "Thêm mới bản ghi nhân viên xử lý bảo trì thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createNhanVienXuLyBaoTri API",
            error: error.message,
        });
    }
};

// Cập nhật thông tin nhân viên xử lý bảo trì
const updateNhanVienXuLyBaoTri = async (req, res) => {
    try {
        const { maNV, maYeuCau } = req.params;
        if (!maNV || !maYeuCau) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai MaNV hoặc MaYeuCau",
            });
        }
        const recordData = req.body;
        await nhanVienXuLyBaoTriService.updateNhanVienXuLyBaoTri(maNV, maYeuCau, recordData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin nhân viên xử lý bảo trì thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateNhanVienXuLyBaoTri API",
            error: error.message,
        });
    }
};

// Xóa bản ghi nhân viên xử lý bảo trì
const deleteNhanVienXuLyBaoTri = async (req, res) => {
    try {
        const { maNV, maYeuCau } = req.params;
        if (!maNV || !maYeuCau) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập MaNV và MaYeuCau",
            });
        }
        await nhanVienXuLyBaoTriService.deleteNhanVienXuLyBaoTri(maNV, maYeuCau);
        res.status(200).send({
            success: true,
            message: "Xóa bản ghi nhân viên xử lý bảo trì thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteNhanVienXuLyBaoTri API",
            error: error.message,
        });
    }
};

module.exports = { getNhanVienXuLyBaoTri, getNhanVienXuLyBaoTriByID, createNhanVienXuLyBaoTri, updateNhanVienXuLyBaoTri, deleteNhanVienXuLyBaoTri };