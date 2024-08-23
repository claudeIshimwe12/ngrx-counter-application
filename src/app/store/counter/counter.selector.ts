import { createSelector } from '@ngrx/store';
import { Count } from '../../models/count.interface';
export const selectCounter = (state: Count) => state.count;
