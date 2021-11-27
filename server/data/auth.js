import Mongoose from "mongoose";
import { useVirtualId } from "../database/database.js";

const userSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

useVirtualId(userSchema); // 가상의 id추가
const User = Mongoose.model("User", userSchema); // User라는 collection을 userSchema와 연결

export async function findByName(name) {
  return User.findOne({ name });
}
export const findById = async (id) => {
  return User.findById(id);
};

export async function createUser(user) {
  return new User(user).save().then((data) => data.id);
}
