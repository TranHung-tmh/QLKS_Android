const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const NhanVien = require("./nhanvien");
const YeuCauBaoTri = require("./yeucaubaotri");

const NhanVienXuLyBaoTri = sequelize.define(
    "NhanVien_XuLy_BaoTri",
    {
        MaNV: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: "NhanVien",
                key: "MaNV",
            },
        },
        MaYeuCau: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: "YeuCauBaoTri",
                key: "MaYeuCau",
            },
        },
        NgayHoanThanh: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "NhanVien_XuLy_BaoTri",
        timestamps: false,
    }
);

// Quan hệ với bảng NhanVien và YeuCauBaoTri
NhanVienXuLyBaoTri.belongsTo(NhanVien, {
    foreignKey: "MaNV",
    targetKey: "MaNV",
});
NhanVienXuLyBaoTri.belongsTo(YeuCauBaoTri, {
    foreignKey: "MaYeuCau",
    targetKey: "MaYeuCau",
});

module.exports = NhanVienXuLyBaoTri;