// danhgiaService.js
const DanhGiaModel = require("../models/danhgiaModel");

const getAllDanhGia = async () => {
    return DanhGiaModel.getAllDanhGia();
};

const getDanhGiaByID = async (id) => {
    return DanhGiaModel.getDanhGiaById(id);
};

const createDanhGia = async (danhGiaData) => {
    return DanhGiaModel.createDanhGia(danhGiaData);
};

const updateDanhGia = async (id, danhGiaData) => {
    return DanhGiaModel.updateDanhGia(id, danhGiaData);
};

const deleteDanhGia = async (id) => {
    return DanhGiaModel.deleteDanhGia(id);
};

module.exports = {
    getAllDanhGia,
    getDanhGiaByID,
    createDanhGia,
    updateDanhGia,
    deleteDanhGia,
};