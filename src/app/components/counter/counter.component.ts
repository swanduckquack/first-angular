import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);

  increment() {
    this.counterValue.update(val => val + 1);
  }

  decrement() {
    this.counterValue.update(val => val - 1);
  }

  reset() {
    this.counterValue.set(0);
  }

  double() {
    this.counterValue.update(val => val * 2);
  }
}
