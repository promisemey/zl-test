import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// 创建Redux store，并应用Redux Thunk中间件
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
