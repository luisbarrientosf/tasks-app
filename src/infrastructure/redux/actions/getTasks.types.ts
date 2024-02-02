import { Task } from "../../../domain/entities/Task";

export enum ActionType {
  GET_TASKS_PENDING = "GET_TASKS_PENDING",
  GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS",
  GET_TASKS_FAIL = "GET_TASKS_FAIL",
  GET_TASKS_INIT = "GET_TASKS_INIT"
}

interface actionPending {
  type: ActionType.GET_TASKS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_TASKS_SUCCESS;
  payload: Task[];
}

interface actionFail {
  type: ActionType.GET_TASKS_FAIL;
  payload: string;
}

interface actionInit {
  type: ActionType.GET_TASKS_INIT;
}

export type Action = actionPending | actionSuccess | actionFail | actionInit;
