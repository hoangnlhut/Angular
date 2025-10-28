import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  destroyRef = inject(DestroyRef)
  clickCount$ = toObservable(this.clickCount);

  inteval$ = interval(1000);
  intevalSignal = toSignal(this.inteval$, { initialValue: 10 });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
      const interval = setInterval(() => {
        if (timesExecuted > 3){
          subscriber.error('Limit Exceeded');
          clearInterval(interval);
          subscriber.complete();
          return;
        }
        console.log('Emitting new value.....')
        subscriber.next({ message: 'New Value'});
        timesExecuted++;
      }, 2000);
   });

   constructor(){
   }

   ngOnInit(){
    this.customInterval$.subscribe({
        next: (val) => { console.log(val); },
        error: (err) => { console.log(`Error Occurred: ${err}`); },
        complete: () => { console.log('Completed'); }
     });

     const subscription = this.clickCount$.subscribe({
        next: (val) => { console.log(`Clicked button ${this.clickCount()} times`); },
     });

     this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
     });
   }
  
   onClick(){
    this.clickCount.update( count => count + 1);
   }
}
