import { AppState } from '../../../app.interface';
export const selectCounter = (state: AppState) => state.counter.count;
