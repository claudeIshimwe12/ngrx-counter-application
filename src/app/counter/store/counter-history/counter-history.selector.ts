import { AppState } from '../../../app.interface';
export const selectHistory = (state: AppState) => state.counterHistory.history;
