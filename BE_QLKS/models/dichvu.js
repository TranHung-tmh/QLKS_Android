const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize

const DichVu = sequelize.define(
    "DichVu", // Tên model
    {
        MaDichVu: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            primaryKey: true,
            allowNull: false,
            autoIncrement: true, // Giữ autoIncrement để khớp với CSDL
        },
        TenDichVu: {
            type: DataTypes.STRING(50), // Giới hạn 50 ký tự như CSDL
            allowNull: false,
        },
        MoTa: {
            type: DataTypes.STRING(100), // Giới hạn 100 ký tự như CSDL
            allowNull: true, // Sửa từ allowNull: false thành true (có thể NULL trong CSDL)
        },
        GiaDichVu: {
            type: DataTypes.DECIMAL(10, 2), // Sửa từ STRING thành DECIMAL(10,2)
            allowNull: false,
        },
    },
    {
        tableName: "DichVu", // Khớp với tên bảng trong CSDL
        timestamps: false, // Không tự động tạo `createdAt` và `updatedAt`
    }
);

module.exports = DichVu;