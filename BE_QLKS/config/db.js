const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("qlks", "root", "12345", {
    host: "localhost",
    dialect: "mysql", // Đảm bảo dòng này tồn tại
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Kết nối MySQL thành công với Sequelize!");
    } catch (error) {
        console.error("Không thể kết nối với cơ sở dữ liệu:", error.message);
    }
})();

module.exports = sequelize;