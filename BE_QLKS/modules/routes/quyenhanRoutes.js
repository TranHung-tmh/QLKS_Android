const express = require("express");
const { getQuyenHan, getQuyenHanByID, createQuyenHan, updateQuyenHan, deleteQuyenHan } = require("../controllers/quyenhanController");

const router = express.Router();

// GET tất cả quyền hạn
router.get("/getallQuyenHan", getQuyenHan);

// GET thông tin quyền hạn theo ID
router.get("/getQuyenHan/:id", getQuyenHanByID);

// POST tạo mới quyền hạn
router.post("/createQuyenHan", createQuyenHan);

// PUT cập nhật thông tin quyền hạn
router.put("/updateQuyenHan/:id", updateQuyenHan);

// DELETE xóa quyền hạn
router.delete("/deleteQuyenHan/:id", deleteQuyenHan);

module.exports = router;