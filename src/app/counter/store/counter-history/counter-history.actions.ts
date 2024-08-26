import { createAction, props } from '@ngrx/store';

export const undo = createAction('[Counter-History] Get History');
export const loadHistory = createAction(
  '[Counter-History] Load History',
  props<{ value: number }>()
);
export const clearHistory = createAction('[Counter-History] Clear History');
