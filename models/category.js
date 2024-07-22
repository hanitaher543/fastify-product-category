const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");



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

// Fonction pour définir les associations
Category.associate = (models) => {
    Category.hasMany(models.Product, {
        foreignKey: 'categoryId',
        as: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};
module.exports = Category;