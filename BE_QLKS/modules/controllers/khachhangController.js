const khachhangService = require("../services/khachhangService");



const getKH = async (req, res) => {
    try {
        const customers = await khachhangService.getAllCustomers();
        res.status(200).json({
            success: true,
            message: "Danh sách khách hàng",
            total: customers.length,
            data: customers,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Lỗi khi lấy danh sách khách hàng",
            error: error.message,
        });
    }
};

const getKHByID = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await khachhangService.getCustomerById(id);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Không tìm thấy khách hàng",
            });
        }
        res.status(200).json({
            success: true,
            data: customer,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Lỗi khi lấy thông tin khách hàng",
            error: error.message,
        });
    }
};

const createKH = async (req, res) => {
    try {
        const customerData = req.body;
        await khachhangService.createCustomer(customerData);
        res.status(201).json({
            success: true,
            message: "Thêm khách hàng mới thành công",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Lỗi khi thêm khách hàng",
            error: error.message,
        });
    }
};

const updateKH = async (req, res) => {
    try {
        const { id } = req.params;
        const customerData = req.body;
        await khachhangService.updateCustomer(id, customerData);
        res.status(200).json({
            success: true,
            message: "Cập nhật khách hàng thành công",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Lỗi khi cập nhật khách hàng",
            error: error.message,
        });
    }
};

const deleteKH = async (req, res) => {
    try {
        const { id } = req.params;
        await khachhangService.deleteCustomer(id);
        res.status(200).json({
            success: true,
            message: "Xóa khách hàng thành công",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Lỗi khi xóa khách hàng",
            error: error.message,
        });
    }
};

module.exports = { getKH, getKHByID, createKH, updateKH, deleteKH };
