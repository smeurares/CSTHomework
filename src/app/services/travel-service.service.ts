import { Injectable } from '@angular/core';
import { TravelServiceInterface } from '../interfaces/travel-services-interface';
import { travelServices } from '../mock-data/travel-services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelServiceService {

  constructor() { }

  getServices(): Observable<TravelServiceInterface[]> {
    const travelObjects = of(travelServices);
    return travelObjects;
  }
}
