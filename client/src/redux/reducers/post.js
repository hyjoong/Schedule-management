import produce from "immer";
import {
  LOAD_POST,
  LOAD_POST_SUCCESS,
  LOAD_PLAN_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_PLAN_FAILURE,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
} from "../actionType";

export const initialState = {
  images: [],
  postText: [],
  loadPostLoading: false,
  loadPostError: null,
  loadPostDone: false,
  uploadImageLoading: false,
  uploadImageError: null,
  uploadImageDone: false,
  addPostLoading: false,
  addPostError: null,
  addPostDone: false,
  deletePostLoading: false,
  deletePostError: null,
  deletePostDone: false,
  updatePostLoading: false,
  updatePostError: null,
  updatePostDone: false,
};

const PostReducer = (state = initialState, action) => {
  produce(state, (draft) => {
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

      case LOAD_POST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.postText = draft.postText.concat(action.data);
        break;

      case LOAD_PLAN_FAILURE:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        break;

      case ADD_POST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;

      case ADD_POST_SUCCESS:
        console.log(action.data); // text 값
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.postText.unshift(action.data);
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case DELETE_POST:
        draft.deletePostLoading = true;
        draft.deletePostDone = false;
        draft.deletePostError = null;
        break;

      case DELETE_POST_SUCCESS:
        console.log(action.data); // id값 받아오기
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        draft.postText = draft.postText.filter(
          (text) => text.id !== action.data
        );
        break;

      case DELETE_PLAN_FAILURE:
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;

        break;

      case UPDATE_POST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        const updatePost = draft.postText;
        // 임시 로직임 나중에 수정 !
        updatePost[
          draft.action.data.findIndex((post) => post.id === action.data.ids)
        ] = action.data;
        break;

      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      default:
        return state;
    }
  });
};

export default PostReducer;
