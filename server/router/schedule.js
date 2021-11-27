import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as scheduleController from "../controller/schedule.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const validateSchedule = [
  body("title")
    .trim()
    .isLength({ max: 20 })
    .withMessage("title are limited to 20 characters"),
  validate,
];

// GET  /schedule
// GET /schedules?name=:name

router.get("/", isAuth, scheduleController.getSchedules);

//GET /schedules/:id
router.get("/:id", isAuth, scheduleController.getSchedule);

// POST /schedule
router.post("/", isAuth, validateSchedule, scheduleController.createSchedule);

// PUT /schedules/:id
router.put("/:id", isAuth, validateSchedule, scheduleController.updateSchedule);

//DELETE /shedules/:id
router.delete("/:id", isAuth, scheduleController.deleteSchedule);

export default router;
