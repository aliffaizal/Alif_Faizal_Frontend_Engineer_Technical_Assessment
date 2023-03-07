import {
    SET_BOOKING_START,
    SET_BOOKING_SUCCESS,
    SET_BOOKING_FAIL,
    SET_BOOKING_DETAIL_START,
    SET_BOOKING_DETAIL_SUCCESS,
    SET_BOOKING_DETAIL_FAIL,
    SET_LOADING_BOOKING,
    SET_LOADING_DONE_BOOKING
  } from "./actionTypes";
  import { setAlert } from "./alert";
  import axios from "../../api/axios-order";
  
  export const start = () => {
    return {
      type: SET_BOOKING_START,
    };
  };

  export const startDetail = () => {
    return {
      type: SET_BOOKING_DETAIL_START,
    };
  };
  
  export const getBooking = () =>
    async (dispatch) => {
      dispatch(start());
      try {
        const response = await axios.get(
          `/booking`,
        );
        dispatch({
          type: SET_BOOKING_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: SET_BOOKING_FAIL,
          // error: error.response.data.message,
        });
      }
    };

  export const getDetailBooking = (id) => async (dispatch) => {
  dispatch(startDetail());
  try {
    const response = await axios.get(`/booking/${id}`);

    dispatch({
      type: SET_BOOKING_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_BOOKING_DETAIL_FAIL,
      // error: error.response.data.message,
    });
    // dispatch(setAlert("Failed to fetch data", "error"));
  }
};

export const updateBooking = (id, data, navigate) => async (dispatch) => {
  dispatch({
    type: SET_LOADING_BOOKING,
  });
  try {
    await axios.patch(`/booking/${id}`, data);
    dispatch({
      type: SET_LOADING_DONE_BOOKING,
    });
    dispatch(setAlert("Update Booked Success", "success"));
    dispatch(getBooking({}));
    navigate("/booking-list");
  } catch (error) {
    dispatch(setAlert(error.response.data.message, "error"));
    dispatch({
      type: SET_LOADING_DONE_BOOKING,
    });
  }
};