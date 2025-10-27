import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = interval(1000).subscribe({
      next: (value) => console.log(value),// only care next, could also pass just a function to subscribe().
      // that would be executed for every emiited value
      complete: () => console.log('Completed'),
      error: (err) => console.error('Error: ', err)
    });

    this.destroyRef.onDestroy(() => {
      console.log('Component is being destroyed, unsubscribing from interval');
      subscription.unsubscribe();
    });
  }
}
