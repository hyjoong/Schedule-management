import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 4 })
    .withMessage("password should be at least 4 characters"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("nickname").notEmpty().withMessage("nickname is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid Email"),
];

router.post("./signup", validateSignup, authController.signup);
router.post("./login", validateCredential, authController.login);

export default router;
