// modules/routes/sudungdvRoutes.js
const express = require("express");
const { getSuDungDV, getSuDungDVByID, getSuDungDVByCustomer, createSuDungDV, updateTrangThaiSDDV, updateSuDungDV, deleteSuDungDV } = require("../controllers/sudungdvController");
const { authenticateToken, authorizeRoles, authorizeKhachHang } = require("../../middleware/authMiddleware");

const router = express.Router();

// GET tất cả sử dụng dịch vụ - Admin hoặc Nhân viên
router.get('/getallSDDV', authenticateToken, authorizeRoles(1, 2), getSuDungDV);

// GET sử dụng dịch vụ theo ID - Admin hoặc Nhân viên
router.get("/getSDDV/:id", authenticateToken, authorizeRoles(1, 2), getSuDungDVByID);

// GET dịch vụ theo mã khách hàng - Khách hàng (chỉ xem của mình)
router.get("/getSDDVByCustomer/:maKhachHang", authenticateToken, authorizeKhachHang, getSuDungDVByCustomer);

// POST tạo mới sử dụng dịch vụ - Admin hoặc Nhân viên
router.post("/createSDDV", authenticateToken, authorizeRoles(1, 2), createSuDungDV);

// PUT cập nhật thông tin sử dụng dịch vụ - Admin hoặc Nhân viên
router.put('/updateSDDV/:id', authenticateToken, authorizeRoles(1, 2), updateSuDungDV);

// PUT cập nhật trạng thái sử dụng dịch vụ - Admin hoặc Nhân viên
router.put('/updateTrangThai/:id', authenticateToken, authorizeRoles(1, 2), updateTrangThaiSDDV);

// DELETE xóa sử dụng dịch vụ - Admin hoặc Nhân viên
router.delete('/deleteSDDV/:id', authenticateToken, authorizeRoles(1, 2), deleteSuDungDV);

module.exports = router;