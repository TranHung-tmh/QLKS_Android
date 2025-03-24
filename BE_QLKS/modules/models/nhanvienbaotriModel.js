const NhanVienXuLyBaoTri = require("../../models/nhanvienxulybaotri");
const NhanVien = require("../../models/nhanvien");
const YeuCauBaoTri = require("../../models/yeucaubaotri");

// Lấy tất cả bản ghi nhân viên xử lý bảo trì
const getAllNhanVienXuLyBaoTri = async () => {
    return await NhanVienXuLyBaoTri.findAll({
        include: [
            { model: NhanVien, attributes: ["HoTen"] },
            { model: YeuCauBaoTri, attributes: ["MoTa"] },
        ],
    });
};

// Lấy thông tin nhân viên xử lý bảo trì theo MaNV và MaYeuCau
const getNhanVienXuLyBaoTriByID = async (maNV, maYeuCau) => {
    return await NhanVienXuLyBaoTri.findOne({
        where: { MaNV: maNV, MaYeuCau: maYeuCau },
        include: [
            { model: NhanVien, attributes: ["HoTen"] },
            { model: YeuCauBaoTri, attributes: ["MoTa"] },
        ],
    });
};

// Thêm mới bản ghi nhân viên xử lý bảo trì
const createNhanVienXuLyBaoTri = async (recordData) => {
    return await NhanVienXuLyBaoTri.create(recordData);
};

// Cập nhật thông tin nhân viên xử lý bảo trì
const updateNhanVienXuLyBaoTri = async (maNV, maYeuCau, recordData) => {
    const record = await NhanVienXuLyBaoTri.findOne({
        where: { MaNV: maNV, MaYeuCau: maYeuCau },
    });
    if (!record) throw new Error("Bản ghi không tồn tại");
    return await record.update(recordData);
};

// Xóa bản ghi nhân viên xử lý bảo trì
const deleteNhanVienXuLyBaoTri = async (maNV, maYeuCau) => {
    const record = await NhanVienXuLyBaoTri.findOne({
        where: { MaNV: maNV, MaYeuCau: maYeuCau },
    });
    if (!record) throw new Error("Bản ghi không tồn tại");
    return await record.destroy();
};

module.exports = {
    getAllNhanVienXuLyBaoTri,
    getNhanVienXuLyBaoTriByID,
    createNhanVienXuLyBaoTri,
    updateNhanVienXuLyBaoTri,
    deleteNhanVienXuLyBaoTri,
};