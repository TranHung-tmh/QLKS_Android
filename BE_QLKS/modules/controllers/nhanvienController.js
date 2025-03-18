const nhanVienService = require("../services/nhanvienService");

// Lấy tất cả nhân viên
const getNhanVien = async (req, res) => {
    try {
        const data = await nhanVienService.getAllNhanVien();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách nhân viên",
            totalEmployees: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNhanVien API",
            error: error.message,
        });
    }
};

// Lấy thông tin nhân viên theo ID
const getNhanVienByID = async (req, res) => {
    try {
        const maNV = req.params.id;
        if (!maNV) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID nhân viên",
            });
        }
        const data = await nhanVienService.getNhanVienByID(maNV);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy nhân viên",
            });
        }
        res.status(200).send({
            success: true,
            employeeDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNhanVienByID API",
            error: error.message,
        });
    }
};

// Thêm mới nhân viên
const createNhanVien = async (req, res) => {
    try {
        const employeeData = req.body;
        await nhanVienService.createNhanVien(employeeData);
        res.status(201).send({
            success: true,
            message: "Thêm mới nhân viên thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createNhanVien API",
            error: error.message,
        });
    }
};

// Cập nhật thông tin nhân viên
const updateNhanVien = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai ID nhân viên",
            });
        }
        const employeeData = req.body;
        await nhanVienService.updateNhanVien(id, employeeData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin nhân viên thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateNhanVien API",
            error: error.message,
        });
    }
};

// Xóa nhân viên
const deleteNhanVien = async (req, res) => {
    try {
        const maNV = req.params.id;
        if (!maNV) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập ID nhân viên",
            });
        }
        await nhanVienService.deleteNhanVien(maNV);
        res.status(200).send({
            success: true,
            message: "Xóa nhân viên thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteNhanVien API",
            error: error.message,
        });
    }
};

module.exports = { getNhanVien, getNhanVienByID, createNhanVien, updateNhanVien, deleteNhanVien };