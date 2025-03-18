const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Import kết nối Sequelize
const Phong = require("./phong"); // Import model Phong

const YeuCauBaoTri = sequelize.define(
    "YeuCauBaoTri", // Tên model
    {
        MaYeuCau: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            primaryKey: true,       // Khóa chính
            allowNull: false,       // Không NULL
            autoIncrement: true,    // Tự động tăng
        },
        NgayYeuCau: {
            type: DataTypes.DATE,   // Sửa từ STRING thành DATE
            allowNull: false,       // Không NULL
        },
        MoTa: { // Thêm trường MoTa
            type: DataTypes.STRING(200), // Giới hạn 200 ký tự
            allowNull: true,            // Có thể NULL (không có NOT NULL trong CSDL)
        },
        TrangThai: { // Thêm trường TrangThai
            type: DataTypes.STRING(20), // Giới hạn 20 ký tự
            allowNull: false,           // Không NULL (có DEFAULT)
            defaultValue: "Chưa xử lý", // Giá trị mặc định như CSDL
        },
        MaPhong: {
            type: DataTypes.INTEGER, // Sửa từ STRING thành INTEGER
            allowNull: false,        // Không NULL
            references: {
                model: Phong,        // Liên kết với model Phong
                key: "MaPhong",      // Khóa chính của Phong
            },
        },
    },
    {
        tableName: "YeuCauBaoTri", // Khớp với tên bảng trong CSDL
        timestamps: false,         // Không tự động tạo `createdAt` và `updatedAt`
    }
);

// Định nghĩa các mối quan hệ giữa các bảng
YeuCauBaoTri.belongsTo(Phong, {
    foreignKey: "MaPhong", // Khóa ngoại trong bảng YeuCauBaoTri
    targetKey: "MaPhong",  // Khóa chính của bảng Phong
});

module.exports = YeuCauBaoTri;