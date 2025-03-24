const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const KhachHang = require("./khachhang"); // Import model KhachHang
const Phong = require("./phong");
const TrangThai = require("./trangthai"); // Import model TrangThai

const DatPhong = sequelize.define(
    "DatPhong",
    {
        MaDatPhong: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        NgayDat: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        NgayTra: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        MaKhachHang: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: KhachHang,
                key: "MaKhachHang",
            },
        },
        MaPhong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Phong,
                key: "MaPhong",
            },
        },
        MaTrangThai: { // Thay TrangThai thành MaTrangThai
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 4, // Mặc định là "Đang xử lý" (MaTrangThai = 4)
            references: {
                model: TrangThai,
                key: "MaTrangThai",
            },
        },
    },
    {
        tableName: "DatPhong",
        timestamps: false,
    }
);

// Quan hệ với bảng KhachHang
DatPhong.belongsTo(KhachHang, {
    foreignKey: "MaKhachHang",
    targetKey: "MaKhachHang",
});

// Quan hệ với bảng Phong
DatPhong.belongsTo(Phong, {
    foreignKey: "MaPhong",
    targetKey: "MaPhong",
});

// Quan hệ với bảng TrangThai
DatPhong.belongsTo(TrangThai, {
    foreignKey: "MaTrangThai",
    targetKey: "MaTrangThai",
});

module.exports = DatPhong;