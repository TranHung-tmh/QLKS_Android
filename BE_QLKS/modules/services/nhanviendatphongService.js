const nhanVienXuLyDatPhongModel = require("../models/nhanviendatphongModel");

// Lấy tất cả bản ghi nhân viên xử lý đặt phòng
const getAllNhanVienXuLyDatPhong = async () => {
    const records = await nhanVienXuLyDatPhongModel.getAllNhanVienXuLyDatPhong();
    return records;
};

// Lấy thông tin nhân viên xử lý đặt phòng theo MaNV và MaDatPhong
const getNhanVienXuLyDatPhongByID = async (maNV, maDatPhong) => {
    return await nhanVienXuLyDatPhongModel.getNhanVienXuLyDatPhongByID(maNV, maDatPhong);
};

// Thêm mới bản ghi nhân viên xử lý đặt phòng
const createNhanVienXuLyDatPhong = async (recordData) => {
    return await nhanVienXuLyDatPhongModel.createNhanVienXuLyDatPhong(recordData);
};

// Cập nhật thông tin nhân viên xử lý đặt phòng
const updateNhanVienXuLyDatPhong = async (maNV, maDatPhong, recordData) => {
    return await nhanVienXuLyDatPhongModel.updateNhanVienXuLyDatPhong(maNV, maDatPhong, recordData);
};

// Xóa bản ghi nhân viên xử lý đặt phòng
const deleteNhanVienXuLyDatPhong = async (maNV, maDatPhong) => {
    return await nhanVienXuLyDatPhongModel.deleteNhanVienXuLyDatPhong(maNV, maDatPhong);
};

module.exports = { getAllNhanVienXuLyDatPhong, getNhanVienXuLyDatPhongByID, createNhanVienXuLyDatPhong, updateNhanVienXuLyDatPhong, deleteNhanVienXuLyDatPhong };