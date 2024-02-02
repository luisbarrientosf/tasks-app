import { Dispatch } from "redux";
import { ActionType, Action } from "./updateTasks.types";
import { UpdateTask } from "../../../application/usecases/updateTask";
import { TaskApi } from "../../repositories/TaskApi";
import { TaskStatus } from "domain/entities/Task";

export const updateTask = (taskId: string, title: string, status: TaskStatus) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_TASK_PENDING
    });

    try {
      const taskRepository = new TaskApi();
      const updateTask = new UpdateTask(taskRepository);
      const task = await updateTask.run(taskId, title, status);

      dispatch({
        type: ActionType.UPDATE_TASK_SUCCESS,
        payload: task
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.UPDATE_TASK_FAIL,
        payload: "Error getting tasks"
      });
    }
  };
}; 

export const updateTaskInit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_TASK_INIT
    });
  };
};