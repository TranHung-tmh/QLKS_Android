const express = require("express");
const { getKH, getKHByID, createKH, updateKH, deleteKH } = require("../controllers/khachhangController");

const router = express.Router();

// GETALL
router.get("/getallKH", getKH);

// GET BY ID
router.get("/getKH/:id", getKHByID);

// CREATE
router.post("/createKH", createKH);

// UPDATE
router.put("/updateKH/:id", updateKH);

// DELETE
router.delete("/deleteKH/:id", deleteKH);

module.exports = router;
