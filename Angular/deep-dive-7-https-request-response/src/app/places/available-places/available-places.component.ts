import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  isFetching = signal(false);
  error = signal('');

  ngOnInit(){
    this.isFetching.set(true);
    const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/places')
    .pipe(
      map((resData) => {
        return resData.places;
      }),
      catchError((error) => {
        //save in log to process for engineer
        console.log(error);
       return throwError(() => new Error("An error occurred while fetching places. Please try again later."));
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

  onSelectPlace(place: Place) {
    this.httpClient.put<{userPlace: Place[]}>('http://localhost:3000/user-places', {
      placeId : place.id
    })
    .pipe(
      catchError( (error) => {
          console.log(error);
          return throwError(() => new Error('Error updating place'))
      })
    )
    .subscribe({
      next: (resData) =>{
        console.log('Place updated successfully:', resData);
      },
      error: (error) =>{
        this.error.set(error.message);
      }
    }); 
  }
}
