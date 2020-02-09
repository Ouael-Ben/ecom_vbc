import {
  REGISTER_USER,
  REGISTER_SUCCESFULL,
  REGISTER_FAILED
} from "./action-type";

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, isLoading: true };
    case REGISTER_SUCCESFULL:
      return { ...state, isLoading: false };
    case REGISTER_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
