const db = require("../../config/db");
const Phong = require("../../models/phong");
const YCBT = require("../../models/yeucaubaotri");
const { fn, col } = require("sequelize");
const getAllYeuCauBaoTri = async () => {
    return await YCBT.findAll({
        include: [
            { 
                model: Phong, 
                attributes: ['SoPhong','LoaiPhong'] 
            },
        ],
        attributes: [
            'MaYC',  
            'NgayYC', 
            'NgayHoanThanh',
            [fn('DATEDIFF', col('NgayHoanThanh'), col('NgayYC')), 'SoNgayBaoTri'], 
        ],
    });
};

const getYeuCauBaoTriById = async (id) => {
    return await YCBT.findByPk (id,{
        include: [
            { 
                model: Phong, 
                attributes: ['SoPhong','LoaiPhong'] 
            },
        ],
        attributes: [
            'MaYC',  
            'NgayYC', 
            'NgayHoanThanh',
            [fn('DATEDIFF', col('NgayHoanThanh'), col('NgayYC')), 'SoNgayBaoTri'], 
        ],
    });
};

const createYeuCauBaoTri = async (yeuCauBaoTriData) => {
    return await YCBT.create(yeuCauBaoTriData);
};

const updateYeuCauBaoTri = async (id, yeuCauBaoTriData) => {
    console.log(`Tìm phản hồi với id: ${id}`); // In ra MaPhanHoi để kiểm tra
    const yeucaubaotri = await YCBT.findByPk (id,{
        include: [
            { 
                model: Phong, 
                attributes: ['SoPhong','LoaiPhong']
            },
        ],
        attributes: [
            'MaYC',  
            'NgayYC', 
            'NgayHoanThanh',
            [fn('DATEDIFF', col('NgayHoanThanh'), col('NgayYC')), 'SoNgayBaoTri'], 
        ],
    });
    if (!yeucaubaotri) throw new Error("Khong co thong tin ");

    return await yeucaubaotri.update(yeuCauBaoTriData);
};

const deleteYeuCauBaoTri = async (id) => {
    const yeuCauBaoTri = await YCBT.findByPk(id);
    if (!yeuCauBaoTri) throw new Error("Khong co thong tin");
    return await yeuCauBaoTri.destroy();
};

module.exports = {
    getAllYeuCauBaoTri,
    getYeuCauBaoTriById,
    createYeuCauBaoTri,
    updateYeuCauBaoTri,
    deleteYeuCauBaoTri,
};
