const express = require("express");
const { getNhanVien, getNhanVienByID, createNhanVien, updateNhanVien, deleteNhanVien } = require("../controllers/nhanvienController");

const router = express.Router();

// GET tất cả nhân viên
router.get("/getallNhanVien", getNhanVien);

// GET thông tin nhân viên theo ID
router.get("/getNhanVien/:id", getNhanVienByID);

// POST tạo mới nhân viên
router.post("/createNhanVien", createNhanVien);

// PUT cập nhật thông tin nhân viên
router.put("/updateNhanVien/:id", updateNhanVien);

// DELETE xóa nhân viên
router.delete("/deleteNhanVien/:id", deleteNhanVien);

module.exports = router;