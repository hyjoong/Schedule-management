import Mongoose from "mongoose";
import { useVirtualId } from "../database/database.js";
import * as userRepository from "./auth.js";

// 시작 날짜, 종료 날짜 두개의 key값 추가해야함  (일단 textm userId 만 )
const ScheduleSchema = new Mongoose.Schema(
  {
    text: { type: String, required: true },
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

export const create = async (text, start, end, userId) => {
  return userRepository.findById(userId).then((user) =>
    new Plan({
      text,
      userId,
      name: user.name,
      start,
      end,
    }).save()
  );
};

export const update = async (id, text, start, end) => {
  return Plan.findByIdAndUpdate(
    id,
    {
      text,
      start,
      end,
    },
    { returnOriginal: false }
  );
};

export const remove = async (id) => {
  return Plan.findByIdAndDelete(id);
};
