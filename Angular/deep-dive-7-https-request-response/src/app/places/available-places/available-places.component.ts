import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private destroyRef = inject(DestroyRef);
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);

  ngOnInit(){
    this.isFetching.set(true);

    const subscription = this.placesService.loadAvailablePlaces()
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
    const subscription = this.placesService.addPlaceToUserPlaces(place)
    .subscribe({
      next: (resData) =>{
        console.log('Place updated successfully:', resData);
      }
    }); 

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    });
  }
}
