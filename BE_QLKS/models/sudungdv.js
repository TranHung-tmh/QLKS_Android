const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const KhachHang = require("./khachhang"); // Import model KhachHang
const DichVu = require("./dichvu"); // Import model DichVu
const TrangThai = require("./trangthai"); // Import model TrangThai

const SuDungDV = sequelize.define(
    "SuDungDV",
    {
        MaSuDungDV: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        NgaySuDung: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        SoLuong: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TongTien: {
            type: DataTypes.DECIMAL(10, 2),
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
        MaDichVu: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: DichVu,
                key: "MaDichVu",
            },
        },
        MaTrangThai: { // Thay TrangThai thành MaTrangThai
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 7, // Mặc định là "Chưa phê duyệt" (MaTrangThai = 7)
            references: {
                model: TrangThai,
                key: "MaTrangThai",
            },
        },
    },
    {
        tableName: "SuDungDV",
        timestamps: false,
    }
);

// Quan hệ với bảng KhachHang
SuDungDV.belongsTo(KhachHang, {
    foreignKey: "MaKhachHang",
    targetKey: "MaKhachHang",
});

// Quan hệ với bảng DichVu
SuDungDV.belongsTo(DichVu, {
    foreignKey: "MaDichVu",
    targetKey: "MaDichVu",
});

// Quan hệ với bảng TrangThai
SuDungDV.belongsTo(TrangThai, {
    foreignKey: "MaTrangThai",
    targetKey: "MaTrangThai",
});

module.exports = SuDungDV;