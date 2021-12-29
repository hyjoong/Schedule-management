import SQ from "sequelize";
import { sequelize } from "../database/database.js";

const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  { timestamps: false }
);

export async function findByName(name) {
  return User.findOne({ where: { name } });
}

export const findById = (id) => {
  return User.findByPk(id);
};

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
}
