const db = require("../../config/db");
const Phong = require("../../models/phong");
const YCBT = require("../../models/yeucaubaotri");
const TrangThai = require("../../models/trangthai");
const { fn, col } = require("sequelize");

const getAllYeuCauBaoTri = async () => {
    return await YCBT.findAll({
        include: [
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
            { model: TrangThai, attributes: ["TenTrangThai"] }, // Lấy tên trạng thái
        ],
        attributes: [
            "MaYeuCau",
            "NgayYeuCau",
            "NgayHoanThanh",
            "MoTa",
            [
                fn("DATEDIFF", col("NgayHoanThanh"), col("NgayYeuCau")),
                "SoNgayBaoTri",
            ],
        ],
    });
};

const getYeuCauBaoTriById = async (id) => {
    return await YCBT.findByPk(id, {
        include: [
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
        attributes: [
            "MaYeuCau",
            "NgayYeuCau",
            "NgayHoanThanh",
            "MoTa",
            [
                fn("DATEDIFF", col("NgayHoanThanh"), col("NgayYeuCau")),
                "SoNgayBaoTri",
            ],
        ],
    });
};

const createYeuCauBaoTri = async (yeuCauBaoTriData) => {
    return await YCBT.create(yeuCauBaoTriData);
};

const updateYeuCauBaoTri = async (id, yeuCauBaoTriData) => {
    console.log(`Tìm yêu cầu bảo trì với id: ${id}`);
    const yeucaubaotri = await YCBT.findByPk(id, {
        include: [
            { model: Phong, attributes: ["MaPhong", "LoaiPhong"] },
            { model: TrangThai, attributes: ["TenTrangThai"] },
        ],
        attributes: [
            "MaYeuCau",
            "NgayYeuCau",
            "NgayHoanThanh",
            "MoTa",
            [
                fn("DATEDIFF", col("NgayHoanThanh"), col("NgayYeuCau")),
                "SoNgayBaoTri",
            ],
        ],
    });
    if (!yeucaubaotri) throw new Error("Không có thông tin");
    return await yeucaubaotri.update(yeuCauBaoTriData);
};

const deleteYeuCauBaoTri = async (id) => {
    const yeuCauBaoTri = await YCBT.findByPk(id);
    if (!yeuCauBaoTri) throw new Error("Không có thông tin");
    return await yeuCauBaoTri.destroy();
};

module.exports = {
    getAllYeuCauBaoTri,
    getYeuCauBaoTriById,
    createYeuCauBaoTri,
    updateYeuCauBaoTri,
    deleteYeuCauBaoTri,
};