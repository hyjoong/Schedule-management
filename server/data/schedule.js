import MongoDb from "mongodb";
import { getSchedules } from "../database/database.js";
import * as userRepository from "./auth.js";

const ObjectId = MongoDb.ObjectId;

export const getAll = async () => {
  return getSchedules() //
    .find()
    .toArray()
    .then(mapSchedules);
};

export const getAllByUsername = async (username) => {
  return getSchedules() //
    .find({ username })
    .toArray()
    .then(mapSchedules);
};

export const getById = async (id) => {
  return getSchedules()
    .findOne({ _id: new ObjectId(id) })
    .then(mapOptionalSchedule);
};

// 날짜 값 (시작 , 끝) 두 개의 값 추가로 받아와야함 나중에 수정 username도 뺴야될 거 같은데
export const create = async (text, userId) => {
  const { username } = await userRepository.findById(userId);
  const schedule = {
    text,
    userId,
    username: username,
  };
  return getSchedules()
    .insertOne(schedule)
    .then((data) => mapOptionalSchedule({ ...schedule, _id: data.insertedId }));
};

export const update = async (id, text) => {
  return getSchedules()
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { text } },
      { returnDocument: "after" }
    )
    .then((result) => result.value)
    .then(mapOptionalSchedule);
};

export const remove = async (id) => {
  return getSchedules().deleteOne({ _id: new ObjectId(id) });
};

export const mapOptionalSchedule = async (schedule) => {
  return schedule ? { ...schedule, id: schedule._id.toString() } : schedule;
};

export const mapSchedules = async (schedules) => {
  return schedules.map(mapOptionalSchedule);
};
