const express = require("express");
const { getNhanVienXuLyDatPhong, getNhanVienXuLyDatPhongByID, createNhanVienXuLyDatPhong, updateNhanVienXuLyDatPhong, deleteNhanVienXuLyDatPhong } = require("../controllers/nhanvienxulydatphongController");

const router = express.Router();

// GET tất cả bản ghi nhân viên xử lý đặt phòng
router.get("/getallNhanVienXuLyDatPhong", getNhanVienXuLyDatPhong);

// GET thông tin nhân viên xử lý đặt phòng theo MaNV và MaDatPhong
router.get("/getNhanVienXuLyDatPhong/:maNV/:maDatPhong", getNhanVienXuLyDatPhongByID);

// POST tạo mới bản ghi nhân viên xử lý đặt phòng
router.post("/createNhanVienXuLyDatPhong", createNhanVienXuLyDatPhong);

// PUT cập nhật thông tin nhân viên xử lý đặt phòng
router.put("/updateNhanVienXuLyDatPhong/:maNV/:maDatPhong", updateNhanVienXuLyDatPhong);

// DELETE xóa bản ghi nhân viên xử lý đặt phòng
router.delete("/deleteNhanVienXuLyDatPhong/:maNV/:maDatPhong", deleteNhanVienXuLyDatPhong);

module.exports = router;