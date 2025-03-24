// server.js
const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const sequelize = require("./config/db");

// Import các model để đồng bộ
require("./models/nguoidung");
require("./models/quyenhan");
require("./models/datphong");
require("./models/nhanvien");
require("./models/nhanvienxulybaotri");
require("./models/nhanvienxulydatphong");
require("./models/yeucaubaotri");
require("./models/khachhang");
require("./models/phong");
require("./models/thanhtoan");
require("./models/dichvu");
require("./models/sudungdv");
require("./models/danhgia");
require("./models/thongkedoanhthu");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes không cần xác thực (đăng nhập, đăng ký)
app.use('/api/auth', require("./modules/routes/authRoutes"));

// Routes - Phân quyền chi tiết trong từng file route
app.use('/api/v1/datphong', require("./modules/routes/datphongRoutes"));
app.use('/api/v1/nguoidung', require("./modules/routes/nguoidungRoutes"));
app.use('/api/v1/nhanvien', require("./modules/routes/nhanvienRoutes"));
app.use('/api/v1/nhanvienxulybaotri', require("./modules/routes/nhanvienbaotriRoutes"));
app.use('/api/v1/nhanvienxulydatphong', require("./modules/routes/nhanviendatphongRoutes"));
app.use('/api/v1/quyenhan', require("./modules/routes/quyenhanRoutes"));
app.use('/api/v1/yeucaubaotri', require("./modules/routes/yeucaubaotriRoutes"));
app.use('/api/v1/khachhang', require("./modules/routes/khachhangRoutes"));
app.use('/api/v1/phong', require("./modules/routes/phongRoutes"));
app.use('/api/v1/thanhtoan', require("./modules/routes/thanhtoanRoutes"));
app.use('/api/v1/dichvu', require("./modules/routes/dichvuRoutes"));
app.use('/api/v1/sudungdv', require("./modules/routes/sudungdvRoutes"));
app.use("/api/v1/danhgia", require("./modules/routes/danhgiaRoutes"));
app.use("/api/v1/thongke", require("./modules/routes/thongkedoanhthuRoutes"));

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

        // Đồng bộ hóa các model với database
        await sequelize.sync({ force: false });
        console.log('Models Synced with Database'.bgCyan.white);

        // Khởi động server
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`.bgMagenta.white);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();