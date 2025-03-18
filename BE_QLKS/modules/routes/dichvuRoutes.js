const express = require("express");
const { getDichVu, getDichVuByID, createDichVu, updateDichVu, deleteDichVu } = require("../controllers/dichvuController");

const router = express.Router();

// GET tất cả dịch vụ
router.get('/getallDV', getDichVu);

// GET dịch vụ theo ID
router.get("/getDV/:id", getDichVuByID);

// POST tạo mới dịch vụ
router.post("/createDV", createDichVu);

// PUT cập nhật dịch vụ
router.put('/updateDV/:id', updateDichVu);

// DELETE xóa dịch vụ
router.delete('/deleteDV/:id', deleteDichVu);

module.exports = router;
