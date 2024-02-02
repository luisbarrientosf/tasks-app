import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getTasksReducer } from "./reducers/getTasks.reducer";
import { reactotron } from "../../infrastructure/reactotron/reactotron";

const reducers = combineReducers({
  getTasks: getTasksReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  enhancers: [reactotron!.createEnhancer()]
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;