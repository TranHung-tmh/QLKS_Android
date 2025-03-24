const db = require("../../config/db");
const DatPhong = require("../../models/datphong");
const KhachHang = require("../../models/khachhang");
const NhanVien = require("../../models/nhanvien");
const ThanhToan = require("../../models/thanhtoan");
const { fn, col } = require("sequelize");

const getAllThanhToan = async () => {
    return await ThanhToan.findAll({
        include: [
            { model: NhanVien, attributes: ['HoTen'] },  // Lấy tên khách hàng
            { model: KhachHang, attributes: ['HoTen'] },
            {
                model: DatPhong,
                attributes: [
                    'NgayDat', // Lấy NgayNhan
                    'NgayTra',
                    [fn('DATEDIFF', col('DatPhong.NgayTra'), col('DatPhong.NgayDat')), 'SoNgayO']  // Tính số ngày giữa NgayTra và NgayNhan
                ],
            },
        ],
    });
};

const getThanhToanById = async (id) => {
    return await ThanhToan.findByPk(id,{
        include: [
            { model: NhanVien, attributes: ['HoTen'] },
            { model: KhachHang, attributes: ['HoTen'] },  // Lấy tên khách hàng
            {
                model: DatPhong,
                attributes: [
                    'NgayDat', // Lấy NgayNhan
                    'NgayTra',
                    [fn('DATEDIFF', col('DatPhong.NgayTra'), col('DatPhong.NgayDat')), 'SoNgayO']  // Tính số ngày giữa NgayTra và NgayNhan
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
            { model: NhanVien, attributes: ['HoTen'] },
            { model: KhachHang, attributes: ['HoTen'] },  // Lấy tên khách hàng
            {
                model: DatPhong,
                attributes: [
                    'NgayDat', // Lấy NgayNhan
                    'NgayTra',
                    [fn('DATEDIFF', col('DatPhong.NgayTra'), col('DatPhong.NgayDat')), 'SoNgayO']  // Tính số ngày giữa NgayTra và NgayNhan
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
