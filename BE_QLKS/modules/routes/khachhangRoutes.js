// modules/routes/khachhangRoutes.js
const express = require("express");
const { getKH, getKHByID, createKH, updateKH, deleteKH } = require("../controllers/khachhangController");
const { authenticateToken, authorizeAdmin, authorizeKhachHang } = require("../../middleware/authMiddleware");

const router = express.Router();

// GETALL - Chỉ Admin
router.get("/getallKH", authenticateToken, authorizeAdmin, getKH);

// GET BY ID - Khách hàng (chỉ xem của mình) hoặc Admin
router.get("/getKH/:id", authenticateToken, getKHByID);

// CREATE - Chỉ Admin
router.post("/createKH", authenticateToken, authorizeAdmin, createKH);

// UPDATE - Khách hàng (chỉ cập nhật của mình) hoặc Admin
router.put("/updateKH/:id", authenticateToken, updateKH);

// DELETE - Chỉ Admin
router.delete("/deleteKH/:id", authenticateToken, authorizeAdmin, deleteKH);

module.exports = router;