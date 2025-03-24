const db = require("../../config/db");
const DatPhong = require("../../models/datphong");
const KhachHang = require("../../models/khachhang");
const Phong = require("../../models/phong");
const TrangThai = require("../../models/trangthai");

// Lấy tất cả các lượt đặt phòng
const getAllDatPhong = async () => {
    return await DatPhong.findAll({
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] }, // Lấy cả MaPhong và LoaiPhong trong cùng một include
            { model: TrangThai, attributes: ["TenTrangThai"] }, // Lấy tên trạng thái
        ],
    });
};

// Lấy thông tin đặt phòng theo ID
const getDatPhongByID = async (id) => {
    return await DatPhong.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
    });
};

// Thêm mới lượt đặt phòng
const createDatPhong = async (roombookingData) => {
    return await DatPhong.create(roombookingData);
};

// Cập nhật lượt đặt phòng
const updateDatPhong = async (id, roombookingData) => {
    const roombooking = await DatPhong.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
    });
    if (!roombooking) throw new Error("Thông tin đặt phòng không tồn tại");
    return await roombooking.update(roombookingData);
};

// Xóa lượt đặt phòng
const deleteDatPhong = async (id) => {
    const roombooking = await DatPhong.findByPk(id);
    if (!roombooking) throw new Error("Thông tin đặt phòng không tồn tại");
    return await roombooking.destroy();
};

module.exports = { getAllDatPhong, getDatPhongByID, createDatPhong, updateDatPhong, deleteDatPhong };