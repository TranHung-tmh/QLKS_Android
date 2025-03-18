const khachhangModel = require("../models/khachhangModel");

const getAllCustomers = async () => {
    const customers = await khachhangModel.getAllCustomers();
    return customers;
};

const getCustomerById = async (id) => {
    return await khachhangModel.getCustomerById(id);
};
    
const createCustomer = async (customerData) => {
    return await khachhangModel.createCustomer(customerData);
};

const updateCustomer = async (id, customerData) => {
    return await khachhangModel.updateCustomer(id, customerData);
};

const deleteCustomer = async (id) => {
    return await khachhangModel.deleteCustomer(id);
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
