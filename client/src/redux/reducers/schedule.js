import produce from "immer";

import {
  LOAD_PLAN,
  ADD_PLAN,
  DELETE_PLAN,
  LOAD_PLAN_SUCCESS,
  LOAD_PLAN_FAILURE,
  ADD_PLAN_SUCCESS,
  ADD_PLAN_FAILURE,
  UPDATE_PLAN,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PLAN_FAIILURE,
  DELETE_PLAN_SUCCESS,
  DELETE_PLAN_FAILURE,
} from "../actionType";

const initialState = {
  count: 1,
  scheduleData: [
    {
      id: 0,
      title: "study",
      dateValue: "2021-11-14",
      start: "2021-11-14",
      end: "2021-11-15",
    },
    {
      id: 1,
      title: "event 2",
      dateValue: "2021-11-20",
      start: "2021-11-20",
      end: "2021-11-21",
    },
    {
      id: 2,
      title: "event 32233",
      dateValue: "2021-11-23",
      start: "2021-11-23",
      end: "2021-11-30",
    },
  ],
  addPlanLoading: false,
  addPlanDone: false,
  addPlanError: null,
  updatePlanLoading: false,
  updatePlanDone: false,
  updatePlanError: null,
  donePlanLoading: false,
  donePlanDone: false,
  donePlanError: null,
  deletePlanLoading: false,
  deletePlanDone: false,
  deletePlanError: null,
  loadPlanLoading: false,
  loadPlanDone: false,
  loadPlanError: null,
};

const ScheduleReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PLAN:
        draft.loadPlanLoading = true;
        draft.loadPlanDone = false;
        draft.loadPlanError = null;
        break;
      case LOAD_PLAN_SUCCESS:
        draft.loadPlanLoading = false;
        draft.loadPlanDone = true;
        draft.planData = action.data;
        break;
      case LOAD_PLAN_FAILURE:
        draft.loadPlanLoading = false;
        draft.loadPlanError = action.error;
        break;
      case ADD_PLAN:
        draft.addPlanLoading = true;
        draft.addPlanDone = false;
        draft.addPlanError = null;
        break;
      case ADD_PLAN_SUCCESS:
        draft.addPlanLoading = false;
        draft.addPlanDone = true;
        draft.scheduleData.push(action.data);
        break;
      case ADD_PLAN_FAILURE:
        draft.addPlanLoading = false;
        draft.addPlanError = action.error;
        break;
      case UPDATE_PLAN:
        draft.updatePlanLoading = true;
        draft.updatePlanDone = false;
        draft.updatePlanError = null;
        break;
      case UPDATE_PLAN_SUCCESS:
        const plan = draft.scheduleData;
        plan[
          draft.scheduleData.findIndex((plan) => plan.id === action.data.id)
        ] = action.data;
        draft.scheduleData = plan;
        draft.updatePlanLoading = true;
        draft.updatePlanDone = false;
        draft.updatePlanError = null;
        break;
      case UPDATE_PLAN_FAIILURE:
        draft.updatePlanLoading = false;
        draft.updatePlanError = action.error;
        break;
      case DELETE_PLAN:
        draft.removePlanLoading = true;
        draft.removePlanDone = false;
        draft.removePlanError = null;
        break;
      case DELETE_PLAN_SUCCESS:
        draft.removePlanLoading = false;
        draft.removePlanDone = true;
        draft.scheduleData = draft.scheduleData.filter(
          (f) => f.id === action.data.id
        );
        break;
      case DELETE_PLAN_FAILURE:
        draft.removePlanLoading = false;
        draft.removePlanError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default ScheduleReducer;
