import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as boardController from "../controller/board.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateBoard = [
  body("text")
    .trim()
    .isLength({ max: 20 })
    .withMessage("Text are limited to 20 characters"),
  validate,
];

// GET  /board
// GET  /board?name=:name

router.get("/", isAuth, boardController.getBoards);

//GET /board/:id
router.get("/:id", isAuth, boardController.getBoard);

// POST /board
router.post("/", isAuth, validateBoard, boardController.createBoard);

// PUT /board/:id
router.put("/:id", isAuth, validateBoard, boardController.updateBoard);

//DELETE /board/:id
router.delete("/:id", isAuth, boardController.deleteBoard);

export default router;
