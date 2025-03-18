const db = require("../../config/db");
const DatPhong = require("../../models/datphong");
const KhachHang = require("../../models/khachhang");
const ThanhToan = require("../../models/thanhtoan");
const { fn, col } = require("sequelize");

const getAllThanhToan = async () => {
    return await ThanhToan.findAll({
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            {
                model: DatPhong,
                attributes: [
                    'NgayNhan', // Lấy NgayNhan
                    'NgayTra',
                    [fn('DATEDIFF', col('DatPhong.NgayTra'), col('DatPhong.NgayNhan')), 'SoNgayO']  // Tính số ngày giữa NgayTra và NgayNhan
                ],
            },
        ],
    });
};

const getThanhToanById = async (id) => {
    return await ThanhToan.findByPk(id,{
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            {
                model: DatPhong,
                attributes: [
                    'NgayNhan', // Lấy NgayNhan
                    'NgayTra',
                    [fn('DATEDIFF', col('DatPhong.NgayTra'), col('DatPhong.NgayNhan')), 'SoNgayO']  // Tính số ngày giữa NgayTra và NgayNhan
                ],
            },
        ],
    });
};

const createThanhToan = async (thanhToanData) => {
    return await ThanhToan.create(thanhToanData);
};

const updateThanhToan = async (id, thanhToanData) => {
    console.log(`Tìm phản hồi với MaPhanHoi: ${id}`); // In ra MaPhanHoi để kiểm tra
    const thanhToan = await ThanhToan.findByPk(id,{
        include: [
            { model: KhachHang, attributes: ['Ten'] },  // Lấy tên khách hàng
            {
                model: DatPhong,
                attributes: [
                    'NgayNhan', // Lấy NgayNhan
                    'NgayTra',
                    [fn('DATEDIFF', col('DatPhong.NgayTra'), col('DatPhong.NgayNhan')), 'SoNgayO']  // Tính số ngày giữa NgayTra và NgayNhan
                ],
            },
        ],
    });
    if (!thanhToan) throw new Error("Thanh Toan Ko Ton Tai");

    return await thanhToan.update(thanhToanData);
};

const deleteThanhToan = async (id) => {
    const thanhToan = await ThanhToan.findByPk(id);
    if (!thanhToan) throw new Error("Thanh Toan Ko Ton Tai");
    return await thanhToan.destroy();
};

module.exports = {
    getAllThanhToan,
    getThanhToanById,
    createThanhToan,
    updateThanhToan,
    deleteThanhToan,
};
