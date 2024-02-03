import { Task } from "domain/entities/Task";

export enum ActionType {
  CREATE_TASK_PENDING = "CREATE_TASK_PENDING",
  CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
  CREATE_TASK_FAIL = "CREATE_TASK_FAIL",
  CREATE_TASK_INIT = "CREATE_TASK_INIT"
}

interface actionPending {
  type: ActionType.CREATE_TASK_PENDING;
}

interface actionSuccess {
  type: ActionType.CREATE_TASK_SUCCESS;
  payload: Task;
}

interface actionFail {
  type: ActionType.CREATE_TASK_FAIL;
  payload: string;
}

interface actionInit {
  type: ActionType.CREATE_TASK_INIT;
}

export type Action = actionPending | actionSuccess | actionFail | actionInit;
