import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database.js";

export const Review = database.define('reviews', {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    values: [1, 2, 3, 4, 5]
  }
});
