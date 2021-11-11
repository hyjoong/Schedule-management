import Mongoose from "mongoose";
import { config } from "../config.js";

let db;
export const connectDB = async () => {
  return Mongoose.connect(config.db.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  // return Mongodb.MongoClient.connect(config.db.host) //
  //   .then((client) => (db = client.db()));
};

export const getUsers = () => {
  return db.collection("users");
};

export const getSchedule = () => {
  return db.collection("schedules");
};
