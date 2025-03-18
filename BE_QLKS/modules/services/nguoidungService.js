const nguoiDungModel = require("../models/nguoidungModel");

// Lấy tất cả người dùng
const getAllNguoiDung = async () => {
    const users = await nguoiDungModel.getAllNguoiDung();
    return users;
};

// Lấy thông tin người dùng theo ID
const getNguoiDungByID = async (id) => {
    return await nguoiDungModel.getNguoiDungByID(id);
};

// Thêm mới người dùng
const createNguoiDung = async (userData) => {
    return await nguoiDungModel.createNguoiDung(userData);
};

// Cập nhật thông tin người dùng
const updateNguoiDung = async (id, userData) => {
    return await nguoiDungModel.updateNguoiDung(id, userData);
};

// Xóa người dùng
const deleteNguoiDung = async (id) => {
    return await nguoiDungModel.deleteNguoiDung(id);
};

module.exports = { getAllNguoiDung, getNguoiDungByID, createNguoiDung, updateNguoiDung, deleteNguoiDung };