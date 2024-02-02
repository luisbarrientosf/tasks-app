import { Dispatch } from "redux";
import { ActionType, Action } from "./getTasks.types";
import { GetTasks } from "../../../application/usecases/getTasks";
import { TaskApi } from "../../repositories/TaskApi";

export const getTasks = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_TASKS_PENDING
    });

    try {
      const taskRepository = new TaskApi();
      const getTasks = new GetTasks(taskRepository);
      const tasks = await getTasks.run();

      dispatch({
        type: ActionType.GET_TASKS_SUCCESS,
        payload: tasks
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.GET_TASKS_FAIL,
        payload: "Error getting tasks"
      });
    }
  };
}; 

export const getTasksInit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_TASKS_INIT
    });
  };
};