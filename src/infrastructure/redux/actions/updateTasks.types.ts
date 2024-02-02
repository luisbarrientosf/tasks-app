import { Task } from "../../../domain/entities/Task";

export enum ActionType {
  UPDATE_TASK_PENDING = "UPDATE_TASK_PENDING",
  UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAIL = "UPDATE_TASK_FAIL",
  UPDATE_TASK_INIT = "UPDATE_TASK_INIT"
}

interface actionPending {
  type: ActionType.UPDATE_TASK_PENDING;
}

interface actionSuccess {
  type: ActionType.UPDATE_TASK_SUCCESS;
  payload: Task;
}

interface actionFail {
  type: ActionType.UPDATE_TASK_FAIL;
  payload: string;
}

interface actionInit {
  type: ActionType.UPDATE_TASK_INIT;
}

export type Action = actionPending | actionSuccess | actionFail | actionInit;
