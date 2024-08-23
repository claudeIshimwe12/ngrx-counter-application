import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from '../../store/counter/counter.actions';
import { selectCounter } from '../../store/counter/counter.selector';
import { Count } from '../../models/count.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: Observable<number>;
  incrementInput: number | undefined;
  decrementInput!: number | undefined;
  constructor(private store: Store<{ count: Count }>) {
    this.count$ = this.store.select((state) => state.count.count);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  double() {
    this.store.dispatch(incrementBy({ value: 2 }));
  }
  incrementCounterBy() {
    if (!this.incrementInput) return;
    this.store.dispatch(incrementBy({ value: this.incrementInput }));
    this.incrementInput = undefined;
  }
  decrementCounterBy() {
    if (!this.decrementInput) return;

    this.store.dispatch(decrementBy({ value: this.decrementInput }));
    this.decrementInput = undefined;
  }
}
