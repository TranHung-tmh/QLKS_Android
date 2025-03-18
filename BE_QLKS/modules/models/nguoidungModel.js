const NguoiDung = require("../../models/nguoidung");
const QuyenHan = require("../../models/quyenhan");

// Lấy tất cả người dùng
const getAllNguoiDung = async () => {
    return await NguoiDung.findAll({
        include: [
            { model: QuyenHan, attributes: ["TenQuyen"] }, // Lấy tên quyền hạn
        ],
    });
};

// Lấy thông tin người dùng theo ID
const getNguoiDungByID = async (id) => {
    return await NguoiDung.findByPk(id, {
        include: [
            { model: QuyenHan, attributes: ["TenQuyen"] },
        ],
    });
};

// Thêm mới người dùng
const createNguoiDung = async (userData) => {
    return await NguoiDung.create(userData);
};

// Cập nhật thông tin người dùng
const updateNguoiDung = async (id, userData) => {
    const user = await NguoiDung.findByPk(id);
    if (!user) throw new Error("Người dùng không tồn tại");
    return await user.update(userData);
};

// Xóa người dùng
const deleteNguoiDung = async (id) => {
    const user = await NguoiDung.findByPk(id);
    if (!user) throw new Error("Người dùng không tồn tại");
    return await user.destroy();
};

module.exports = { getAllNguoiDung, getNguoiDungByID, createNguoiDung, updateNguoiDung, deleteNguoiDung };