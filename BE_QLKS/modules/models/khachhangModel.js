const KhachHang = require("../../models/khachhang");

const getAllCustomers = async () => {
    return await KhachHang.findAll();
};

const getCustomerById = async (id) => {
    return await KhachHang.findByPk(id);
};

const createCustomer = async (customerData) => {
    return await KhachHang.create(customerData);
};

const updateCustomer = async (id, customerData) => {
    const customer = await KhachHang.findByPk(id);
    if (!customer) throw new Error("Khách hàng không tồn tại");
    return await customer.update(customerData);
};

const deleteCustomer = async (id) => {
    const customer = await KhachHang.findByPk(id);
    if (!customer) throw new Error("Khách hàng không tồn tại");
    return await customer.destroy();
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
