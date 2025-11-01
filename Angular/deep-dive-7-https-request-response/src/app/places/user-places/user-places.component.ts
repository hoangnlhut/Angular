import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  error = signal('');
  private destroyRef = inject(DestroyRef);
  private placeService = inject(PlacesService);
  places = this.placeService.loadedUserPlaces;

  ngOnInit(){
      this.isFetching.set(true);
      
      setTimeout(()=> {
      const subscription = this.placeService.loadUserPlaces()
      .subscribe({
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
      }, 5000);
    }
}
