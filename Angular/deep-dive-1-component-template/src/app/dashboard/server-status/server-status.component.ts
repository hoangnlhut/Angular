import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);
  private loggingEffect = effect(() => {
    console.log(`The current Status is: ${this.currentStatus()}`);
  });

  constructor(){
    // this.loggingEffect;
  }

  ngOnInit(){
    //   const interval = setInterval(()=> {
    //   const rnd = Math.random(); //0 -> 0.99999

    //   if(rnd < 0.5)
    //   {
    //     this.currentStatus.set('online'); 
    //   }
    //   else if(rnd < 0.9)
    //   {
    //     this.currentStatus.set('offline');
    //   }
    //   else{
    //     this.currentStatus.set('unknown');
    //   }

    // }, 3000);

    // this.destroyRef.onDestroy(() => {
    //   console.log('Destroy component');
    //   clearInterval(interval);
    // });
  }

  
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

 
}
