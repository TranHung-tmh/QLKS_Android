const QuyenHan = require("../../models/quyenhan");

// Lấy tất cả quyền hạn
const getAllQuyenHan = async () => {
    return await QuyenHan.findAll();
};

// Lấy thông tin quyền hạn theo ID
const getQuyenHanByID = async (id) => {
    return await QuyenHan.findByPk(id);
};

// Thêm mới quyền hạn
const createQuyenHan = async (permissionData) => {
    return await QuyenHan.create(permissionData);
};

// Cập nhật thông tin quyền hạn
const updateQuyenHan = async (id, permissionData) => {
    const permission = await QuyenHan.findByPk(id);
    if (!permission) throw new Error("Quyền hạn không tồn tại");
    return await permission.update(permissionData);
};

// Xóa quyền hạn
const deleteQuyenHan = async (id) => {
    const permission = await QuyenHan.findByPk(id);
    if (!permission) throw new Error("Quyền hạn không tồn tại");
    return await permission.destroy();
};

module.exports = { getAllQuyenHan, getQuyenHanByID, createQuyenHan, updateQuyenHan, deleteQuyenHan };