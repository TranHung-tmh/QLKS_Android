const nhanVienModel = require("../models/nhanvienModel");

// Lấy tất cả nhân viên
const getAllNhanVien = async () => {
    const employees = await nhanVienModel.getAllNhanVien();
    return employees;
};

// Lấy thông tin nhân viên theo ID
const getNhanVienByID = async (id) => {
    return await nhanVienModel.getNhanVienByID(id);
};

// Thêm mới nhân viên
const createNhanVien = async (employeeData) => {
    return await nhanVienModel.createNhanVien(employeeData);
};

// Cập nhật thông tin nhân viên
const updateNhanVien = async (id, employeeData) => {
    return await nhanVienModel.updateNhanVien(id, employeeData);
};

// Xóa nhân viên
const deleteNhanVien = async (id) => {
    return await nhanVienModel.deleteNhanVien(id);
};

module.exports = { getAllNhanVien, getNhanVienByID, createNhanVien, updateNhanVien, deleteNhanVien };