// thongkedoanhthuService.js
const ThongKeDoanhThuModel = require("../models/thongkedoanhthuModel");

const getAllThongKeDoanhThu = async () => {
    return ThongKeDoanhThuModel.getAllThongKeDoanhThu();
};

const getThongKeDoanhThuByID = async (id) => {
    return ThongKeDoanhThuModel.getThongKeDoanhThuById(id);
};

module.exports = {
    getAllThongKeDoanhThu,
    getThongKeDoanhThuByID,
};