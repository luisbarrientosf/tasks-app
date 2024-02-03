import { Dispatch } from "redux";
import { ActionType, Action } from "./createTask.types";
import { CreateTask } from "../../../application/usecases/createTask";
import { TaskApi } from "../../repositories/TaskApi";
import { TaskStatus } from "domain/entities/Task";

export const createTask = (title: string, status: TaskStatus) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_TASK_PENDING
    });

    try {
      const taskRepository = new TaskApi();
      const createTask = new CreateTask(taskRepository);
      const task = await createTask.run(title, status);

      dispatch({
        type: ActionType.CREATE_TASK_SUCCESS,
        payload: task
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.CREATE_TASK_FAIL,
        payload: err?.toString() || "Error creating task"
      });
    }
  };
}; 

export const createTaskInit = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CREATE_TASK_INIT
    });
  };
};