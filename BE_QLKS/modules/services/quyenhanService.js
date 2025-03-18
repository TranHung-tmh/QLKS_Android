const quyenHanModel = require("../models/quyenhanModel");

// Lấy tất cả quyền hạn
const getAllQuyenHan = async () => {
    const permissions = await quyenHanModel.getAllQuyenHan();
    return permissions;
};

// Lấy thông tin quyền hạn theo ID
const getQuyenHanByID = async (id) => {
    return await quyenHanModel.getQuyenHanByID(id);
};

// Thêm mới quyền hạn
const createQuyenHan = async (permissionData) => {
    return await quyenHanModel.createQuyenHan(permissionData);
};

// Cập nhật thông tin quyền hạn
const updateQuyenHan = async (id, permissionData) => {
    return await quyenHanModel.updateQuyenHan(id, permissionData);
};

// Xóa quyền hạn
const deleteQuyenHan = async (id) => {
    return await quyenHanModel.deleteQuyenHan(id);
};

module.exports = { getAllQuyenHan, getQuyenHanByID, createQuyenHan, updateQuyenHan, deleteQuyenHan };