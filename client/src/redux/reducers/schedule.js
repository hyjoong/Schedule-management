import { LOAD_SCHEDULE, ADD_SCHEDULE, DELETE_SCHEDULE } from "../actionType";

const initialState = {
  count: 1,
  scheduleData: [
    {
      id: 0,
      title: "study",
      dateValue: "2021-08-14",
      start: "2021-08-14",
      end: "2021-08-14",
    },
    {
      id: 1,
      title: "event 2",
      dateValue: "2021-08-16",
      start: "2021-08-16",
      end: "2021-08-16",
    },
    {
      id: 2,
      title: "event 32233",
      dateValue: "2021-08-17",
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
        scheduleData: action.data,
      };
    case ADD_SCHEDULE:
      return {
        ...state,
        scheduleData: [...state.scheduleData, action.data],
      };
    case DELETE_SCHEDULE:
      console.log(action.data);
      return {
        ...state,
        scheduleData: state.scheduleData.filter(
          (data) => data.id !== action.data
        ),
      };
    default:
      return state;
  }
};

export default ScheduleReducer;
