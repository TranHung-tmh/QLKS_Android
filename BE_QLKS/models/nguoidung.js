const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const QuyenHan = require("./quyenhan");

const NguoiDung = sequelize.define(
    "NguoiDung",
    {
        MaNguoiDung: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        TenDangNhap: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        MatKhau: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        MaQuyen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "QuyenHan",
                key: "MaQuyen",
            },
        },
    },
    {
        tableName: "NguoiDung",
        timestamps: false,
    }
);

// Quan hệ với bảng QuyenHan
NguoiDung.belongsTo(QuyenHan, {
    foreignKey: "MaQuyen",
    targetKey: "MaQuyen",
});

module.exports = NguoiDung;