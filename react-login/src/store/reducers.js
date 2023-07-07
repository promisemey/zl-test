import { combineReducers } from "redux";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  login: reducer,
});
export default rootReducer;
