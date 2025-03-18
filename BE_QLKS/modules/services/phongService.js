const phongModel = require("../models/phongModel");

const getAllRooms = async () => {
    const room = await phongModel.getAllRooms();
    return room;
};

const getRoomById = async (id) => {
    return await phongModel.getRoomById(id);
};

const createRoom = async (roomData) => {
    return await phongModel.createRoom(roomData)
};

const updateRoom = async (id, roomData) => {
    return await phongModel.updateRoom(id, roomData)
};

const deleteRoom = async (id) => {
    return await phongModel.deleteRoom(id);
};

module.exports = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom,
};
