// modules/services/authService.js
const AuthModel = require("../models/authModel");

const register = async (nguoiDungData) => {
    return AuthModel.register(nguoiDungData);
};

const findByTenDangNhap = async (tenDangNhap) => {
    return AuthModel.findByTenDangNhap(tenDangNhap);
};

module.exports = {
    register,
    findByTenDangNhap,
};