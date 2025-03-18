const nhanVienXuLyBaoTriModel = require("../models/nhanvienbaotriModel");

// Lấy tất cả bản ghi nhân viên xử lý bảo trì
const getAllNhanVienXuLyBaoTri = async () => {
    const records = await nhanVienXuLyBaoTriModel.getAllNhanVienXuLyBaoTri();
    return records;
};

// Lấy thông tin nhân viên xử lý bảo trì theo MaNV và MaYeuCau
const getNhanVienXuLyBaoTriByID = async (maNV, maYeuCau) => {
    return await nhanVienXuLyBaoTriModel.getNhanVienXuLyBaoTriByID(maNV, maYeuCau);
};

// Thêm mới bản ghi nhân viên xử lý bảo trì
const createNhanVienXuLyBaoTri = async (recordData) => {
    return await nhanVienXuLyBaoTriModel.createNhanVienXuLyBaoTri(recordData);
};

// Cập nhật thông tin nhân viên xử lý bảo trì
const updateNhanVienXuLyBaoTri = async (maNV, maYeuCau, recordData) => {
    return await nhanVienXuLyBaoTriModel.updateNhanVienXuLyBaoTri(maNV, maYeuCau, recordData);
};

// Xóa bản ghi nhân viên xử lý bảo trì
const deleteNhanVienXuLyBaoTri = async (maNV, maYeuCau) => {
    return await nhanVienXuLyBaoTriModel.deleteNhanVienXuLyBaoTri(maNV, maYeuCau);
};

module.exports = { getAllNhanVienXuLyBaoTri, getNhanVienXuLyBaoTriByID, createNhanVienXuLyBaoTri, updateNhanVienXuLyBaoTri, deleteNhanVienXuLyBaoTri };