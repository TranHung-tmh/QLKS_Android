const db = require("../../config/db");
const DatPhong = require("../../models/datphong");
const KhachHang = require("../../models/khachhang");
const Phong = require("../../models/phong");

// Lấy tất cả các lượt đặt phòng
const getAllDatPhong = async () => {
    return await DatPhong.findAll({
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            { model: Phong, attributes: ['SoPhong'] }, // Lấy tên dịch vụ
        ],
});
};

// Lấy thông tin đặt phòng theo ID
const getDatPhongByID = async (id) => {
    return await DatPhong.findByPk(id,{
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            { model: Phong, attributes: ['LoaiPhong'] }, // Lấy tên dịch vụ
        ],
});
};

// Thêm mới lượt đặt phòng
const createDatPhong = async (roombookingData) => {
    return await DatPhong.create(roombookingData);
};

// Cập nhật lượt đặt phòng
const updateDatPhong = async (id, roombookingData) => {
    const roombooking = await DatPhong.findByPk(id,{
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            { model: Phong, attributes: ['SoPhong'] }, // Lấy tên dịch vụ
        ],
});
    if (!roombooking) throw new Error("Thong tin dat phong không tồn tại");
    return await roombooking.update(roombookingData);
};

// Xóa lượt đặt phòng
const deleteDatPhong = async (id) => {
    const roombooking = await DatPhong.findByPk(id);
    if (!roombooking) throw new Error("Thong tin dat phong không tồn tại");
    return await roombooking.destroy();
};

module.exports = { getAllDatPhong, getDatPhongByID, createDatPhong, updateDatPhong, deleteDatPhong };
