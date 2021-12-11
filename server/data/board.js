import Mongoose from "mongoose";
import { useVirtualId } from "../database/database.js";
import * as userRepository from "./auth.js";

const BoardSchema = new Mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamp: true } // 자동으로 created, update 설정
);

useVirtualId(BoardSchema);
const Board = Mongoose.model("Board", BoardSchema);

export const getAll = async () => {
  return Board.find();
};

export const getAllByUsername = async (name) => {
  return Board.find({ name });
};

export const getById = async (id) => {
  return Board.findById(id);
};

export const create = async (text, userId) => {
  return userRepository.findById(userId).then((user) =>
    new Board({
      text,
      userId,
      name: user.name,
    }).save()
  );
};

export const update = async (id, text) => {
  return Board.findByIdAndUpdate(
    id,
    {
      text,
    },
    { returnOriginal: false }
  );
};

export const remove = async (id) => {
  return Board.findByIdAndDelete(id);
};
