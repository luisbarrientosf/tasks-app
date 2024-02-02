import { Task } from "../../../domain/entities/Task";
import { Action, ActionType } from "../actions/updateTasks.types";


export interface State {
  value: Task | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  value: null,
  loading: false,
  error: null
};


export const updateTaskReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case ActionType.UPDATE_TASK_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case ActionType.UPDATE_TASK_SUCCESS: {
    return {
      ...state,
      loading: false,
      value: action.payload,
    };
  }
  case ActionType.UPDATE_TASK_FAIL: {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  case ActionType.UPDATE_TASK_INIT: {
    return {
      ...initialState,
    };
  }
  default:
    return state;
  }
};