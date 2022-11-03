import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database.js";

export const User = database.define('users', {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});