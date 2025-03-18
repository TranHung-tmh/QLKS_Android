const express = require("express");
const { getPhong, getPhongByID, createPhong, updatePhong, deletePhong } = require("../controllers/phongController");

const router = express.Router();

router.get('/getallPhong', getPhong);
router.get("/getPhong/:id", getPhongByID);
router.post("/createPhong", createPhong);
router.put('/updatePhong/:id', updatePhong);
router.delete('/deletePhong/:id', deletePhong);

module.exports = router;
