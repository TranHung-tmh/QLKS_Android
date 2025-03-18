const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const sequelize = require("./config/db");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes cho tất cả các bảng
app.use('/api/v1/datphong', require("./modules/routes/datphongRoutes"));
app.use('/api/v1/nguoidung', require("./modules/routes/nguoidungRoutes"));
app.use('/api/v1/nhanvien', require("./modules/routes/nhanvienRoutes"));
app.use('/api/v1/nhanvienxulybaotri', require("./modules/routes/nhanvienbaotriRoutes"));
app.use('/api/v1/nhanvienxulydatphong', require("./modules/routes/nhanviendatphongRoutes"));
app.use('/api/v1/quyenhan', require("./modules/routes/quyenhanRoutes"));
app.use('/api/v1/yeucaubaotri', require("./modules/routes/yeucaubaotriRoutes")); // Đổi đường dẫn cho YeuCauBaoTri
app.use('/api/v1/khachhang', require("./modules/routes/khachhangRoutes")); // Thêm KhachHang
app.use('/api/v1/phong', require("./modules/routes/phongRoutes")); // Thêm Phong
app.use('/api/v1/thanhtoan', require("./modules/routes/thanhtoanRoutes")); // Thêm ThanhToan
app.use('/api/v1/dichvu', require("./modules/routes/dichvuRoutes")); // Thêm DichVu
app.use('/api/v1/sudungdv', require("./modules/routes/sudungdvRoutes")); // Thêm SuDungDV

// Route test
app.get('/test', (req, res) => {
    res.status(200).send('<h1> Server Running with All APIs </h1>');
});

// Khởi động server và kiểm tra kết nối database
const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        // Kiểm tra kết nối Sequelize
        await sequelize.authenticate();
        console.log('Sequelize DB Connected'.bgCyan.white);

        // Đồng bộ hóa các model với database (nếu cần, có thể bỏ comment để tạo bảng)
        // await sequelize.sync({ force: false }); // force: true sẽ xóa và tạo lại bảng

        // Khởi động server
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`.bgMagenta.white);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();