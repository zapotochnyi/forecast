import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import forecastReducer from "./forecastReducer";

let rootReducer = combineReducers({
  forecast: forecastReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
