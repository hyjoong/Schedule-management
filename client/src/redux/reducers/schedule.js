import { LOAD_SCHEDULE, ADD_SCHEDULE } from "../actionType";

const initialState = {
  count: 1,
  scheduleData: [
    {
      id: 1,
      title: "study",
      start: "2021-08-14",
      end: "2021-08-14",
    },
    {
      id: 2,
      title: "event 2",
      start: "2021-08-16",
      end: "2021-08-16",
    },
    {
      id: 3,
      title: "event 32233",
      start: "2021-08-17",
      end: "2021-08-20",
    },
  ],
};

const ScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCHEDULE:
      return {
        ...state,
        scheduleData: action.payload,
      };
    case ADD_SCHEDULE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default ScheduleReducer;
