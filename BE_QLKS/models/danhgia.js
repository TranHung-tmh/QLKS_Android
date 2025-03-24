// danhgia.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const KhachHang = require("./khachhang");
const DatPhong = require("./datphong");
const Phong = require("./phong");

const DanhGia = sequelize.define(
    "DanhGia",
    {
        MaDanhGia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        MaKhachHang: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: KhachHang,
                key: "MaKhachHang",
            },
        },
        MaDatPhong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: DatPhong,
                key: "MaDatPhong",
            },
        },
        MaPhong: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Phong,
                key: "MaPhong",
            },
        },
        DanhGia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        NhanXet: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        NgayDanhGia: {
            type: DataTypes.DATE, // Đổi từ DATEONLY sang DATE để lưu cả ngày và giờ
            allowNull: false,
            defaultValue: DataTypes.NOW, // Đồng bộ với DEFAULT CURRENT_TIMESTAMP
        },
    },
    {
        tableName: "DanhGia",
        timestamps: false,
    }
);

// Quan hệ với bảng KhachHang
DanhGia.belongsTo(KhachHang, {
    foreignKey: "MaKhachHang",
    targetKey: "MaKhachHang",
});

// Quan hệ với bảng DatPhong
DanhGia.belongsTo(DatPhong, {
    foreignKey: "MaDatPhong",
    targetKey: "MaDatPhong",
});

// Quan hệ với bảng Phong
DanhGia.belongsTo(Phong, {
    foreignKey: "MaPhong",
    targetKey: "MaPhong",
});

module.exports = DanhGia;