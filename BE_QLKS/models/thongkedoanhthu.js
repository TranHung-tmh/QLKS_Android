// thongkedoanhthu.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ThongKeDoanhThu = sequelize.define(
    "ThongKeDoanhThu",
    {
        MaThongKe: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        ThangNam: {
            type: DataTypes.STRING(7), // Định dạng 'YYYY-MM'
            allowNull: false,
        },
        LoaiPhong: {
            type: DataTypes.STRING(50), // Loại phòng (Phòng Đơn, Phòng Đôi, Phòng VIP)
            allowNull: true,
        },
        DoanhThuPhong: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0,
        },
        DoanhThuDichVu: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0,
        },
        TongDoanhThu: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        tableName: "ThongKeDoanhThu",
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ["ThangNam", "LoaiPhong"], // Đảm bảo không trùng lặp
            },
        ],
    }
);

module.exports = ThongKeDoanhThu;