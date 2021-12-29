import SQ from "sequelize";
import { User } from "./auth.js";
import { sequelize } from "../database/database.js";

const DataTypes = SQ.DataTypes;
const Sequalize = SQ.Sequelize;

const Plan = sequelize.define("plan", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  start: {
    type: Sequalize.DATE,
    allowNull: false,
  },
  end: {
    type: Sequalize.DATE,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Plan.belongsTo(User);

const INCLUDE_USER = {
  attributes: ["id", "title", "userId", [Sequalize.col("user.name"), "name"]],
  include: {
    model: User,
    attributes: [],
  },
};

export const getAll = async () => {
  return Plan.findAll({ ...INCLUDE_USER });
};

export const getAllByUsername = async (name) => {
  return Plan.findAll({
    ...INCLUDE_USER,
    include: {
      ...INCLUDE_USER.include,
      where: { name },
    },
  });
};

export const getById = async (id) => {
  return Plan.findOne({
    where: { id },
  });
};

export const create = async (title, start, end, userId) => {
  return await Plan.create({ title, start, end, userId }); //
};

export const update = async (id, title, start, end) => {
  return Plan.findByPk(id, INCLUDE_USER) //
    .then((paln) => {
      paln.title = title;
      paln.start = start;
      paln.end = end;
      return paln.save();
    });
};

export const remove = async (id) => {
  return Plan.findByPk(id) //
    .then((plan) => {
      plan.destroy();
    });
};
