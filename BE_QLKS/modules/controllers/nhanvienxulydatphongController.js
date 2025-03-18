const nhanVienXuLyDatPhongService = require("../services/nhanviendatphongService");

// Lấy tất cả bản ghi nhân viên xử lý đặt phòng
const getNhanVienXuLyDatPhong = async (req, res) => {
    try {
        const data = await nhanVienXuLyDatPhongService.getAllNhanVienXuLyDatPhong();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy kết quả",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách bản ghi nhân viên xử lý đặt phòng",
            totalRecords: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNhanVienXuLyDatPhong API",
            error: error.message,
        });
    }
};

// Lấy thông tin nhân viên xử lý đặt phòng theo MaNV và MaDatPhong
const getNhanVienXuLyDatPhongByID = async (req, res) => {
    try {
        const { maNV, maDatPhong } = req.params;
        if (!maNV || !maDatPhong) {
            return res.status(404).send({
                success: false,
                message: "Sai hoặc không có MaNV hoặc MaDatPhong",
            });
        }
        const data = await nhanVienXuLyDatPhongService.getNhanVienXuLyDatPhongByID(maNV, maDatPhong);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy bản ghi",
            });
        }
        res.status(200).send({
            success: true,
            recordDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getNhanVienXuLyDatPhongByID API",
            error: error.message,
        });
    }
};

// Thêm mới bản ghi nhân viên xử lý đặt phòng
const createNhanVienXuLyDatPhong = async (req, res) => {
    try {
        const recordData = req.body;
        await nhanVienXuLyDatPhongService.createNhanVienXuLyDatPhong(recordData);
        res.status(201).send({
            success: true,
            message: "Thêm mới bản ghi nhân viên xử lý đặt phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createNhanVienXuLyDatPhong API",
            error: error.message,
        });
    }
};

// Cập nhật thông tin nhân viên xử lý đặt phòng
const updateNhanVienXuLyDatPhong = async (req, res) => {
    try {
        const { maNV, maDatPhong } = req.params;
        if (!maNV || !maDatPhong) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy hoặc sai MaNV hoặc MaDatPhong",
            });
        }
        const recordData = req.body;
        await nhanVienXuLyDatPhongService.updateNhanVienXuLyDatPhong(maNV, maDatPhong, recordData);
        res.status(200).send({
            success: true,
            message: "Cập nhật thông tin nhân viên xử lý đặt phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateNhanVienXuLyDatPhong API",
            error: error.message,
        });
    }
};

// Xóa bản ghi nhân viên xử lý đặt phòng
const deleteNhanVienXuLyDatPhong = async (req, res) => {
    try {
        const { maNV, maDatPhong } = req.params;
        if (!maNV || !maDatPhong) {
            return res.status(404).send({
                success: false,
                message: "Vui lòng nhập MaNV và MaDatPhong",
            });
        }
        await nhanVienXuLyDatPhongService.deleteNhanVienXuLyDatPhong(maNV, maDatPhong);
        res.status(200).send({
            success: true,
            message: "Xóa bản ghi nhân viên xử lý đặt phòng thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteNhanVienXuLyDatPhong API",
            error: error.message,
        });
    }
};

module.exports = { getNhanVienXuLyDatPhong, getNhanVienXuLyDatPhongByID, createNhanVienXuLyDatPhong, updateNhanVienXuLyDatPhong, deleteNhanVienXuLyDatPhong };