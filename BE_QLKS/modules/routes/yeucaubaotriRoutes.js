// modules/routes/yeucaubaotriRoutes.js
const express = require("express");
const { getYeuCauBaoTri, getYeuCauBaoTriByID, createYeuCauBaoTri, updateYeuCauBaoTri, deleteYeuCauBaoTri } = require("../controllers/yeucaubaotriController");
const { authenticateToken, authorizeAdmin, authorizeKhachHang } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả yêu cầu bảo trì - Chỉ Admin
router.get('/getallBaoTri', authenticateToken, authorizeAdmin, getYeuCauBaoTri);

// GET yêu cầu bảo trì theo ID - Khách hàng (chỉ xem của mình) hoặc Admin
router.get("/getBaoTri/:id", authenticateToken, getYeuCauBaoTriByID);

// POST tạo mới yêu cầu bảo trì - Khách hàng
router.post("/createBaoTri", authenticateToken, authorizeKhachHang, createYeuCauBaoTri);

// PUT cập nhật yêu cầu bảo trì - Khách hàng (chỉ cập nhật của mình)
router.put('/updateBaoTri/:id', authenticateToken, authorizeKhachHang, updateYeuCauBaoTri);

// DELETE xóa yêu cầu bảo trì - Khách hàng (chỉ xóa của mình)
router.delete('/deleteBaoTri/:id', authenticateToken, authorizeKhachHang, deleteYeuCauBaoTri);

module.exports = router;