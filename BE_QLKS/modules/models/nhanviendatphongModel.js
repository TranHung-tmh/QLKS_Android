const NhanVienXuLyDatPhong = require("../../models/nhanvienxulydatphong");
const NhanVien = require("../../models/nhanvien");
const DatPhong = require("../../models/datphong");

// Lấy tất cả bản ghi nhân viên xử lý đặt phòng
const getAllNhanVienXuLyDatPhong = async () => {
    return await NhanVienXuLyDatPhong.findAll({
        include: [
            { model: NhanVien, attributes: ["HoTen"] },
            { model: DatPhong, attributes: ["NgayDat"] },
        ],
    });
};

// Lấy thông tin nhân viên xử lý đặt phòng theo MaNV và MaDatPhong
const getNhanVienXuLyDatPhongByID = async (maNV, maDatPhong) => {
    return await NhanVienXuLyDatPhong.findOne({
        where: { MaNV: maNV, MaDatPhong: maDatPhong },
        include: [
            { model: NhanVien, attributes: ["HoTen"] },
            { model: DatPhong, attributes: ["NgayDat"] },
        ],
    });
};

// Thêm mới bản ghi nhân viên xử lý đặt phòng
const createNhanVienXuLyDatPhong = async (recordData) => {
    return await NhanVienXuLyDatPhong.create(recordData);
};

// Cập nhật thông tin nhân viên xử lý đặt phòng
const updateNhanVienXuLyDatPhong = async (maNV, maDatPhong, recordData) => {
    const record = await NhanVienXuLyDatPhong.findOne({
        where: { MaNV: maNV, MaDatPhong: maDatPhong },
    });
    if (!record) throw new Error("Bản ghi không tồn tại");
    return await record.update(recordData);
};

// Xóa bản ghi nhân viên xử lý đặt phòng
const deleteNhanVienXuLyDatPhong = async (maNV, maDatPhong) => {
    const record = await NhanVienXuLyDatPhong.findOne({
        where: { MaNV: maNV, MaDatPhong: maDatPhong },
    });
    if (!record) throw new Error("Bản ghi không tồn tại");
    return await record.destroy();
};

module.exports = { getAllNhanVienXuLyDatPhong, getNhanVienXuLyDatPhongByID, createNhanVienXuLyDatPhong, updateNhanVienXuLyDatPhong, deleteNhanVienXuLyDatPhong };