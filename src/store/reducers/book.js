import {
    SET_BOOKING_START,
    SET_BOOKING_SUCCESS,
    SET_BOOKING_FAIL,
    SET_BOOKING_DETAIL_START,
    SET_BOOKING_DETAIL_SUCCESS,
    SET_BOOKING_DETAIL_FAIL,
    SET_LOADING_BOOKING,
    SET_LOADING_DONE_BOOKING,
  } from "../actions/actionTypes";
  import { updateObject } from "../../utils";
  
  const initialState = {
    data: [],
    dataDetail: {},
    loading: false,
    loadingBooking: false,
    error: false,
    errorDetail: false,
  };
  
  const start = (state, action) => {
    return updateObject(state, { error: false, loading: true });
  };
  const startDetail = (state, action) => {
    return updateObject(state, { error: false, loadingDetail: true });
  };
  const loadingBooking = (state, action) => {
    return updateObject(state, { loadingBooking: true });
  };
  const loadingDoneBooking = (state, action) => {
    return updateObject(state, { loadingBooking: false });
  };
  
  const success = (state, action) => {
    return updateObject(state, {
      data: action.payload,
      loading: false,
      error: false,
    });
  };

  const successDetail = (state, action) => {
    return updateObject(state, {
      dataDetail: action.payload,
      loadingDetail: false,
      errorDetail: false,
    });
  };
  
  const fail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
  };
  const failDetail = (state, action) => {
    return updateObject(state, { errorDetail: action.error, loadingDetail: false });
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_BOOKING_START:
        return start(state, action);
      case SET_BOOKING_SUCCESS:
        return success(state, action);
      case SET_BOOKING_FAIL:
        return fail(state, action);
      case SET_BOOKING_DETAIL_START:
        return startDetail(state, action);
      case SET_BOOKING_DETAIL_SUCCESS:
        return successDetail(state, action);
      case SET_BOOKING_DETAIL_FAIL:
        return failDetail(state, action);
      case SET_LOADING_BOOKING:
        return loadingBooking(state, action);
      case SET_LOADING_DONE_BOOKING:
        return loadingDoneBooking(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;