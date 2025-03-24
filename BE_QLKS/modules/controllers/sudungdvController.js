const suDungDVService = require("../services/sudungdvService");

// Lấy tất cả sử dụng dịch vụ
const getSuDungDV = async (req, res) => {
    try {
        const data = await suDungDVService.getAllSuDungDV();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy dữ liệu sử dụng dịch vụ",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách sử dụng dịch vụ",
            totalRecords: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getSuDungDV API",
            error: error.message,
        });
    }
};

// Lấy sử dụng dịch vụ theo ID
const getSuDungDVByID = async (req, res) => {
    try {
        const maSuDungDV = req.params.id;
        if (!maSuDungDV) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có ID sử dụng dịch vụ",
            });
        }
        const data = await suDungDVService.getSuDungDVByID(maSuDungDV);
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy thông tin sử dụng dịch vụ",
            });
        }
        res.status(200).send({
            success: true,
            serviceDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getSuDungDVByID API",
            error: error.message,
        });
    }
};

// Lấy danh sách dịch vụ theo mã khách hàng
const getSuDungDVByCustomer = async (req, res) => {
    try {
        const maKhachHang = req.params.maKhachHang;
        if (!maKhachHang) {
            return res.status(400).send({
                success: false,
                message: "Mã khách hàng không hợp lệ",
            });
        }

        const data = await suDungDVService.getSuDungDVByCustomer(maKhachHang);
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy dịch vụ sử dụng cho khách hàng này",
            });
        }

        res.status(200).send({
            success: true,
            message: "Danh sách dịch vụ sử dụng của khách hàng",
            data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getSuDungDVByCustomer API",
            error: error.message,
        });
    }
};



// Thêm mới sử dụng dịch vụ
const createSuDungDV = async (req, res) => {
    try {
        const useService = req.body;
        await suDungDVService.createSuDungDV(useService);
        res.status(201).send({
            success: true,
            message: "Thêm mới sử dụng dịch vụ thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createSuDungDV API",
            error: error.message,
        });
    }
};

// Cập nhật sử dụng dịch vụ
const updateSuDungDV = async (req, res) => {
    try {
        const id = req.params.id;
        const useService = req.body;
        await suDungDVService.updateSuDungDV(id, useService);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin sử dụng dịch vụ thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateSuDungDV API",
            error: error.message,
        });
    }
};

const updateTrangThaiSDDV = async (req, res) => {
    try {
        const id = req.params.id;
        const { MaTrangThai } = req.body; // Nhận trạng thái từ client
        if (!MaTrangThai) {
            return res.status(400).send({
                success: false,
                message: "Trạng thái không được bỏ trống",
            });
        }

        await suDungDVService.updateTrangThaiSDDV(id, MaTrangThai);
        res.status(200).send({
            success: true,
            message: "Cập nhật trạng thái thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateTrangThaiSDDV API",
            error: error.message,
        });
    }
};

// Xóa sử dụng dịch vụ
const deleteSuDungDV = async (req, res) => {
    try {
        const maSuDungDV = req.params.id;
        await suDungDVService.deleteSuDungDV(maSuDungDV);
        res.status(200).send({
            success: true,
            message: "Xóa sử dụng dịch vụ thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteSuDungDV API",
            error: error.message,
        });
    }
};

module.exports = {
    getSuDungDV,
    getSuDungDVByID,
    getSuDungDVByCustomer,
    createSuDungDV,
    updateSuDungDV,
    updateTrangThaiSDDV,
    deleteSuDungDV,
};
