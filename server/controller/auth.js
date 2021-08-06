import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import userRepository from "../data/auth.js";

export async function signup(req, res) {
  const { email, password, username, nickname } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} is already exists` });
  }
  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userId = await userRepository.createUser({
    email,
    password,
    username,
    nickname,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body; // 사용자에게 받은 username, password
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });    
}

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}
