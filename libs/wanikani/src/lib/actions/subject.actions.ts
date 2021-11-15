import { createAction, props } from '@ngrx/store';
import { Load } from '../interfaces/load.interface';
import { Subject } from '../interfaces/responses.interface';

export const load = createAction('[Subject] Load', props<{ load: Load }>());
export const loaded = createAction('[Subject] Loaded', props<{ subjects: Subject[] }>());
export const loadFailed = createAction('[Subject] Load Failed', props<{ error: any }>());