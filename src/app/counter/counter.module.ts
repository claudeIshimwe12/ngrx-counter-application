import { NgModule, isDevMode } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
