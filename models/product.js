const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./category");



const Product = sequelize.define('Product',{

    id :{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name :{
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.STRING,
        allowNull : false
    }

});

//  Définir l'association : Un produit appartient à une catégorie
Product.belongsTo(Category, {
    foreignKey : 'categoryId',
    as : 'category'
});


module.exports = Product;