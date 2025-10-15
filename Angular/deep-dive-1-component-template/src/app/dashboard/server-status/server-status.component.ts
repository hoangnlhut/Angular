import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);


  constructor(){}

  ngOnInit(){
      const interval = setInterval(()=> {
      const rnd = Math.random(); //0 -> 0.99999

      if(rnd < 0.5)
      {
        this.currentStatus = 'online';
      }
      else if(rnd < 0.9)
      {
        this.currentStatus = 'offline';
      }
      else{
        this.currentStatus = 'unknown';
      }

    }, 3000);

    this.destroyRef.onDestroy(() => {
      console.log('Destroy component');
      clearInterval(interval);
    });
  }

  turnOff(){
     // not available in old version 
    
  }

  
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
