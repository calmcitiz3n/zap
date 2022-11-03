import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database.js";

export const brands = ['nike', 'adidas', 'saucony', 'reebok'];

export const Sneaker = database.define('sneakers', {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
    values: brands
  },
  sizes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    values: [getSizes()],
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

function getSizes() {
  const sizes = [];
  let smallest = 36.5;
  const biggest = 45;
  let counter = (biggest - smallest) * 2;
  while(counter--) {
    sizes.push(smallest += 0.5);
  }

  return sizes;
}