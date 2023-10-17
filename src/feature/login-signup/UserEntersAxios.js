import axios from "axios";
import { fetchDataFailure, fetchDataSuccess } from "./LoginSignupSlice";

export const fetchSignUp = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/like/sign-up",
        data: JSON.stringify(formData), // Use 'data' instead of 'body'
      });
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchLogin = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://127.0.0.1:8000/like/login",
        data: JSON.stringify(formData),
      });
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
