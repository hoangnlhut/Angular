import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map, single, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);

  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.clickCount()} times`);
    }); 
  }

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map(value => value * 2),
    // ).subscribe({
    //   next: (value) => console.log(value)
    // });

    // this.destroyRef.onDestroy(() => {
    //   console.log('Component is being destroyed, unsubscribing from interval');
    //   subscription.unsubscribe();
    // });
  }

  onClick(){
      this.clickCount.update(preCount => preCount + 1);
  }
}
