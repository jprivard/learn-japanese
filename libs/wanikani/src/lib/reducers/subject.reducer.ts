import { Subject } from '@japanese/api/wanikani';
import { Action, createReducer, on } from '@ngrx/store';
import { SubjectActions } from '../actions';
import { Filter } from '../enums/filter.enum';
import { ProcessStatus } from '../enums/process-status.enum';
import { Process } from '../interfaces/process.interface';

export interface State {
  subjects: Subject[];
  filter: string;
  process: Process;
}

export const initialState: State = {
  subjects: [],
  filter: Filter.all,
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
  on(SubjectActions.filter, (state, { filter }) => ({ ...state,
    filter
  })),
  on(SubjectActions.loadFailed, (state, { error }) => ({ ...state,
    process: { ...state.process, status: ProcessStatus.failed, error }
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return subjectReducer(state, action);
}
