const quyenHanService = require("../services/quyenhanService");

// Lấy tất cả quyền hạn
const getQuyenHan = async (req, res) => {
    try {
        const data = await quyenHanService.getAllQuyenHan();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách quyền hạn",
            totalPermissions: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getQuyenHan API",
            error: error.message,
        });
    }
};

// Lấy thông tin quyền hạn theo ID
const getQuyenHanByID = async (req, res) => {
    try {
        const maQuyen = req.params.id;
        if (!maQuyen) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID quyền hạn",
            });
        }
        const data = await quyenHanService.getQuyenHanByID(maQuyen);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy quyền hạn",
            });
        }
        res.status(200).send({
            success: true,
            permissionDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getQuyenHanByID API",
            error: error.message,
        });
    }
};

// Thêm mới quyền hạn
const createQuyenHan = async (req, res) => {
    try {
        const permissionData = req.body;
        await quyenHanService.createQuyenHan(permissionData);
        res.status(201).send({
            success: true,
            message: "Thêm mới quyền hạn thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createQuyenHan API",
            error: error.message,
        });
    }
};

// Cập nhật thông tin quyền hạn
const updateQuyenHan = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai ID quyền hạn",
            });
        }
        const permissionData = req.body;
        await quyenHanService.updateQuyenHan(id, permissionData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin quyền hạn thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateQuyenHan API",
            error: error.message,
        });
    }
};

// Xóa quyền hạn
const deleteQuyenHan = async (req, res) => {
    try {
        const maQuyen = req.params.id;
        if (!maQuyen) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập ID quyền hạn",
            });
        }
        await quyenHanService.deleteQuyenHan(maQuyen);
        res.status(200).send({
            success: true,
            message: "Xóa quyền hạn thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteQuyenHan API",
            error: error.message,
        });
    }
};

module.exports = { getQuyenHan, getQuyenHanByID, createQuyenHan, updateQuyenHan, deleteQuyenHan };