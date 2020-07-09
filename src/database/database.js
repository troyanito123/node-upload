const { Sequelize } = require('sequelize');

const ProductModel = require('../models/product.model');
const CategoryModel = require('../models/category.model');
const UnitModel = require('../models/unit.model');
const UserModel = require('../models/user.model.');
const RoleModel = require('../models/rol.model');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
});

const Product = ProductModel(connection, Sequelize);
const Category = CategoryModel(connection, Sequelize);
const Unit = UnitModel(connection, Sequelize);
const User = UserModel(connection, Sequelize);
const Role = RoleModel(connection, Sequelize);

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Product);
Product.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);
Unit.hasMany(Product);
Product.belongsTo(Unit);


connection.sync({force: false}).then( () =>{
    console.log('Models sync with the database')
});

module.exports = {
    User,
    Role,
    Product,
    Category,
    Unit
}
