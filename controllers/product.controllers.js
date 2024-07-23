const Category = require('../models/category');
const Product  = require ('../models/product');
const { Op }   = require('sequelize');




async function createProduct (req, res) {

    // Read data from request body
    const { name, description, price } = req.body;
    //console.log(req.body);
    const categoryId = req.query.categoryId;
    console.log('Category ID:', categoryId);

    try{
    // Vérifiez si la catégorie existe
    const category = await Category.findByPk(categoryId);
    if (!category) {
        return res.status(404).send({ error: 'Category not found' });
        }

    // Create instance from my model Task
    const newProduct = await Product.create({
        name,
        description,
        price,
        categoryId // Utilisez directement categoryId reçu de req.query
    });

    res.status(200).send({ message : 'Product created successfully', product : newProduct});

    } catch (error){
        console.error('Error occurred during product creation :', error);
        res.status(500).send({ error: 'Internal server error' });

    }
};

   // API REST GET: Get all products registered in the database
async function getAllProducts (req, res){
    try{
        // Fetch all products from the database
        const products = await Product.findAll();
        console.log(products)
        
         // Return the prpducts as response message
        res.status(200).send({ message :'The products that exist in the database are ', products});

    } catch ( error){
        console.error('Error occurred while fetching products :', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};

// API REST GET : Get all products who this price greater than 100 registered in the database 
async function getAllProds(req, res){
    try{
         // Fetch all products from the database
         const products = await Product.findAll({
            where: {
                price: {
                    [Op.gt]: '100' // Using string comparison, but you can convert price to a number if needed
                }
            }
        });
        console.log(Op)
         //console.log(products)         
          // Return the prpducts as response message
         res.status(200).send({ message :'The products that exist in the database are ', products});

    } catch (error){
        console.error('Error occurred while fetching products :', error);
        res.status(500).send({ error: 'Internal server error' });
    }
}; 



module.exports = createProduct;
module.exports = getAllProducts;
module.exports = getAllProds;