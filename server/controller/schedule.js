import * as scheduleRepository from "../data/schedule.js";

export const getSchedules = async (req, res) => {
  const name = req.query.name;
  const data = await (name
    ? scheduleRepository.getAllByUsername(name)
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

export const createSchedule = async (req, res, next) => {
  const { text, start, end } = req.body;
  const schedule = await scheduleRepository.create(
    text,
    start,
    end,
    req.userId
  );
  res.status(201).json(schedule);
};

export const updateSchedule = async (req, res, next) => {
  const id = req.params.id;
  const { text, start, end } = req.body;
  const schedule = await scheduleRepository.getById(id);
  if (!schedule) {
    return res.status(404).json({ message: `Schedule not found: ${id}` });
  }
  if (schedule.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await scheduleRepository.update(id, text, start, end);
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
