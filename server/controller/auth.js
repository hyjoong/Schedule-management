import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import * as userRepository from "../data/auth.js";
import { config } from "../config.js";

export async function signup(req, res) {
  const { password, name, email } = req.body;
  const found = await userRepository.findByEmail(email);
  if (found) {
    return res.status(409).json({ message: `${email} already exists` });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    password: hashed,
    name,
    email,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, email });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await userRepository.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: `Invalid ${email}` });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, email });
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
