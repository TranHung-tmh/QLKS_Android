const SuDungDv = require("../../models/sudungdv");
const suDungDVModel = require("../models/sudungdvModel");

// Lấy tất cả sử dụng dịch vụ
const getAllSuDungDV = async () => {
    return await suDungDVModel.getAllSuDungDV();
};

// Lấy sử dụng dịch vụ theo ID
const getSuDungDVByID = async (id) => {
    return await suDungDVModel.getSuDungDVByID(id);
};

// Lấy danh sách dịch vụ theo mã khách hàng
const getSuDungDVByCustomer = async (maKhachHang) => {
    return await suDungDVModel.getSuDungDVByCustomer(maKhachHang);
};


// Thêm mới sử dụng dịch vụ
const createSuDungDV = async (MaSuDungDV, MaKhachHang, MaDichVu, NgaySuDung, SoLuong, TongTien,ghiChu,TrangThai) => {
    return await suDungDVModel.createSuDungDV(MaSuDungDV, MaKhachHang, MaDichVu, NgaySuDung, SoLuong, TongTien,ghiChu,TrangThai);
};

// Cập nhật sử dụng dịch vụ
const updateSuDungDV = async (id, useService) => {
    return await suDungDVModel.updateSuDungDV(id, useService)
};

const updateTrangThaiSDDV = async (id, TrangThai) => {
    return await suDungDVModel.updateTrangThaiSDDV(id, TrangThai);
};

// Xóa sử dụng dịch vụ
const deleteSuDungDV = async (MaSuDungDV) => {
    return await suDungDVModel.deleteSuDungDV(MaSuDungDV);
};

module.exports = { getAllSuDungDV, getSuDungDVByID, getSuDungDVByCustomer, createSuDungDV, updateTrangThaiSDDV,updateSuDungDV, deleteSuDungDV };
