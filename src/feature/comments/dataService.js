import axios from "axios";
// import Cookies from "js-cookie";

import {
  fetchCommentsStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./commentsSlice";



export const fetchComments = () => {
  // const jwtToken = Cookies.get('jwt')
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: jwtToken,
  // };
  return async (dispatch) => {
    dispatch(fetchCommentsStart());
    // if(jwtToken){
      try {
        const response = await axios.get("http://127.0.0.1:8000/like/get-post");
        dispatch(fetchDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    }
  // };
};
