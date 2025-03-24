// danhgiaController.js
const DanhGiaService = require("../services/danhgiaService");

// Lấy tất cả đánh giá
const getDanhGia = async (req, res) => {
    try {
        const data = await DanhGiaService.getAllDanhGia();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy danh sách đánh giá",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách đánh giá",
            totalReviews: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getDanhGia API",
            error: error.message,
        });
    }
};

// Lấy đánh giá theo ID
const getDanhGiaByID = async (req, res) => {
    try {
        const maDanhGia = req.params.id;
        const data = await DanhGiaService.getDanhGiaByID(maDanhGia);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy thông tin đánh giá",
            });
        }
        res.status(200).send({
            success: true,
            reviewDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getDanhGiaByID API",
            error: error.message,
        });
    }
};

// Thêm mới đánh giá
const createDanhGia = async (req, res) => {
    try {
        const danhGiaData = req.body;
        // Tự động gán NgayDanhGia là ngày hiện tại nếu không được cung cấp
        danhGiaData.NgayDanhGia = danhGiaData.NgayDanhGia || new Date();
        await DanhGiaService.createDanhGia(danhGiaData);
        res.status(201).send({
            success: true,
            message: "Thêm mới đánh giá thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createDanhGia API",
            error: error.message,
        });
    }
};

// Cập nhật đánh giá
const updateDanhGia = async (req, res) => {
    try {
        const maDanhGia = req.params.id;
        const { MaKhachHang, MaDatPhong, MaPhong, DanhGia, NhanXet, NgayDanhGia } = req.body;
        const danhGia = { 
            MaKhachHang, 
            MaDatPhong, 
            MaPhong, 
            DanhGia, 
            NhanXet, 
            NgayDanhGia: NgayDanhGia || new Date() // Tự động gán ngày hiện tại nếu không cung cấp
        };
        await DanhGiaService.updateDanhGia(maDanhGia, danhGia);
        res.status(200).send({
            success: true,
            message: "Cập nhật đánh giá thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateDanhGia API",
            error: error.message,
        });
    }
};

// Xóa đánh giá
const deleteDanhGia = async (req, res) => {
    try {
        const maDanhGia = req.params.id;
        await DanhGiaService.deleteDanhGia(maDanhGia);
        res.status(200).send({
            success: true,
            message: "Xóa đánh giá thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteDanhGia API",
            error: error.message,
        });
    }
};

module.exports = {
    getDanhGia,
    getDanhGiaByID,
    createDanhGia,
    updateDanhGia,
    deleteDanhGia,
};