import { Dispatch } from "redux";
import { ActionType, Action } from "./deleteTask.types";
import { DeleteTask } from "../../../application/usecases/deleteTask";
import { TaskApi } from "../../repositories/TaskApi";

export const deleteTask = (taskId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_TASK_PENDING
    });

    try {
      const taskRepository = new TaskApi();
      const deleteTask = new DeleteTask(taskRepository);
      await deleteTask.run(taskId);

      dispatch({
        type: ActionType.DELETE_TASK_SUCCESS
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.DELETE_TASK_FAIL,
        payload: err?.toString() || "Error deleting task"
      });
    }
  };
}; 

export const deleteTaskInit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_TASK_INIT
    });
  };
};