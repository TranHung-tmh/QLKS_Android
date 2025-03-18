const dichvuModel = require("../models/dichvuModel");

// Lấy danh sách tất cả dịch vụ
const getAllDichVu = async () => {
    const service = await dichvuModel.getAllDichVu();
    return service;
};

// Lấy dịch vụ theo ID
const getDichVuByID = async (id) => {
    return await dichvuModel.getDichVuByID(id);
};

// Thêm dịch vụ mới
const createDichVu = async (serviceData) => {
    return await dichvuModel.createDichVu(serviceData);
};

// Cập nhật dịch vụ
const updateDichVu = async (id, serviceData) => {
    return await dichvuModel.updateDichVu(id, serviceData);
};

// Xóa dịch vụ
const deleteDichVu = async (id) => {
    return await dichvuModel.deleteDichVu(id);
};

module.exports = { getAllDichVu, getDichVuByID, createDichVu, updateDichVu, deleteDichVu };
