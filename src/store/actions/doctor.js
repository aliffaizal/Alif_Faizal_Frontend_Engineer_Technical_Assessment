import {
    SET_DOCTOR_START,
    SET_DOCTOR_SUCCESS,
    SET_DOCTOR_FAIL,
    SET_DOCTOR_DETAIL_START,
    SET_DOCTOR_DETAIL_SUCCESS,
    SET_DOCTOR_DETAIL_FAIL,
    SET_LOADING_DOCTOR,
    SET_LOADING_DONE_DOCTOR
  } from "./actionTypes";
  import { setAlert } from "./alert";
  import axios from "../../api/axios-order";
  
  export const start = () => {
    return {
      type: SET_DOCTOR_START,
    };
  };

  export const startDetail = () => {
    return {
      type: SET_DOCTOR_DETAIL_START,
    };
  };
  
  export const getDoctor = () =>
    async (dispatch) => {
      dispatch(start());
      try {
        const response = await axios.get(
          `/doctor`,
        );
        dispatch({
          type: SET_DOCTOR_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: SET_DOCTOR_FAIL,
          // error: error.response.data.message,
        });
      }
    };

  export const getDetailDoctor = (id) => async (dispatch) => {
  dispatch(startDetail());
  try {
    const response = await axios.get(`/doctor/${id}`);

    dispatch({
      type: SET_DOCTOR_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_DOCTOR_DETAIL_FAIL,
      // error: error.response.data.message,
    });
    // dispatch(setAlert("Failed to fetch data", "error"));
  }
};

export const bookDoctor = (data, navigate) => async (dispatch) => {
  dispatch({
    type: SET_LOADING_DOCTOR,
  });
  try {
    await axios.post(`/booking`, data);
    dispatch({
      type: SET_LOADING_DONE_DOCTOR,
    });
    dispatch(setAlert("Booked Success", "success"));
    dispatch(getDoctor({}));
    navigate("/booking-list");
  } catch (error) {
    dispatch(setAlert(error.response.data.message, "error"));
    dispatch({
      type: SET_LOADING_DONE_DOCTOR,
    });
  }
};