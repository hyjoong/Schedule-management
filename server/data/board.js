import SQ from "sequelize";
import { User } from "./auth.js";
import { sequelize } from "../database/database.js";

const DataTypes = SQ.DataTypes;
const Sequalize = SQ.Sequelize;

const Board = sequelize.define("board", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Board.belongsTo(User);

const INCLUDE_USER = {
  attributes: ["id", "text", "userId", [Sequalize.col("user.name"), "name"]],
  include: {
    model: User,
    attributes: [],
  },
};

export const getAll = async () => {
  return Board.findAll({ ...INCLUDE_USER });
};

export const getAllByUsername = async (name) => {
  return Board.findAll({
    ...INCLUDE_USER,
    include: {
      ...INCLUDE_USER.include,
      where: { name },
    },
  });
};

export const getById = async (id) => {
  return Board.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
};

export const create = async (text, userId) => {
  return Board.create({ text, userId }); //
};

export const update = async (id, text) => {
  return Board.findByPk(id, INCLUDE_USER) //
    .then((board) => {
      board.text = text;
      return board.save();
    });
};

export const remove = async (id) => {
  return Board.findByPk(id) //
    .then((board) => {
      board.destroy();
    });
};
