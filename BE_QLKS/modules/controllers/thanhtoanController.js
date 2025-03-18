const ThanhToanService = require("../services/thanhtoanService");

// Lấy tất cả thanh toán
const getThanhToan = async (req, res) => {
    try {
        const data = await ThanhToanService.getAllThanhToan();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy danh sách thanh toán",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách các thanh toán",
            totalPayments: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getThanhToan API",
            error: error.message,
        });
    }
};

// Lấy thanh toán theo ID
const getThanhToanByID = async (req, res) => {
    try {
        const maThanhToan = req.params.id;
        if (!maThanhToan) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID thanh toán",
            });
        }
        const data = await ThanhToanService.getThanhToanByID(maThanhToan);
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy thông tin thanh toán",
            });
        }
        res.status(200).send({
            success: true,
            paymentDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getThanhToanByID API",
            error: error.message,
        });
    }
};

// Thêm mới thanh toán
const createThanhToan = async (req, res) => {
    try {
        const thanhtoanData = req.body;
        await ThanhToanService.createThanhToan(thanhtoanData);
        res.status(201).send({
            success: true,
            message: "Thêm mới thanh toán thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createThanhToan API",
            error: error.message,
        });
    }
};

// Cập nhật thanh toán
const updateThanhToan = async (req, res) => {
    try {
        const id = req.params.id;
        const thanhToanData = req.body;
        await ThanhToanService.updateThanhToan(id, thanhToanData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin thanh toán thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateThanhToan API",
            error: error.message,
        });
    }
};

// Xóa thanh toán
const deleteThanhToan = async (req, res) => {
    try {
        const maThanhToan = req.params.id;
        await ThanhToanService.deleteThanhToan(maThanhToan);
        res.status(200).send({
            success: true,
            message: "Xóa thanh toán thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteThanhToan API",
            error: error.message,
        });
    }
};

module.exports = {
    getThanhToan,
    getThanhToanByID,
    createThanhToan,
    updateThanhToan,
    deleteThanhToan,
};
