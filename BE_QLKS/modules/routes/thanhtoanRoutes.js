const express = require("express");
const { getThanhToan, getThanhToanByID, createThanhToan, updateThanhToan, deleteThanhToan, } = require("../controllers/thanhtoanController");

const router = express.Router();

// GET tất cả thanh toán
router.get('/getallThanhToan', getThanhToan);

// GET thanh toán theo ID
router.get("/getThanhToan/:id", getThanhToanByID);

// POST tạo mới thanh toán
router.post("/createThanhToan", createThanhToan);

// PUT cập nhật thông tin thanh toán
router.put('/updateThanhToan/:id', updateThanhToan);

// DELETE xóa thanh toán
router.delete('/deleteThanhToan/:id', deleteThanhToan);

module.exports = router;
