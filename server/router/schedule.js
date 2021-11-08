import express from "express";
import "express-async-errors";

const router = express.Router();

router.get("/", (req, res, next) => {
  const name = req.query.name;
  const data = name ? boards.filter((b) => b.name === name) : boards;
  res.status(200).json(data);
});

// GET /schedule/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const board = boards.find((b) => b.id === id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.sendStatus(404).json({ message: `Board id(${id} not found)` });
  }
});

// POST schedules
router.post("/", (req, res, next) => {
  const { title, start, end, data } = req.body;
  const schedule = {
    title,
    text,
    createdAt: new Date(),
    data: req.dateValue,
  };
  schedules = [schedule, ...schedules]; // 만든 게시글을 제일 앞에 넣어두고 기존에 있는건 뒤에
  res.status(201).json(schedule);
});

// PUT boards/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const text = req.body.text;
  const board = boards.find((b) => b.id === id);
  if (board) {
    board.title = title;
    board.text = text;
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: `  id(${id} not found)` });
  }
});

// DELETE/boards/:id

router.delete("/:id", (req, res, next) => {
  const id = req.params.id; // id를 받아서
  boards = boards.filter((b) => b.id !== id);
  res.sendStatus(204);
});

export default router;
