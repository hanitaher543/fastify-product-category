const Category = require("../models/category");



async function createCategory (req, res) {

    try {
        // Read data from request body
        const { nameCat, descriptionCat} = req.body;

        // Create instance from my model category
        const newCategory = await Category.create({
            nameCat,
            descriptionCat
        });

        res.status(200).send({ message : 'Category created successfully', category : newCategory});

    } catch {
        console.error('Error occurred during category creation :', error);
        res.status(500).send({ error: 'Internal server error' });

    }
}


module.exports = createCategory;