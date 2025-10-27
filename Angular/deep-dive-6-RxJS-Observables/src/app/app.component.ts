import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, single, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  inteval$ = interval(1000);
  //after that you can use computed() or effect() with this signal
  // and/or ouptut it in the template
  intevalSignal = toSignal(this.inteval$, { initialValue: 10 });
  // as map in interval
  // changeValue = computed(() => this.clickCount() * 2); 

  constructor() {
    // effect(() => {
    //   console.log(`Button clicked ${this.clickCount()} times`);
    // }); 
  }

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map(value => value * 2),
    // ).subscribe({
    //   next: (value) => console.log(value)
    // });
    const subscription = this.clickCount$.pipe(
      map(value => value * 2)
    ).subscribe({
      next: (value) => console.log(`Button clicked doubled value: ${value}`)
    });

    this.destroyRef.onDestroy(() => {
      console.log('Component is being destroyed, unsubscribing from interval');
      subscription.unsubscribe();
    });
  }
onClick(){
      this.clickCount.update(preCount => preCount + 1);
  }
  
}
