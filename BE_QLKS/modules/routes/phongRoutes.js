// modules/routes/phongRoutes.js
const express = require("express");
const { getPhong, getPhongByID, createPhong, updatePhong, deletePhong } = require("../controllers/phongController");
const { authenticateToken, authorizeAdmin } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả phòng - Tất cả người dùng đã đăng nhập
router.get('/getallPhong', authenticateToken, getPhong);

// GET phòng theo ID - Tất cả người dùng đã đăng nhập
router.get("/getPhong/:id", authenticateToken, getPhongByID);

// POST tạo mới phòng - Chỉ Admin
router.post("/createPhong", authenticateToken, authorizeAdmin, createPhong);

// PUT cập nhật phòng - Chỉ Admin
router.put('/updatePhong/:id', authenticateToken, authorizeAdmin, updatePhong);

// DELETE xóa phòng - Chỉ Admin
router.delete('/deletePhong/:id', authenticateToken, authorizeAdmin, deletePhong);

module.exports = router;