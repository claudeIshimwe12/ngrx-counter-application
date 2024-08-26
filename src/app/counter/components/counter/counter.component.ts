import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from '../../store/counter/counter.actions';
import { AppState } from '../../../app.interface';
import {
  loadHistory,
  undo,
} from '../../store/counter-history/counter-history.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: Observable<number>;
  history$: Observable<number[]>;
  incrementInput: number | undefined;
  decrementInput!: number | undefined;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select((state) => state.counter.count);
    this.history$ = this.store.select((state) => state.counterHistory.history);
  }

  increment() {
    this.store.dispatch(increment());
    this.store.dispatch(loadHistory({ value: 1 }));
  }

  decrement() {
    this.store.dispatch(decrement());
    this.store.dispatch(loadHistory({ value: -1 }));
  }

  reset() {
    this.store.dispatch(reset());
    this.store.dispatch(loadHistory({ value: 0 }));
  }
  double() {
    this.store.dispatch(incrementBy({ value: 2 }));
  }
  incrementCounterBy() {
    if (!this.incrementInput) return;
    this.store.dispatch(incrementBy({ value: this.incrementInput }));
    this.store.dispatch(loadHistory({ value: this.incrementInput }));
    this.incrementInput = undefined;
  }
  decrementCounterBy() {
    if (!this.decrementInput) return;

    this.store.dispatch(decrementBy({ value: this.decrementInput }));
    this.store.dispatch(loadHistory({ value: -this.decrementInput }));

    this.decrementInput = undefined;
  }
  undoLastOperation() {
    this.store.dispatch(undo());
    this.count$ = this.history$.pipe(map((data) => data[data.length - 1] ?? 0));
  }
}
