import produce from "immer";
import {
  LOAD_BOARD,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE,
  ADD_BOARD,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  DELETE_BOARD,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
  UPDATE_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from "../actionType";

export const initialState = {
  images: [],
  boardText: [
    // {
    //   id: 1,
    //   text: "zz",
    // },
  ],
  loadBoardLoading: false,
  loadBoardError: null,
  loadBoardDone: false,
  uploadImageLoading: false,
  uploadImageError: null,
  uploadImageDone: false,
  addBoardLoading: false,
  addBoardError: null,
  addBoardDone: false,
  deleteBoardLoading: false,
  deleteBoardError: null,
  deleteBoardDone: false,
  updateBoardLoading: false,
  updateBoardError: null,
  updateBoardDone: false,
};

const BoardReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UPLOAD_IMAGE:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        break;

      case UPLOAD_IMAGE_SUCCESS:
        console.log(action.data);
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        draft.images = draft.images.concat(action.data);
        break;

      case UPLOAD_IMAGE_FAILURE:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error;

        break;

      case LOAD_BOARD:
        draft.loadBoardLoading = true;
        draft.loadBoardDone = false;
        draft.loadBoardError = null;
        break;

      case LOAD_BOARD_SUCCESS:
        draft.loadBoardLoading = false;
        draft.loadBoardDone = true;
        draft.boardText = action.data;
        draft.boardText.concat(action.data);
        break;

      case LOAD_BOARD_FAILURE:
        draft.loadBoardLoading = true;
        draft.loadBoardDone = false;
        break;

      case ADD_BOARD:
        draft.addBoardLoading = true;
        draft.addBoardError = null;
        draft.addBoardDone = false;
        break;

      case ADD_BOARD_SUCCESS:
        console.log(action.data); // text 값
        draft.addBoardLoading = false;
        draft.addBoardDone = true;
        draft.boardText.unshift(action.data);
        break;

      case ADD_BOARD_FAILURE:
        draft.addBoardLoading = false;
        draft.addBoardError = action.error;
        break;

      case DELETE_BOARD:
        draft.deleteBoardLoading = true;
        draft.deleteBoardDone = false;
        draft.deleteBoardError = null;
        break;

      case DELETE_BOARD_SUCCESS:
        console.log(action.data); // id값 받아오기
        draft.deleteBoardLoading = false;
        draft.deleteBoardDone = true;
        draft.boardText = draft.boardText.filter(
          (text) => text.id !== action.data
        );
        break;

      case DELETE_BOARD_FAILURE:
        draft.deleteBoardLoading = false;
        draft.deleteBoardError = action.error;

        break;

      case UPDATE_BOARD:
        draft.updateBoardLoading = true;
        draft.updateBoardDone = false;
        draft.updateBoardError = null;
        break;

      case UPDATE_BOARD_SUCCESS:
        draft.updateBoardLoading = false;
        draft.updateBoardDone = true;
        const updatePost = draft.boardText;
        // 임시 로직임 나중에 수정 !
        updatePost[
          draft.action.data.findIndex((post) => post.id === action.data.ids)
        ] = action.data;
        break;

      case UPDATE_BOARD_FAILURE:
        draft.updateBoardLoading = false;
        draft.updateBoardError = action.error;
        break;

      default:
        return state;
    }
  });
};

export default BoardReducer;
