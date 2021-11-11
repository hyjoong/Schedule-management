import MongoDb from "mongodb";
import { getUsers } from "../database/database.js";

const ObjectId = MongoDb.ObjectId;

export const findUsername = async (username) => {
  return getUsers()
    .findOne({ username: username }) //
    .then(mapOptionalUser);
};

export const findById = async (id) => {
  return getUsers()
    .findOne({ _id: new ObjectId(id) }) // mongoDb에 _id로 저장이 되어있어서 이렇게 해야함
    .then(mapOptionalUser);
};

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}

export const mapOptionalUser = (user) => {
  return user ? { ...user, id: user._id.toString() } : user;
};
