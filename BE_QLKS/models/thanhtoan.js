const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const DatPhong = require("./datphong"); // Import model DatPhong
const NhanVien = require("./nhanvien");  // Import model NhanVien

const ThanhToan = sequelize.define(
    "ThanhToan",
    {
        MaThanhToan: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            primaryKey: true,       // Khóa chính
            allowNull: false,       // Không NULL
            autoIncrement: true,    // Thêm autoIncrement để khớp với CSDL
        },
        SoTien: {
            type: DataTypes.DECIMAL(10, 2), // Sửa từ STRING thành DECIMAL(10,2)
            allowNull: false,               // Không NULL
        },
        PhuongThuc: {
            type: DataTypes.STRING(20), // Giới hạn 20 ký tự như CSDL
            allowNull: false,           // Không NULL
        },
        MaDatPhong: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            allowNull: false,        // Không NULL
            references: {
                model: DatPhong,     // Liên kết với model DatPhong
                key: "MaDatPhong",   // Khóa chính của DatPhong
            },
        },
        MaNV: { // Thêm trường MaNV
            type: DataTypes.INTEGER, // Kiểu INT
            allowNull: true,         // Có thể NULL (không có NOT NULL trong CSDL)
            references: {
                model: NhanVien,     // Liên kết với model NhanVien
                key: "MaNV",         // Khóa chính của NhanVien
            },
        },
        NgayThanhToan: { // Thêm trường NgayThanhToan
            type: DataTypes.DATE,   // Kiểu DATE
            allowNull: false,       // Không NULL
        },
    },
    {
        tableName: "ThanhToan", // Khớp với tên bảng trong CSDL
        timestamps: false,      // Không tự động tạo `createdAt` và `updatedAt`
    }
);

// Định nghĩa các mối quan hệ giữa các bảng
ThanhToan.belongsTo(DatPhong, {
    foreignKey: "MaDatPhong", // Khóa ngoại trong bảng ThanhToan
    targetKey: "MaDatPhong",  // Khóa chính của bảng DatPhong
});

ThanhToan.belongsTo(NhanVien, {
    foreignKey: "MaNV",       // Khóa ngoại trong bảng ThanhToan
    targetKey: "MaNV",        // Khóa chính của bảng NhanVien
});

module.exports = ThanhToan;