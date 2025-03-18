const express = require("express");
const { getNhanVienXuLyBaoTri, getNhanVienXuLyBaoTriByID, createNhanVienXuLyBaoTri, updateNhanVienXuLyBaoTri, deleteNhanVienXuLyBaoTri } = require("../controllers/nhanvienxulybaotriController");

const router = express.Router();

// GET tất cả bản ghi nhân viên xử lý bảo trì
router.get("/getallNhanVienXuLyBaoTri", getNhanVienXuLyBaoTri);

// GET thông tin nhân viên xử lý bảo trì theo MaNV và MaYeuCau
router.get("/getNhanVienXuLyBaoTri/:maNV/:maYeuCau", getNhanVienXuLyBaoTriByID);

// POST tạo mới bản ghi nhân viên xử lý bảo trì
router.post("/createNhanVienXuLyBaoTri", createNhanVienXuLyBaoTri);

// PUT cập nhật thông tin nhân viên xử lý bảo trì
router.put("/updateNhanVienXuLyBaoTri/:maNV/:maYeuCau", updateNhanVienXuLyBaoTri);

// DELETE xóa bản ghi nhân viên xử lý bảo trì
router.delete("/deleteNhanVienXuLyBaoTri/:maNV/:maYeuCau", deleteNhanVienXuLyBaoTri);

module.exports = router;