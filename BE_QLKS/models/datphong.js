const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const KhachHang = require("./khachhang"); // Import model KhachHang
const Phong = require("./phong");

const DatPhong = sequelize.define(
    "DatPhong", // Tên model
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
                model: KhachHang, // Liên kết với model KhachHang
                key: "MaKhachHang", // Trường khóa chính của KhachHang
            },
        },
        MaPhong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Phong, // Liên kết với model Phong
                key: "MaPhong", // Trường khóa chính của Phong
            },
        },
        TrangThai: { // Thêm cột TrangThai
            type: DataTypes.STRING(20), // VARCHAR(20)
            allowNull: false, // Vì có DEFAULT nên không cần allowNull: true
            defaultValue: "Đang xử lý", // Giá trị mặc định
        },
    },
    {
        tableName: "DatPhong", // Tên bảng trong MySQL
        timestamps: false, // Không tự động tạo `createdAt` và `updatedAt`
    }
);

// Quan hệ với bảng KhachHang
DatPhong.belongsTo(KhachHang, {
    foreignKey: "MaKhachHang", // Khóa ngoại trong bảng DatPhong
    targetKey: "MaKhachHang", // Khóa chính của bảng KhachHang
});

// Quan hệ với bảng Phong
DatPhong.belongsTo(Phong, {
    foreignKey: "MaPhong", // Khóa ngoại trong bảng DatPhong
    targetKey: "MaPhong", // Khóa chính của bảng Phong
});

module.exports = DatPhong;