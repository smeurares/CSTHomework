import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CityInterface } from '../interfaces/city-interface';
import { cities } from '../mock-data/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  getCities(): Observable<CityInterface[]> {
    const citiesObservable = of(cities);
    return citiesObservable
  }
}
