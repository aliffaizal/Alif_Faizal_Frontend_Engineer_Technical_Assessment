import {
    SET_DOCTOR_START,
    SET_DOCTOR_SUCCESS,
    SET_DOCTOR_FAIL,
    SET_DOCTOR_DETAIL_START,
    SET_DOCTOR_DETAIL_SUCCESS,
    SET_DOCTOR_DETAIL_FAIL,
    SET_LOADING_DOCTOR,
    SET_LOADING_DONE_DOCTOR,
  } from "../actions/actionTypes";
  import { updateObject } from "../../utils";
  
  const initialState = {
    data: [],
    dataDetail: {},
    loading: false,
    loadingDoctor: false,
    error: false,
    errorDetail: false,
  };
  
  const start = (state, action) => {
    return updateObject(state, { error: false, loading: true });
  };
  const startDetail = (state, action) => {
    return updateObject(state, { error: false, loadingDetail: true });
  };
  const loadingDoctor = (state, action) => {
    return updateObject(state, { loadingDoctor: true });
  };
  const loadingDoneDoctor = (state, action) => {
    return updateObject(state, { loadingDoctor: false });
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
      case SET_DOCTOR_START:
        return start(state, action);
      case SET_DOCTOR_SUCCESS:
        return success(state, action);
      case SET_DOCTOR_FAIL:
        return fail(state, action);
      case SET_DOCTOR_DETAIL_START:
        return startDetail(state, action);
      case SET_DOCTOR_DETAIL_SUCCESS:
        return successDetail(state, action);
      case SET_DOCTOR_DETAIL_FAIL:
        return failDetail(state, action);
      case SET_LOADING_DOCTOR:
        return loadingDoctor(state, action);
      case SET_LOADING_DONE_DOCTOR:
        return loadingDoneDoctor(state, action);
      default:
        return state;
    }
  };
  
  export default reducer;