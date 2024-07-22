const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product");



const Category = sequelize.define('Category',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    nameCat :{
        type : DataTypes.STRING,
        allowNull : false
    },
    descriptionCat : {
        type : DataTypes.STRING,
        allowNull : false
    }
});

//  Définir l'association : Une catégorie a plusieurs produits
Category.hasMany(Product, {
    foreignKey : 'categoryId',
    as : 'product'
});


module.exports = Category;