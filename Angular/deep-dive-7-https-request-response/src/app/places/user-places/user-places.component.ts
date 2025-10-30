import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  places = signal<Place[] | undefined>(undefined);
  error = signal('');
  

  ngOnInit(){
      this.isFetching.set(true);
      const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/user-places')
      .pipe(
        map((resData) => {
          return resData.places;
        }),
        catchError((error) => {
          //save in log to process for engineer
          console.log(error);
         return throwError(() => new Error("An error occurred while fetching favourite places. Please try again later."));
        }))
      .subscribe({
        next: (data) =>{
          this.places.set(data);
        },
        error: (error : Error) =>{
          this.error.set(error.message);
        },
        complete: () =>{
          this.isFetching.set(false);
        }
      }
      );
  
      this.destroyRef.onDestroy(()=>{
        subscription.unsubscribe();
      });
    }
}
