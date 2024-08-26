import { CounterState } from './counter/models/count.interface';
import { CounterHistoryState } from './counter/models/counter-history.interface';
export interface AppState {
  counter: CounterState;
  counterHistory: CounterHistoryState;
}
