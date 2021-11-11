import * as scheduleRepository from "../data/schedule.js";

export const getSchedules = async (req, res) => {
  const username = req.query.username;
  const data = await (username
    ? scheduleRepository.getAllByUsername(username)
    : scheduleRepository.getAll());
  res.status(200).json(data);
};

export const getSchedule = async (req, res, next) => {
  const id = req.params.id;
  const schedule = await scheduleRepository.getById(id);
  if (schedule) {
    res.status(200).json(schedule);
  } else {
    res.status(404).json({ message: `Schedule id(${id}) not found` });
  }
};

export const createSchedulwe = async (req, res, next) => {
  const { text } = req.body;
  const schedule = await scheduleRepository.create(text, req.userId);
  res.status(201).json(schedule);
};

// date값도 받아야함 나중에 수정
export const updateSchedule = async (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const schedule = await scheduleRepository.getById(id);
  if (!schedule) {
    return res.status(404).json({ message: `Schedule not found: ${id}` });
  }
  if (schedule.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await scheduleRepository.update(id, text);
  res.status(200).json(updated);
};

export const deleteSchedule = async (req, res, next) => {
  const id = req.params.id;
  const schedule = await scheduleRepository.getById(id);
  if (!schedule) {
    return res.status(404).json({ message: `Schedule not found: ${id}` });
  }
  if (schedule.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await scheduleRepository.remove(id);
  res.sendStatus(204);
};
