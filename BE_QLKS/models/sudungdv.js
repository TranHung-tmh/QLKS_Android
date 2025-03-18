const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const KhachHang = require("./khachhang"); // Import model KhachHang
const DichVu = require("./dichvu"); // Import model DichVu

const SuDungDV = sequelize.define(
    "SuDungDV", // Tên model
    {
        MaSuDungDV: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            primaryKey: true,       // Khóa chính
            allowNull: false,       // Không NULL
            autoIncrement: true,    // Tự động tăng
        },
        NgaySuDung: {
            type: DataTypes.DATE,   // Sửa từ TEXT thành DATE
            allowNull: false,       // Không NULL
        },
        SoLuong: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            allowNull: false,        // Sửa từ allowNull: true thành false
        },
        TongTien: {
            type: DataTypes.DECIMAL(10, 2), // Sửa từ STRING thành DECIMAL(10,2)
            allowNull: false,               // Sửa từ allowNull: true thành false
        },
        MaKhachHang: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            allowNull: false,        // Không NULL
            references: {
                model: KhachHang,    // Liên kết với model KhachHang
                key: "MaKhachHang",  // Trường khóa chính của KhachHang
            },
        },
        MaDichVu: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            allowNull: false,        // Không NULL
            references: {
                model: DichVu,       // Liên kết với model DichVu
                key: "MaDichVu",     // Trường khóa chính của DichVu
            },
        },
    },
    {
        tableName: "SuDungDV", // Khớp với tên bảng trong CSDL
        timestamps: false,     // Không tự động tạo `createdAt` và `updatedAt`
    }
);

// Định nghĩa các mối quan hệ giữa các bảng
SuDungDV.belongsTo(KhachHang, {
    foreignKey: "MaKhachHang", // Khóa ngoại trong bảng SuDungDV
    targetKey: "MaKhachHang",  // Khóa chính của bảng KhachHang
});

SuDungDV.belongsTo(DichVu, {
    foreignKey: "MaDichVu",    // Khóa ngoại trong bảng SuDungDV
    targetKey: "MaDichVu",     // Khóa chính của bảng DichVu
});

module.exports = SuDungDV;