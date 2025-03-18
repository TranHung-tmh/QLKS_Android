const nguoiDungService = require("../services/nguoidungService");

// Lấy tất cả người dùng
const getNguoiDung = async (req, res) => {
    try {
        const data = await nguoiDungService.getAllNguoiDung();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách người dùng",
            totalUsers: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNguoiDung API",
            error: error.message,
        });
    }
};

// Lấy thông tin người dùng theo ID
const getNguoiDungByID = async (req, res) => {
    try {
        const maNguoiDung = req.params.id;
        if (!maNguoiDung) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID người dùng",
            });
        }
        const data = await nguoiDungService.getNguoiDungByID(maNguoiDung);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy người dùng",
            });
        }
        res.status(200).send({
            success: true,
            userDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNguoiDungByID API",
            error: error.message,
        });
    }
};

// Thêm mới người dùng
const createNguoiDung = async (req, res) => {
    try {
        const userData = req.body;
        await nguoiDungService.createNguoiDung(userData);
        res.status(201).send({
            success: true,
            message: "Thêm mới người dùng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createNguoiDung API",
            error: error.message,
        });
    }
};

// Cập nhật thông tin người dùng
const updateNguoiDung = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai ID người dùng",
            });
        }
        const userData = req.body;
        await nguoiDungService.updateNguoiDung(id, userData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin người dùng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateNguoiDung API",
            error: error.message,
        });
    }
};

// Xóa người dùng
const deleteNguoiDung = async (req, res) => {
    try {
        const maNguoiDung = req.params.id;
        if (!maNguoiDung) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập ID người dùng",
            });
        }
        await nguoiDungService.deleteNguoiDung(maNguoiDung);
        res.status(200).send({
            success: true,
            message: "Xóa người dùng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteNguoiDung API",
            error: error.message,
        });
    }
};

module.exports = { getNguoiDung, getNguoiDungByID, createNguoiDung, updateNguoiDung, deleteNguoiDung };