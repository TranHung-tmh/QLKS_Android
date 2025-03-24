// modules/routes/nhanvienbaotriRoutes.js
const express = require("express");
const { getNhanVienXuLyBaoTri, getNhanVienXuLyBaoTriByID, createNhanVienXuLyBaoTri, updateNhanVienXuLyBaoTri, deleteNhanVienXuLyBaoTri } = require("../controllers/nhanvienxulybaotriController");
const { authenticateToken, authorizeRoles } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả bản ghi nhân viên xử lý bảo trì - Admin hoặc Nhân viên
router.get("/getallNhanVienXuLyBaoTri", authenticateToken, authorizeRoles(1, 2), getNhanVienXuLyBaoTri);

// GET thông tin nhân viên xử lý bảo trì theo MaNV và MaYeuCau - Admin hoặc Nhân viên
router.get("/getNhanVienXuLyBaoTri/:maNV/:maYeuCau", authenticateToken, authorizeRoles(1, 2), getNhanVienXuLyBaoTriByID);

// POST tạo mới bản ghi nhân viên xử lý bảo trì - Admin hoặc Nhân viên
router.post("/createNhanVienXuLyBaoTri", authenticateToken, authorizeRoles(1, 2), createNhanVienXuLyBaoTri);

// PUT cập nhật thông tin nhân viên xử lý bảo trì - Admin hoặc Nhân viên
router.put("/updateNhanVienXuLyBaoTri/:maNV/:maYeuCau", authenticateToken, authorizeRoles(1, 2), updateNhanVienXuLyBaoTri);

// DELETE xóa bản ghi nhân viên xử lý bảo trì - Admin hoặc Nhân viên
router.delete("/deleteNhanVienXuLyBaoTri/:maNV/:maYeuCau", authenticateToken, authorizeRoles(1, 2), deleteNhanVienXuLyBaoTri);

module.exports = router;