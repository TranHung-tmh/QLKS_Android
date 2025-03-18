const dichvuService = require("../services/dichvuService");

// Lấy danh sách tất cả dịch vụ
const getDichVu = async (req, res) => {
    try {
        const data = await dichvuService.getAllDichVu();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả"
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách các dịch vụ",
            totalDichVu: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getAllDichVu API",
            error: error.message,
        });
    }
};

// Lấy dịch vụ theo ID
const getDichVuByID = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await dichvuService.getDichVuByID(id);
        if (!service) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID dịch vụ"
            });
        }
        const data = await dichvuService.getDichVuByID(id);
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả"
            });
        }
        res.status(200).send({
            success: true,
            roomDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getDichVuByID API",
            error: error.message,
        });
    }
};

// Thêm dịch vụ mới
const createDichVu = async (req, res) => {
    try {
        const serviceData = req.body;
        await dichvuService.createDichVu(serviceData);
        res.status(201).send({
            success: true,
            message: "Đã thêm dịch vụ mới"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong thêm dịch vụ",
            error: error.message,
        });
    }
};

// Cập nhật dịch vụ
const updateDichVu = async (req, res) => {
    try {
        const { id } = req.params;
        const serviceData = req.body;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai ID dịch vụ"
            });
        }
        await dichvuService.updateDichVu(id, serviceData);
        res.status(200).send({
            success: true,
            message: "Đã cập nhật dịch vụ thành công!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong cập nhật dịch vụ",
            error: error.message,
        });
    }
};

// Xóa dịch vụ
const deleteDichVu = async (req, res) => {
    try {
        const dichvuID = req.params.id;
        if (!dichvuID) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập ID dịch vụ"
            });
        }
        await dichvuService.deleteDichVu(dichvuID);
        res.status(200).send({
            success: true,
            message: "Xóa dịch vụ thành công!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong xóa dịch vụ",
            error: error.message,
        });
    }
};

module.exports = { getDichVu, getDichVuByID, createDichVu, updateDichVu, deleteDichVu };
