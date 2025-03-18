const express = require("express");
const { getNguoiDung, getNguoiDungByID, createNguoiDung, updateNguoiDung, deleteNguoiDung } = require("../controllers/nguoidungController");

const router = express.Router();

// GET tất cả người dùng
router.get("/getallNguoiDung", getNguoiDung);

// GET thông tin người dùng theo ID
router.get ("getNguoiDung/:id", getNguoiDungByID);

// POST tạo mới người dùng
router.post("/createNguoiDung", createNguoiDung);

// PUT cập nhật thông tin người dùng
router.put("/updateNguoiDung/:id", updateNguoiDung);

// DELETE xóa người dùng
router.delete("/deleteNguoiDung/:id", deleteNguoiDung);

module.exports = router;