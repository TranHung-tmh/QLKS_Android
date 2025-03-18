const datPhongModel = require("../models/datphongModel");

// Lấy tất cả các lượt đặt phòng
const getAllDatPhong = async () => {
    const roomBooking = await datPhongModel.getAllDatPhong();
    return roomBooking;
};

// Lấy thông tin đặt phòng theo ID
const getDatPhongByID = async (id) => {
    return await datPhongModel.getDatPhongByID(id);
};

// Thêm mới lượt đặt phòng
const createDatPhong = async (roombookingData) => {
   return await datPhongModel.createDatPhong(roombookingData);
};

// Cập nhật lượt đặt phòng
const updateDatPhong = async (id, roombookingData) => {
    return await datPhongModel.updateDatPhong(id, roombookingData);
};

// Xóa lượt đặt phòng
const deleteDatPhong = async (maDatPhong) => {
    return await datPhongModel.deleteDatPhong(maDatPhong);
};

module.exports = { getAllDatPhong, getDatPhongByID, createDatPhong, updateDatPhong, deleteDatPhong };
