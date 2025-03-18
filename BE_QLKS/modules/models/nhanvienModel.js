const NhanVien = require("../../models/nhanvien");
const NguoiDung = require("../../models/nguoidung");

// Lấy tất cả nhân viên
const getAllNhanVien = async () => {
    return await NhanVien.findAll({
        include: [
            { model: NguoiDung, attributes: ["TenDangNhap"] }, // Lấy tên đăng nhập
        ],
    });
};

// Lấy thông tin nhân viên theo ID
const getNhanVienByID = async (id) => {
    return await NhanVien.findByPk(id, {
        include: [
            { model: NguoiDung, attributes: ["TenDangNhap"] },
        ],
    });
};

// Thêm mới nhân viên
const createNhanVien = async (employeeData) => {
    return await NhanVien.create(employeeData);
};

// Cập nhật thông tin nhân viên
const updateNhanVien = async (id, employeeData) => {
    const employee = await NhanVien.findByPk(id);
    if (!employee) throw new Error("Nhân viên không tồn tại");
    return await employee.update(employeeData);
};

// Xóa nhân viên
const deleteNhanVien = async (id) => {
    const employee = await NhanVien.findByPk(id);
    if (!employee) throw new Error("Nhân viên không tồn tại");
    return await employee.destroy();
};

module.exports = { getAllNhanVien, getNhanVienByID, createNhanVien, updateNhanVien, deleteNhanVien };