const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const DatPhong = require("./datphong"); // Import model DatPhong
const NhanVien = require("./nhanvien");  // Import model NhanVien
const KhachHang = require("./khachhang"); // Import model KhachHang (thêm mới)

const ThanhToan = sequelize.define(
    "ThanhToan",
    {
        MaThanhToan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        SoTien: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        PhuongThuc: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        MaDatPhong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: DatPhong,
                key: "MaDatPhong",
            },
        },
        MaNV: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: NhanVien,
                key: "MaNV",
            },
        },
        NgayThanhToan: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        MaKhachHang: { // Thêm trường MaKhachHang
            type: DataTypes.INTEGER,
            allowNull: false, // Có thể thay đổi thành true nếu bạn cho phép NULL
            references: {
                model: KhachHang,     // Liên kết với model KhachHang
                key: "MaKhachHang",   // Khóa chính của KhachHang
            },
        },
    },
    {
        tableName: "ThanhToan",
        timestamps: false,
    }
);

// Định nghĩa các mối quan hệ giữa các bảng
ThanhToan.belongsTo(DatPhong, {
    foreignKey: "MaDatPhong",
    targetKey: "MaDatPhong",
});

ThanhToan.belongsTo(NhanVien, {
    foreignKey: "MaNV",
    targetKey: "MaNV",
});

ThanhToan.belongsTo(KhachHang, { // Thêm quan hệ với KhachHang
    foreignKey: "MaKhachHang",
    targetKey: "MaKhachHang",
});

module.exports = ThanhToan;