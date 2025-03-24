const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize

const TrangThai = sequelize.define(
    "TrangThai",
    {
        MaTrangThai: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        TenTrangThai: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        LoaiTrangThai: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },
    {
        tableName: "TrangThai",
        timestamps: false,
    }
);

module.exports = TrangThai;