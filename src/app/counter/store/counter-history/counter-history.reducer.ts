import { createReducer, on } from '@ngrx/store';
import { CounterHistoryState } from '../../models/counter-history.interface';
import { undo } from './counter-history.actions';
import * as CounterActions from './../counter/counter.actions';

const initialState: CounterHistoryState = {
  history: [0],
};

export const counterHistoryReducer = createReducer(
  initialState,
  on(undo, (state) => {
    const updatedHistory = state.history.slice(0, -1);
    return {
      ...state,
      history: updatedHistory,
    };
  }),
  on(CounterActions.increment, (state) => ({
    ...state,
    history: [...state.history, 1],
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    history: [...state.history, -1],
  })),
  on(CounterActions.incrementBy, (state, action) => ({
    ...state,
    history: [...state.history, action.value],
  })),
  on(CounterActions.decrementBy, (state, action) => ({
    ...state,
    history: [...state.history, Math.max(-action.value, 0)],
  })),
  on(CounterActions.reset, (state) => ({
    ...state,
    history: [...state.history, 0],
  }))
);
