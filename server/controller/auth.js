import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import * as userRepository from "../data/auth.js";
import { config } from "../config.js";

export async function signup(req, res) {
  const { email, password, username, nickname } = req.body;
  const found = await userRepository.findUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} is already exists` });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    email,
    username,
    password: hashed,
    nickname,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body; // 사용자에게 받은 username, password
  const user = await userRepository.findUsername(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid user" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid  password" });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

const createJwtToken = (id) => {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
};
// 한번더 확인 (middleware에서 검사하기 떄문에 이 단계까진 거의 안 옴 )
export const me = async (req, res, next) => {
  const user = await userRepository.findById(req, userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
};
