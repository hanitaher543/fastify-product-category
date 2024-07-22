const createCategory = require("../controllers/category.controllers");
const createProduct  = require("../controllers/product.controllers");



module.exports = async function (fastify, options) {

    fastify.post('/create-product',createProduct);
    fastify.post('/create-category', createCategory);

};