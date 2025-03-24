const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const NguoiDung = require("./nguoidung"); // Import model NguoiDung
const TrangThai = require("./trangthai"); // Import model TrangThai

const Phong = sequelize.define(
    "Phong",
    {
        MaPhong: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        LoaiPhong: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        GiaPhong: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        MaTrangThai: { // Thay TrangThai thành MaTrangThai
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // Mặc định là "Trống" (MaTrangThai = 1)
            references: {
                model: TrangThai,
                key: "MaTrangThai",
            },
        },
        MaNguoiDung: {
            type: DataTypes.INTEGER,
            allowNull: false, // Không cho phép NULL
            references: {
                model: NguoiDung,
                key: "MaNguoiDung",
            },
        },
    },
    {
        tableName: "Phong",
        timestamps: false,
    }
);

// Quan hệ với bảng NguoiDung
Phong.belongsTo(NguoiDung, {
    foreignKey: "MaNguoiDung",
    targetKey: "MaNguoiDung",
});

// Quan hệ với bảng TrangThai
Phong.belongsTo(TrangThai, {
    foreignKey: "MaTrangThai",
    targetKey: "MaTrangThai",
});

module.exports = Phong;