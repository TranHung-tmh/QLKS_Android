const db = require("../../config/db");
const DichVu = require("../../models/dichvu");
const KhachHang = require("../../models/khachhang");
const SuDungDv = require("../../models/sudungdv");

// Lấy tất cả dữ liệu sử dụng dịch vụ
const getAllSuDungDV = async () => {
    return await SuDungDv.findAll({
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            { model: DichVu, attributes: ['TenDichVu'] }, // Lấy tên dịch vụ
        ],
    });
};

// Lấy sử dụng dịch vụ theo ID
const getSuDungDVByID = async (id) => {
    const sudungdv = await SuDungDv.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ['Ten'] },
            { model: DichVu, attributes: ['TenDichVu'] },
        ],
    });
    if (!sudungdv) throw new Error("Dich vu chua duoc su dung");
    return sudungdv;
};
// Lấy danh sách dịch vụ theo mã khách hàng
const getSuDungDVByCustomer = async (maKhachHang) => {
    return await SuDungDv.findAll({
        where: { MaKhachHang: maKhachHang },
        include: [
            { model: KhachHang, attributes: ["Ten"] }, // Lấy tên khách hàng
            { model: DichVu, attributes: ["TenDichVu"] }, // Lấy tên dịch vụ
        ],
    });
};

// Thêm mới sử dụng dịch vụ
const createSuDungDV = async (useService) => {
    return await SuDungDv.create(useService);
};

// Cập nhật sử dụng dịch vụ
const updateSuDungDV = async (id, useService ) => {
    console.log(`Tìm phản hồi với MaPhanHoi: ${id}`); // In ra MaPhanHoi để kiểm tra
    const sudungdv = await SuDungDv.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ['Ten'] },
            { model: DichVu, attributes: ['TenDichVu'] },
        ],
    });
    if (!sudungdv) throw new Error("Dich vu chua duoc su dung");

    return await sudungdv.update(useService);
};

const updateTrangThaiSDDV = async (id, TrangThai) => {
    const sudungdv = await SuDungDv.findByPk(id);
    if (!sudungdv) throw new Error("Dịch vụ chưa được sử dụng");

    sudungdv.TrangThai = TrangThai; // Cập nhật trạng thái
    return await sudungdv.save();
};

// Xóa sử dụng dịch vụ
const deleteSuDungDV = async (id) => {
    const sudungdv = await SuDungDv.findByPk(id);
    if (!sudungdv) throw new Error("Dich vu chua duoc su dung");
    return await sudungdv.destroy();
};

module.exports = { getAllSuDungDV, getSuDungDVByID, getSuDungDVByCustomer, createSuDungDV, updateTrangThaiSDDV,updateSuDungDV, deleteSuDungDV };
