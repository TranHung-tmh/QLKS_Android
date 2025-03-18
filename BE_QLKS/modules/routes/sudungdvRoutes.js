const express = require("express");
const { getSuDungDV, getSuDungDVByID, getSuDungDVByCustomer,  createSuDungDV, updateTrangThaiSDDV, updateSuDungDV, deleteSuDungDV } = require("../controllers/sudungdvController");

const router = express.Router();

// GET tất cả sử dụng dịch vụ
router.get('/getallSDDV', getSuDungDV);

// GET sử dụng dịch vụ theo ID
router.get("/getSDDV/:id", getSuDungDVByID);

// POST tạo mới sử dụng dịch vụ
router.post("/createSDDV", createSuDungDV);

// PUT cập nhật thông tin sử dụng dịch vụ
router.put('/updateSDDV/:id', updateSuDungDV);

// PUT cập nhật trạng thái sử dụng dịch vụ
router.put('/updateTrangThai/:id', updateTrangThaiSDDV);

// GET dịch vụ theo mã khách hàng
router.get("/getSDDVByCustomer/:maKhachHang", getSuDungDVByCustomer);

// DELETE xóa sử dụng dịch vụ
router.delete('/deleteSDDV/:id', deleteSuDungDV);

module.exports = router;
