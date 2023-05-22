// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const Category = require('./Category');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // defining the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // defining the product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // defining the price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // defining the stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // defining the category_id column
    category_id: {
      type: DataTypes.INTEGER,
      // this references the model id for the category
      references: {
          model: Category,
          key: 'id'
        },
      },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;