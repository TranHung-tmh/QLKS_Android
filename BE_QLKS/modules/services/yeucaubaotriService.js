const YeuCauBaoTriModel = require("../models/yeucaubaotriModel");

const getAllYeuCauBaoTri = async () => {
    return YeuCauBaoTriModel.getAllYeuCauBaoTri();
};

const getYeuCauBaoTriByID = async (id) => {
    return YeuCauBaoTriModel.getYeuCauBaoTriById(id);
};

const createYeuCauBaoTri = async (yeuCauBaoTriData) => {
    return YeuCauBaoTriModel.createYeuCauBaoTri(yeuCauBaoTriData);
};

const updateYeuCauBaoTri = async (id, yeuCauBaoTriData) => {
    return YeuCauBaoTriModel.updateYeuCauBaoTri(id, yeuCauBaoTriData);
};

const deleteYeuCauBaoTri = async (id) => {
    return YeuCauBaoTriModel.deleteYeuCauBaoTri(id);
};

module.exports = {
    getAllYeuCauBaoTri,
    getYeuCauBaoTriByID,
    createYeuCauBaoTri,
    updateYeuCauBaoTri,
    deleteYeuCauBaoTri,
};
