const Phong = require("../../models/phong");

const getAllRooms = async () => {
    return await Phong.findAll();
};

const getRoomById = async (id) => {
    return await Phong.findByPk(id);
};



const createRoom = async (roomData) => {
    return await Phong.create(roomData);
};

const updateRoom = async (id, roomData) => {
    const room = await Phong.findByPk(id);
    if (!room) throw new Error("Phong không tồn tại");
    return await room.update(roomData);
};

const deleteRoom = async (id) => {
    const room = await Phong.findByPk(id);
    if (!room) throw new Error("Phong không tồn tại");
    return await room.destroy();
};

module.exports = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom,
};
