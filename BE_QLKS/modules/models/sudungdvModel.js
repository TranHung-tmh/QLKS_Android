const db = require("../../config/db");
const DichVu = require("../../models/dichvu");
const KhachHang = require("../../models/khachhang");
const SuDungDv = require("../../models/sudungdv");
const TrangThai = require("../../models/trangthai");

// Lấy tất cả dữ liệu sử dụng dịch vụ
const getAllSuDungDV = async () => {
    return await SuDungDv.findAll({
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: DichVu, attributes: ["TenDichVu"] },
            { model: TrangThai, attributes: ["TenTrangThai"] }, // Lấy tên trạng thái
        ],
    });
};

// Lấy sử dụng dịch vụ theo ID
const getSuDungDVByID = async (id) => {
    const sudungdv = await SuDungDv.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: DichVu, attributes: ["TenDichVu"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
    });
    if (!sudungdv) throw new Error("Dịch vụ chưa được sử dụng");
    return sudungdv;
};

// Lấy danh sách dịch vụ theo mã khách hàng
const getSuDungDVByCustomer = async (maKhachHang) => {
    return await SuDungDv.findAll({
        where: { MaKhachHang: maKhachHang },
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: DichVu, attributes: ["TenDichVu"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
    });
};

// Thêm mới sử dụng dịch vụ
const createSuDungDV = async (useService) => {
    return await SuDungDv.create(useService);
};

// Cập nhật sử dụng dịch vụ
const updateSuDungDV = async (id, useService) => {
    console.log(`Tìm phản hồi với MaSuDungDV: ${id}`);
    const sudungdv = await SuDungDv.findByPk(id, {
        include: [
            { model: KhachHang, attributes: ["HoTen"] },
            { model: DichVu, attributes: ["TenDichVu"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
    });
    if (!sudungdv) throw new Error("Dịch vụ chưa được sử dụng");
    return await sudungdv.update(useService);
};

// Cập nhật trạng thái sử dụng dịch vụ
const updateTrangThaiSDDV = async (id, maTrangThai) => {
    const sudungdv = await SuDungDv.findByPk(id);
    if (!sudungdv) throw new Error("Dịch vụ chưa được sử dụng");

    sudungdv.MaTrangThai = maTrangThai; // Cập nhật MaTrangThai thay vì TrangThai
    return await sudungdv.save();
};

// Xóa sử dụng dịch vụ
const deleteSuDungDV = async (id) => {
    const sudungdv = await SuDungDv.findByPk(id);
    if (!sudungdv) throw new Error("Dịch vụ chưa được sử dụng");
    return await sudungdv.destroy();
};

module.exports = {
    getAllSuDungDV,
    getSuDungDVByID,
    getSuDungDVByCustomer,
    createSuDungDV,
    updateTrangThaiSDDV,
    updateSuDungDV,
    deleteSuDungDV,
};