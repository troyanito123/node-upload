const { Sequelize } = require('sequelize');

const ProductModel = require('../models/product.model')

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const Product = ProductModel(connection, Sequelize);

connection.sync({force: false}).then( () =>{
    console.log('Product model sync with the database')
});

module.exports = {
    Product
}
