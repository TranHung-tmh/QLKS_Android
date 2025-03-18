const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const NguoiDung = require("./nguoidung");

const NhanVien = sequelize.define(
    "NhanVien",
    {
        MaNV: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        HoTen: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        SoDienThoai: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        ChucVu: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        NgayVaoLam: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Luong: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        MaNguoiDung: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "NguoiDung",
                key: "MaNguoiDung",
            },
        },
    },
    {
        tableName: "NhanVien",
        timestamps: false,
    }
);

// Quan hệ với bảng NguoiDung
NhanVien.belongsTo(NguoiDung, {
    foreignKey: "MaNguoiDung",
    targetKey: "MaNguoiDung",
});

module.exports = NhanVien;