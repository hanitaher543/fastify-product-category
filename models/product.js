const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");



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
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Category',
            key: 'id'
        } }

});

// Fonction pour définir les associations
Product.associate = (models) => {
    Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};


module.exports = Product;