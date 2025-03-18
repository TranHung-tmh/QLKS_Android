const db = require("../../config/db");
const DichVu = require("../../models/dichvu");

// Lấy danh sách tất cả dịch vụ
const getAllDichVu = async () => {
    return await DichVu.findAll();
};

// Lấy dịch vụ theo ID
const getDichVuByID = async (id) => {
    return await DichVu.findByPk(id);
};

// Thêm dịch vụ mới
const createDichVu = async (serviceData) => {
    return await DichVu.create(serviceData);
};

// Cập nhật dịch vụ
const updateDichVu = async (id, serviceData) => {
    const service = await DichVu.findByPk(id);
    if (!service) throw new Error("Dich Vu không tồn tại");
    return await service.update(serviceData);
};

// Xóa dịch vụ
const deleteDichVu = async (id) => {
    const service = await DichVu.findByPk(id);
    if (!service) throw new Error("Dich Vu không tồn tại");
    return await service.destroy();
};

module.exports = { getAllDichVu, getDichVuByID, createDichVu, updateDichVu, deleteDichVu };
