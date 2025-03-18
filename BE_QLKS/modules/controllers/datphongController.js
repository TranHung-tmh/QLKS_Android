const datPhongService = require("../services/datphongService");

// Lấy tất cả các lượt đặt phòng
const getDatPhong = async (req, res) => {
    try {
        const data = await datPhongService.getAllDatPhong();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách các lượt đặt phòng",
            totalBookings: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getDatPhong API",
            error: error.message,
        });
    }
};

// Lấy thông tin đặt phòng theo ID
const getDatPhongByID = async (req, res) => {
    try {
        const maDatPhong = req.params.id;
        if (!maDatPhong) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID đặt phòng",
            });
        }
        const data = await datPhongService.getDatPhongByID(maDatPhong);
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy lượt đặt phòng",
            });
        }
        res.status(200).send({
            success: true,
            bookingDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getDatPhongByID API",
            error: error.message,
        });
    }
};

// Thêm mới lượt đặt phòng
const createDatPhong = async (req, res) => {
    try {
        const roomBookingData = req.body;
        await datPhongService.createDatPhong(roomBookingData);
        res.status(201).send({
            success: true,
            message: "Thêm mới lượt đặt phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createDatPhong API",
            error: error.message,
        });
    }
};

// Cập nhật thông tin đặt phòng
const updateDatPhong = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai ID đặt phòng",
            });
        }
        const roomBookingData = req.body;
        await datPhongService.updateDatPhong(id, roomBookingData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin đặt phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateDatPhong API",
            error: error.message,
        });
    }
};

// Xóa lượt đặt phòng
const deleteDatPhong = async (req, res) => {
    try {
        const maDatPhong = req.params.id;
        if (!maDatPhong) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập ID đặt phòng",
            });
        }
        await datPhongService.deleteDatPhong(maDatPhong);
        res.status(200).send({
            success: true,
            message: "Xóa lượt đặt phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteDatPhong API",
            error: error.message,
        });
    }
};

module.exports = { getDatPhong, getDatPhongByID, createDatPhong, updateDatPhong, deleteDatPhong };
