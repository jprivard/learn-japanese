import { Subject } from '@japanese/api/wanikani';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, WanikaniModuleState } from '../reducers';
import { Filter } from '../enums/filter.enum';
import { ProcessStatus } from '../enums/process-status.enum';

export const selectModuleState = createFeatureSelector<WanikaniModuleState>(FEATURE_KEY);
export const selectState = createSelector(selectModuleState, state => state.subject);
export const selectSubjects = createSelector(selectState, (state): Subject[] => state.subjects);
export const selectFilter = createSelector(selectState, (state): string => state.filter);
export const selectFilteredSubjects = createSelector([selectSubjects, selectFilter], (subjects, filter): Subject[] => filter === Filter.all ? subjects : subjects.filter(s => s.object === filter));
export const isLoading = createSelector(selectState, (state): boolean => state.process.status === ProcessStatus.loading);
export const isCompleted = createSelector(selectState, (state): boolean => state.process.status === ProcessStatus.completed);
