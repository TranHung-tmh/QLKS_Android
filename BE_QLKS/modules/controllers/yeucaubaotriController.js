const YeuCauBaoTriService = require("../services/yeucaubaotriService");

// Lấy tất cả yêu cầu bảo trì
const getYeuCauBaoTri = async (req, res) => {
    try {
        const data = await YeuCauBaoTriService.getAllYeuCauBaoTri();
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy danh sách yêu cầu bảo trì",
            });
        }
        res.status(200).send({
            success: true,
            message: "Danh sách yêu cầu bảo trì",
            totalRequests: data.length,
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getYeuCauBaoTri API",
            error: error.message,
        });
    }
};

// Lấy yêu cầu bảo trì theo ID
const getYeuCauBaoTriByID = async (req, res) => {
    try {
        const maYC = req.params.id;
        const data = await YeuCauBaoTriService.getYeuCauBaoTriByID(maYC);
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Không tìm thấy thông tin yêu cầu bảo trì",
            });
        }
        res.status(200).send({
            success: true,
            requestDetails: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong getYeuCauBaoTriByID API",
            error: error.message,
        });
    }
};

// Thêm mới yêu cầu bảo trì
const createYeuCauBaoTri = async (req, res) => {
    try {
        const baotriData = req.body;
        await YeuCauBaoTriService.createYeuCauBaoTri(baotriData);
        res.status(201).send({
            success: true,
            message: "Thêm mới yêu cầu bảo trì thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong createYeuCauBaoTri API",
            error: error.message,
        });
    }
};

// Cập nhật yêu cầu bảo trì
const updateYeuCauBaoTri = async (req, res) => {
    try {
        const maYC = req.params.id;
        const { MaPhong, NgayYC, NgayHoanThanh } = req.body;
        const yeuCauBaoTri = { MaPhong, NgayYC, NgayHoanThanh };
        await YeuCauBaoTriService.updateYeuCauBaoTri(maYC, yeuCauBaoTri);
        res.status(200).send({
            success: true,
            message: "Cập nhật yêu cầu bảo trì thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong updateYeuCauBaoTri API",
            error: error.message,
        });
    }
};

// Xóa yêu cầu bảo trì
const deleteYeuCauBaoTri = async (req, res) => {
    try {
        const maYC = req.params.id;
        await YeuCauBaoTriService.deleteYeuCauBaoTri(maYC);
        res.status(200).send({
            success: true,
            message: "Xóa yêu cầu bảo trì thành công",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Lỗi trong deleteYeuCauBaoTri API",
            error: error.message,
        });
    }
};

module.exports = {
    getYeuCauBaoTri,
    getYeuCauBaoTriByID,
    createYeuCauBaoTri,
    updateYeuCauBaoTri,
    deleteYeuCauBaoTri,
};
