const Category = require('../models/category');
const Product = require ('../models/product')


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


module.exports = createProduct;