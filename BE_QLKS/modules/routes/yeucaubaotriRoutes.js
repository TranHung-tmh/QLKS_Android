const express = require("express");
const { getYeuCauBaoTri, getYeuCauBaoTriByID, createYeuCauBaoTri, updateYeuCauBaoTri, deleteYeuCauBaoTri } = require("../controllers/yeucaubaotriController");

const router = express.Router();

// GET tất cả yêu cầu bảo trì
router.get('/getallBaoTri', getYeuCauBaoTri);

// GET yêu cầu bảo trì theo ID
router.get("/getBaoTri/:id", getYeuCauBaoTriByID);

// POST tạo mới yêu cầu bảo trì
router.post("/createBaoTri", createYeuCauBaoTri);

// PUT cập nhật yêu cầu bảo trì
router.put('/updateBaoTri/:id', updateYeuCauBaoTri);

// DELETE xóa yêu cầu bảo trì
router.delete('/deleteBaoTri/:id', deleteYeuCauBaoTri);

module.exports = router;
