import Mongoose from "mongoose";
import { useVirtualId } from "../database/database.js";
import * as userRepository from "./auth.js";
 
const ScheduleSchema = new Mongoose.Schema(
  {
    title: { type: String, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  { timestamp: true } // 자동으로 created, update 설정
);

useVirtualId(ScheduleSchema);
const Plan = Mongoose.model("Plan", ScheduleSchema);

export const getAll = async () => {
  return Plan.find();
};

export const getAllByUsername = async (name) => {
  return Plan.find({ name });
};

export const getById = async (id) => {
  return Plan.findById(id);
};

export const create = async (title, start, end, userId) => {
  return userRepository.findById(userId).then((user) =>
    new Plan({
      title,
      userId,
      name: user.name,
      start,
      end,
    }).save()
  );
};

export const update = async (id, title, start, end) => {
  return Plan.findByIdAndUpdate(
    id,
    {
      title,
      start,
      end,
    },
    { returnOriginal: false }
  );
};

export const remove = async (id) => {
  return Plan.findByIdAndDelete(id);
};
