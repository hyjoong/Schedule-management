import { LOAD_SCHEDULE, ADD_SCHEDULE } from "./actionType";

const LoadScheduleAction = (Schedule) => ({
  type: LOAD_SCHEDULE,
  payload: Schedule,
});

const AddSchedule = (Schedule) => ({
  type: ADD_SCHEDULE,
  playload: Schedule,
});

export { LoadScheduleAction, AddSchedule };
