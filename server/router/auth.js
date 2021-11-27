import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

const validateCredential = [
  body("name").notEmpty().withMessage("name is missing"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("email").isEmail().normalizeEmail().withMessage("invalid email"),
  validate,
];

router.post("/signup", validateSignup, authController.signup);
router.post("/login", validateCredential, authController.login);
// isAuth에서 유효한 사람인지 아닌지 Check 하고 -> controller에서 처리
router.get("/me", isAuth, authController.me);

export default router;
