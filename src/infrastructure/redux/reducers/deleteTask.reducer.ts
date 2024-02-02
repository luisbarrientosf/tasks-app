import { Action, ActionType } from "../actions/deleteTask.types";


export interface State {
  value: boolean | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  value: null,
  loading: false,
  error: null
};


export const deleteTaskReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case ActionType.DELETE_TASK_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case ActionType.DELETE_TASK_SUCCESS: {
    return {
      ...state,
      loading: false,
      value: true,
    };
  }
  case ActionType.DELETE_TASK_FAIL: {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  case ActionType.DELETE_TASK_INIT: {
    return {
      ...initialState,
    };
  }
  default:
    return state;
  }
};