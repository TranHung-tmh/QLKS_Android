const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const Phong = require("./phong"); // Import model Phong
const TrangThai = require("./trangthai"); // Import model TrangThai

const YeuCauBaoTri = sequelize.define(
    "YeuCauBaoTri",
    {
        MaYeuCau: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        NgayYeuCau: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        MoTa: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        MaTrangThai: { // Thay TrangThai thành MaTrangThai
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 9, // Mặc định là "Chưa xử lý" (MaTrangThai = 9)
            references: {
                model: TrangThai,
                key: "MaTrangThai",
            },
        },
        MaPhong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Phong,
                key: "MaPhong",
            },
        },
        NgayHoanThanh: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: "YeuCauBaoTri",
        timestamps: false,
    }
);

// Quan hệ với bảng Phong
YeuCauBaoTri.belongsTo(Phong, {
    foreignKey: "MaPhong",
    targetKey: "MaPhong",
});

// Quan hệ với bảng TrangThai
YeuCauBaoTri.belongsTo(TrangThai, {
    foreignKey: "MaTrangThai",
    targetKey: "MaTrangThai",
});

module.exports = YeuCauBaoTri;