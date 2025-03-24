// danhgiaModel.js
const DanhGia = require("../../models/danhgia");
const KhachHang = require("../../models/khachhang");
const DatPhong = require("../../models/datphong");
const Phong = require("../../models/phong");

const getAllDanhGia = async () => {
    return await DanhGia.findAll({
        include: [
            { model: KhachHang, attributes: ["MaKhachHang", "HoTen"] },
            { model: DatPhong, attributes: ["MaDatPhong", "NgayDat", "NgayTra"] },
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
        ],
        attributes: ["MaDanhGia", "DanhGia", "NhanXet", "NgayDanhGia"],
    });
};

const getDanhGiaById = async (id) => {
    return await DanhGia.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ["MaKhachHang", "HoTen"] },
            { model: DatPhong, attributes: ["MaDatPhong", "NgayDat", "NgayTra"] },
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
        ],
        attributes: ["MaDanhGia", "DanhGia", "NhanXet", "NgayDanhGia"],
    });
};

const createDanhGia = async (danhGiaData) => {
    return await DanhGia.create(danhGiaData);
};

const updateDanhGia = async (id, danhGiaData) => {
    const danhGia = await DanhGia.findByPk(id);
    if (!danhGia) throw new Error("Không tìm thấy thông tin đánh giá");
    return await danhGia.update(danhGiaData);
};

const deleteDanhGia = async (id) => {
    const danhGia = await DanhGia.findByPk(id);
    if (!danhGia) throw new Error("Không tìm thấy thông tin đánh giá");
    return await danhGia.destroy();
};

module.exports = {
    getAllDanhGia,
    getDanhGiaById,
    createDanhGia,
    updateDanhGia,
    deleteDanhGia,
};