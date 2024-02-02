import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getTasksReducer } from "./reducers/getTasks.reducer";
import { reactotron } from "../../infrastructure/reactotron/reactotron";
import { updateTaskReducer } from "./reducers/updateTask.reducer";
import { deleteTaskReducer } from "./reducers/deleteTask.reducer";

const reducers = combineReducers({
  getTasks: getTasksReducer,
  updateTask: updateTaskReducer,
  deleteTask: deleteTaskReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  enhancers: [reactotron!.createEnhancer()]
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;