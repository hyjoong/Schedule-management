import Mongoose from "mongoose";
import { config } from "../config.js";

let db;
export const connectDB = async () => {
  return Mongoose.connect(config.db.host);
  // return Mongodb.MongoClient.connect(config.db.host) //
  //   .then((client) => (db = client.db()));
};

export const useVirtualId = (schema) => {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtuals: true });
  // userSchema에  JSON으로 변경할 때 가상요소도 포함이 되게 설정  (설정 안 하면 코드에서 id로 접근할 수 있지만 id정보가 JSON에 포함되지 않음)
  schema.set("toOject", { virtuals: true }); // console.log에 출력할 때도 보기위해
};

export const getSchedule = () => {
  return db.collection("schedules");
};
