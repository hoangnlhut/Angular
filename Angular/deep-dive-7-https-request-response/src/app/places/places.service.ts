import { DestroyRef, inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  loadedUserPlaces = this.userPlaces.asReadonly();
  private httpClient = inject(HttpClient);

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{places: Place[]}>(url)
    .pipe(
      map((resData) => {
        return resData.places;
      }),
      catchError((error) => {
        //save in log to process for engineer
        console.log(error);
      return throwError(() => new Error());
      }));
  }

  loadAvailablePlaces() {
    return  this.fetchPlaces('http://localhost:3000/places', "An error occurred while fetching available places. Please try again later.");
  }

  loadUserPlaces() {
    return  this.fetchPlaces('http://localhost:3000/user-places', "An error occurred while fetching your favourite places. Please try again later.").pipe(
      tap({
        next: (places) =>
          {
            this.userPlaces.set(places);
            console.log('User places loaded:');
          } 
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if(!prevPlaces.some(p => p.id === place.id)){
      this.userPlaces.set([...prevPlaces , place]);
    }

    return this.httpClient.put<{userPlace: Place[]}>('http://localhost:3000/user-places', {
      placeId : place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        return throwError(() => new Error('Failed to store selected place. Please try again later.'));
      }));;
  }

  removeUserPlace(place: Place) {}
 
}
