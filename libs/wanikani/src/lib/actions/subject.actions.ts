/* eslint-disable @typescript-eslint/no-explicit-any */
import { Subject } from '@japanese/api/wanikani';
import { createAction, props } from '@ngrx/store';
import { Filter } from '../enums/filter.enum';
import { Load } from '../interfaces/load.interface';

export const load = createAction('[Subject] Load', props<{ load: Load }>());
export const loaded = createAction('[Subject] Loaded', props<{ subjects: Subject[] }>());
export const loadFailed = createAction('[Subject] Load Failed', props<{ error: any }>());
export const filter = createAction('[Subject] Filter', props<{ filter: Filter }>());