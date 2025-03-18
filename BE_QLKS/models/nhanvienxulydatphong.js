const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelizequire("../db");
const NhanVien = require("./nhanvien");
const DatPhong = require("./datphong");

const NhanVienXuLyDatPhong = sequelize.define(
    "NhanVien_XuLy_DatPhong",
    {
        MaNV: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: "NhanVien",
                key: "MaNV",
            },
        },
        MaDatPhong: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: "DatPhong",
                key: "MaDatPhong",
            },
        },
        NgayXuLy: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "NhanVien_XuLy_DatPhong",
        timestamps: false,
    }
);

// Quan hệ với bảng NhanVien và DatPhong
NhanVienXuLyDatPhong.belongsTo(NhanVien, {
    foreignKey: "MaNV",
    targetKey: "MaNV",
});
NhanVienXuLyDatPhong.belongsTo(DatPhong, {
    foreignKey: "MaDatPhong",
    targetKey: "MaDatPhong",
});

module.exports = NhanVienXuLyDatPhong;