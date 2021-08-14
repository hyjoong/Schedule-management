import { LOGIN, LOGOUT } from "../actionType";

const initialState = {
  user: {
    user: null,
    isLogin: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: true,
          user: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
