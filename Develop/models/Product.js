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
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: false,
      autoIncrement: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isDecimal: false,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.DECIMAL,
      references: {
          model: Category,
          key: 'id'
        },
      },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;