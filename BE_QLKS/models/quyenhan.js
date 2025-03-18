const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize

const QuyenHan = sequelize.define(
    "QuyenHan", // Tên model
    {
        MaQuyen: {
            type: DataTypes.INTEGER, // Kiểu INT
            primaryKey: true,       // Khóa chính
            autoIncrement: true,    // Tự động tăng
            allowNull: false,       // Không NULL
        },
        TenQuyen: {
            type: DataTypes.STRING(50), // Giới hạn 50 ký tự
            allowNull: false,          // Không NULL
            unique: true,              // Duy nhất
        },
    },
    {
        tableName: "QuyenHan", // Khớp với tên bảng trong CSDL
        timestamps: false,      // Không tự động tạo `createdAt` và `updatedAt`
    }
);

module.exports = QuyenHan;