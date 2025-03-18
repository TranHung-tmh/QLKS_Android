const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize

const Phong = sequelize.define(
    "Phong", // Tên model
    {
        MaPhong: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            primaryKey: true,
            autoIncrement: true, // Thêm autoIncrement để khớp với CSDL
            allowNull: false,
        },
        LoaiPhong: {
            type: DataTypes.STRING(50), // Giới hạn 50 ký tự như CSDL
            allowNull: false,
        },
        GiaPhong: {
            type: DataTypes.DECIMAL(10, 2), // Sửa từ STRING thành DECIMAL(10,2)
            allowNull: false, // Sửa từ allowNull: true thành false
        },
        TrangThai: { // Đổi từ TinhTrang thành TrangThai
            type: DataTypes.STRING(20), // Giới hạn 20 ký tự như CSDL
            allowNull: false,
            defaultValue: "Trống", // Thêm giá trị mặc định như CSDL
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
        tableName: "Phong", // Khớp với tên bảng trong CSDL
        timestamps: false, // Không tự động tạo `createdAt` và `updatedAt`
    }
);

module.exports = Phong;