const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize


const KhachHang = sequelize.define(
    "KhachHang", // Tên model
    {
        MaKhachHang: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            primaryKey: true,
            autoIncrement: true, // Thêm autoIncrement để khớp với CSDL
            allowNull: false,
        },
        HoTen: { // Đổi từ Ten thành HoTen
            type: DataTypes.STRING(50), // Giới hạn 50 ký tự như CSDL
            allowNull: false,
        },
        SoDienThoai: { // Đổi từ SDT thành SoDienThoai
            type: DataTypes.STRING(15), // Giới hạn 15 ký tự như CSDL
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING(50), // Giới hạn 50 ký tự như CSDL
            allowNull: false, // Sửa từ allowNull: true thành false
            unique: true, // Thêm unique để khớp với CSDL
        },
        DiaChi: {
            type: DataTypes.STRING(100), // Giới hạn 100 ký tự như CSDL
            allowNull: true,
        },
        CMND: { // Thêm trường CMND
            type: DataTypes.STRING(20), // Giới hạn 20 ký tự như CSDL
            allowNull: true,
        },
        MaNguoiDung: { // Thêm trường MaNguoiDung (foreign key)
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "NguoiDung", // Tên bảng liên kết
                key: "MaNguoiDung", // Khóa chính của bảng NguoiDung
            },
        },
    },
    {
        tableName: "KhachHang", // Khớp với tên bảng trong CSDL
        timestamps: false, // Không tự động tạo `createdAt` và `updatedAt`
    }
);

module.exports = KhachHang;