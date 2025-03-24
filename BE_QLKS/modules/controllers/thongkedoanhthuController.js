// thongkedoanhthuController.js
const ThongKeDoanhThuService = require("../services/thongkedoanhthuService");

// Lấy tất cả thống kê doanh thu
const getThongKeDoanhThu = async (req, res) => {
    try {
        const data = await ThongKeDoanhThuService.getAllThongKeDoanhThu();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy danh sách thống kê doanh thu",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách thống kê doanh thu",
            totalRecords: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getThongKeDoanhThu API",
            error: error.message,
        });
    }
};

// Lấy thống kê doanh thu theo ID
const getThongKeDoanhThuByID = async (req, res) => {
    try {
        const maThongKe = req.params.id;
        const data = await ThongKeDoanhThuService.getThongKeDoanhThuByID(maThongKe);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy thông tin thống kê doanh thu",
            });
        }
        res.status(200).send({
            success: true,
            message: "Thông tin thống kê doanh thu",
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getThongKeDoanhThuByID API",
            error: error.message,
        });
    }
};

module.exports = {
    getThongKeDoanhThu,
    getThongKeDoanhThuByID,
};