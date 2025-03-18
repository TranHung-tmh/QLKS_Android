const phongService = require("../services/phongService");

const getPhong = async (req, res) => {
    try {
        const rooms = await phongService.getAllRooms();
        if (!rooms || rooms.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả"
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách các phòng và thông tin đặt phòng",
            totalRooms: rooms.length,
            data: rooms,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getPhong API",
            error,
        });
    }
};

const getPhongByID = async (req, res) => {
    try {
        const phongID = req.params.id;
        if (!phongID) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có id phòng"
            });
        }

        const room = await phongService.getRoomById(phongID);
        if (!room) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả"
            });
        }

        res.status(200).send({
            success: true,
            roomDetails: room,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getPhongByID API",
            error,
        });
    }
};

const createPhong = async (req, res) => {
    try {
        const { SoPhong, LoaiPhong, GiaPhong, TinhTrang } = req.body;
        if ( !SoPhong || !LoaiPhong || !GiaPhong || !TinhTrang) {
            return res.status(400).send({
                success: false,
                message: "Vui lòng điền đầy đủ thông tin",
            });
        }

        await phongService.createRoom(req.body);
        res.status(201).send({
            success: true,
            message: "Đã thêm phòng mới thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong thêm phòng",
            error,
        });
    }
};

const updatePhong = async (req, res) => {
    try {
        const phongID = req.params.id;
        const roomData = req.body;
        if (!phongID || !roomData) {
            return res.status(400).send({
                success: false,
                message: "Thiếu thông tin cần cập nhật",
            });
        }

        await phongService.updateRoom(phongID, roomData);
        res.status(200).send({
            success: true,
            message: "Đã cập nhật phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong cập nhật phòng",
            error,
        });
    }
};

const deletePhong = async (req, res) => {
    try {
        const phongID = req.params.id;
        if (!phongID) {
            return res.status(400).send({
                success: false,
                message: "Vui lòng nhập id phòng",
            });
        }

        await phongService.deleteRoom(phongID);
        res.status(200).send({
            success: true,
            message: "Xóa phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong xóa phòng",
            error,
        });
    }
};

module.exports = {
    getPhong,
    getPhongByID,
    createPhong,
    updatePhong,
    deletePhong,
};
