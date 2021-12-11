import express from "express";
import "express-async-errors";
import { body } from "express-validator
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validatePost = [
  body("text")
    .trim()
    .isLength({ max: 20 })
    .withMessage("Text are limited to 20 characters"),
  validate,
];

// GET  /post
// GET /post?name=:name

router.get("/", isAuth);

//GET /posts/:id
router.get("/:id", isAuth);

// POST /post
router.post("/", isAuth);

// PUT /posts/:id
router.put("/:id", isAuth);

//DELETE /posts/:id
router.delete("/:id", isAuth);

export default router;
