import MongoDb from "mongodb";
import { getSchedules } from "../database/database.js";
import * as userRepository from "./auth.js";

const ObjectId = MongoDb.ObjectId;

export async function getAll() {
  return getSchedules() //
    .find()
    .toArray()
    .then(mapSchedules);
}

export async function getAllByUsername(username) {
  return getSchedules() //
    .find({ username })
    .toArray()
    .then(mapSchedules);
}

export async function getById(id) {
  return getSchedules()
    .findOne({ _id: new ObjectId(id) })
    .then(mapOptionalSchedule);
}

// 날짜 값 (시작 , 끝) 두 개의 값 추가로 받아와야함 나중에 수정 username도 뺴야될 거 같은데
export async function create(text, userId) {
  const { username } = await userRepository.findById(userId);
  const schedule = {
    text,
    userId,
    username: username,
  };
  return getSchedules()
    .insertOne(schedule)
    .then((data) => mapOptionalSchedule({ ...schedule, _id: data.insertedId }));
}

export async function update(id, text) {
  return getSchedules()
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { text } },
      { returnDocument: "after" }
    )
    .then((result) => result.value)
    .then(mapOptionalSchedule);
}

export async function remove(id) {
  return getSchedules().deleteOne({ _id: new ObjectId(id) });
}

function mapOptionalSchedule(schedule) {
  return schedule ? { ...schedule, id: schedule._id.toString() } : schedule;
}

function mapSchedules(schedules) {
  return schedules.map(mapOptionalSchedule);
}
