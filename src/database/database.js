const { Sequelize } = require('sequelize');

const ProductModel = require('../models/product.model');
const CategoryModel = require('../models/category.model');
const UnitModel = require('../models/unit.model');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
});

const Product = ProductModel(connection, Sequelize);
const Category = CategoryModel(connection, Sequelize);
const Unit = UnitModel(connection, Sequelize);

Category.hasMany(Product);
Product.belongsTo(Category);
Unit.hasMany(Product);

Product.belongsTo(Unit);
connection.sync({force: false}).then( () =>{
    console.log('Models sync with the database')
});

module.exports = {
    Product,
    Category,
    Unit
}
