// modules/models/authModel.js
const NguoiDung = require("../../models/nguoidung");
const QuyenHan = require("../../models/quyenhan");

const register = async (nguoiDungData) => {
    const existingUser = await NguoiDung.findOne({
        where: { TenDangNhap: nguoiDungData.TenDangNhap },
    });
    if (existingUser) {
        throw new Error("Tên đăng nhập đã tồn tại");
    }

    return await NguoiDung.create(nguoiDungData);
};

const findByTenDangNhap = async (tenDangNhap) => {
    return await NguoiDung.findOne({
        where: { TenDangNhap: tenDangNhap },
        include: [
            {
                model: QuyenHan,
                attributes: ["TenQuyen"],
            },
        ],
    });
};

module.exports = {
    register,
    findByTenDangNhap,
};