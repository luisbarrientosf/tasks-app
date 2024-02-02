export enum ActionType {
  DELETE_TASK_PENDING = "DELETE_TASK_PENDING",
  DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
  DELETE_TASK_FAIL = "DELETE_TASK_FAIL",
  DELETE_TASK_INIT = "DELETE_TASK_INIT"
}

interface actionPending {
  type: ActionType.DELETE_TASK_PENDING;
}

interface actionSuccess {
  type: ActionType.DELETE_TASK_SUCCESS;
}

interface actionFail {
  type: ActionType.DELETE_TASK_FAIL;
  payload: string;
}

interface actionInit {
  type: ActionType.DELETE_TASK_INIT;
}

export type Action = actionPending | actionSuccess | actionFail | actionInit;
