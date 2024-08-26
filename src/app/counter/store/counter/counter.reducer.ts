import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  incrementBy,
  decrementBy,
} from './counter.actions';
import { CounterState } from '../../models/count.interface';

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: Math.max(state.count - 1, 0) })),
  on(incrementBy, (state, actions) => ({
    ...state,
    count: state.count + actions.value,
  })),
  on(decrementBy, (state, actions) => ({
    ...state,
    count: Math.max(state.count - actions.value, 0),
  })),
  on(reset, (state) => initialState)
);
