const ThanhToanModel = require("../models/thanhtoanModel");
const thanhToan = require("../../models/thanhtoan")

// Lấy tất cả thanh toán
const getAllThanhToan = async () => {
    return await ThanhToanModel.getAllThanhToan();
};

// Lấy thanh toán theo ID
const getThanhToanByID = async (id) => {
    return await ThanhToanModel.getThanhToanById(id);
};

// Thêm mới thanh toán
const createThanhToan = async (MaThanhToan, MaKhachHang, MaPhong, SoTien, NgayThanhToan) => {
    return await ThanhToanModel.createThanhToan(MaThanhToan, MaKhachHang, MaPhong, SoTien, NgayThanhToan);
};

// Cập nhật thông tin thanh toán
const updateThanhToan = async (id, thanhToan) => {
    return await ThanhToanModel.updateThanhToan(id, thanhToan);
};

// Xóa thanh toán
const deleteThanhToan = async (id) => {
    return await ThanhToanModel.deleteThanhToan(id);
};

module.exports = { getAllThanhToan, getThanhToanByID, createThanhToan, updateThanhToan, deleteThanhToan };

