import axios from "axios";
import {
  fetchCommentsStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./commentsSlice";

export const fetchComments = () => {
  return async (dispatch) => {
    dispatch(fetchCommentsStart());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments/"
      );
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
