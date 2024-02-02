import { Task } from "../../../domain/entities/Task";
import { Action, ActionType } from "../actions/getTasks.types";


export interface State {
  value: Task[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  value: null,
  loading: false,
  error: null
};


export const getTasksReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case ActionType.GET_TASKS_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case ActionType.GET_TASKS_SUCCESS: {
    return {
      ...state,
      loading: false,
      value: action.payload,
    };
  }
  case ActionType.GET_TASKS_FAIL: {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  case ActionType.GET_TASKS_INIT: {
    return {
      ...initialState,
    };
  }
  default:
    return state;
  }
};