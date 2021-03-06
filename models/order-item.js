const { DataTypes } = require("sequelize");

const sequelize = require("../util/db");

const OrderItem = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  quantity: DataTypes.INTEGER,
});

module.exports = OrderItem;
