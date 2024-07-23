const createCategory = require("../controllers/category.controllers");
const createProduct  = require("../controllers/product.controllers");
const getAllProducts = require ("../controllers/product.controllers");


module.exports = async function (fastify, options) {

    fastify.post('/create-product',createProduct);
    fastify.post('/create-category', createCategory);
    fastify.get('/get-all-products', getAllProducts);

};