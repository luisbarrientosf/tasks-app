import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reactotron } from "../../infrastructure/reactotron/reactotron";
import { getTasksReducer } from "./reducers/getTasks.reducer";
import { createTaskReducer } from "./reducers/createTask.reducer";
import { updateTaskReducer } from "./reducers/updateTask.reducer";
import { deleteTaskReducer } from "./reducers/deleteTask.reducer";

const reducers = combineReducers({
  getTasks: getTasksReducer,
  createTask: createTaskReducer,
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