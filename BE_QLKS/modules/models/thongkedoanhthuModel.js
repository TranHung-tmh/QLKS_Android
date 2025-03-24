// thongkedoanhthuModel.js
const ThongKeDoanhThu = require("../../models/thongkedoanhthu");

const getAllThongKeDoanhThu = async () => {
    return await ThongKeDoanhThu.findAll({
        attributes: [
            "MaThongKe",
            "ThangNam",
            "LoaiPhong",
            "DoanhThuPhong",
            "DoanhThuDichVu",
            "TongDoanhThu",
        ],
    });
};

const getThongKeDoanhThuById = async (id) => {
    return await ThongKeDoanhThu.findByPk(id, {
        attributes: [
            "MaThongKe",
            "ThangNam",
            "LoaiPhong",
            "DoanhThuPhong",
            "DoanhThuDichVu",
            "TongDoanhThu",
        ],
    });
};

module.exports = {
    getAllThongKeDoanhThu,
    getThongKeDoanhThuById,
};