import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  incrementBy,
  decrementBy,
} from './counter.actions';
import { count } from 'rxjs';
import { Count } from '../models/count.interface';

export const initialState: Count = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(incrementBy, (state, actions) => ({
    ...state,
    count: state.count + actions.value,
  })),
  on(decrementBy, (state, actions) => ({
    ...state,
    count: state.count - actions.value,
  })),
  on(reset, (state) => initialState)
);
