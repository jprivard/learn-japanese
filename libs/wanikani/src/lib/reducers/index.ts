import * as subject from './subject.reducer';

export interface WanikaniModuleState {
  subject: subject.State;
}

export const FEATURE_KEY = 'wanikani';

export interface State {
  [FEATURE_KEY]: WanikaniModuleState;
}

export const reducers = {
  subject: subject.reducer,
};

export const initialState = {
  subject: subject.initialState,
};

export { subject };
