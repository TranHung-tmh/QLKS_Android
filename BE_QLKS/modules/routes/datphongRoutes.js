const express = require("express");
const { getDatPhong, getDatPhongByID, createDatPhong, updateDatPhong, deleteDatPhong } = require("../controllers/datphongController");

const router = express.Router();

// GET tất cả các lượt đặt phòng
router.get('/getallDatPhong', getDatPhong);

// GET thông tin đặt phòng theo ID
router.get("/getDatPhong/:id", getDatPhongByID);

// POST tạo mới lượt đặt phòng
router.post("/createDatPhong", createDatPhong);

// PUT cập nhật thông tin đặt phòng
router.put('/updateDatPhong/:id', updateDatPhong);

// DELETE xóa lượt đặt phòng
router.delete('/deleteDatPhong/:id', deleteDatPhong);

module.exports = router;
