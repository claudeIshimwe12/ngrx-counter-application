import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/store/counter/counter.reducer';
import { counterHistoryReducer } from './counter/store/counter-history/counter-history.reducer';
import { AppState } from './app.interface';
export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  counterHistory: counterHistoryReducer,
};
