import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database.js";
import { brands } from "./sneaker.js";
export const Brand = database.define("brands", {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    values: brands,
  },
  assortment: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: false,
  },
  //add reviewIds tomorrow
});
