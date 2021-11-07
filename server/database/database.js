import Mongodb from "mongodb";
import { config } from "../config.js";

let db;
export const connectDB = async () => {
  return Mongodb.MongoClient.connect(config.db.host) //
    .then((client) => (db = client.db()));
};

export const getUsers = () => {
  return db.collection("users");
};

export const getSchedule = () => {
  return db.collection("schedules");
};
