const Phong = require("../../models/phong");
const TrangThai = require("../../models/trangthai");

const getAllRooms = async () => {
    return await Phong.findAll({
        include: [
            { model: TrangThai, attributes: ["TenTrangThai"] }, // Lấy tên trạng thái
        ],
    });
};

const getRoomById = async (id) => {
    return await Phong.findByPk(id, {
        include: [
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
    });
};

const createRoom = async (roomData) => {
    return await Phong.create(roomData);
};

const updateRoom = async (id, roomData) => {
    const room = await Phong.findByPk(id);
    if (!room) throw new Error("Phòng không tồn tại");
    return await room.update(roomData);
};

const deleteRoom = async (id) => {
    const room = await Phong.findByPk(id);
    if (!room) throw new Error("Phòng không tồn tại");
    return await room.destroy();
};

module.exports = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom,
};