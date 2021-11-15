import { Action, createReducer, on } from "@ngrx/store";
import { SubjectActions } from "../actions";
import { ProcessStatus } from '../enums/process-status.enum';
import { Process } from '../interfaces/process.interface';
import { Subject } from '../interfaces/responses.interface';

export interface State {
  data: Subject[];
  process: Process;
}

export const initialState: State = {
  data: [],
  process: {
    status: ProcessStatus.normal,
    error: null
  }
};

const subjectReducer = createReducer(
  initialState,
  on(SubjectActions.load, () => ({ ...initialState,
    process: { ...initialState.process, status: ProcessStatus.loading }
  })),
  on(SubjectActions.loaded, (state, { subjects }) => ({ ...state,
    subjects,
    process: { ...state.process, status: ProcessStatus.completed }
  })),
  on(SubjectActions.loadFailed, (state, { error }) => ({ ...state,
    process: { ...state.process, status: ProcessStatus.failed, error }
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return subjectReducer(state, action);
}
