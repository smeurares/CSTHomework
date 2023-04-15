import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CityInterface } from 'src/app/interfaces/city-interface';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-popular-cities',
  templateUrl: './popular-cities.component.html',
  styleUrls: ['./popular-cities.component.css']
})
export class PopularCitiesComponent implements OnInit {
  citiesList: CityInterface[] = []
  @Output() cityHeader = new EventEmitter<string>()
  constructor(private citiesService: CitiesService){}
  ngOnInit(): void {
    this.getCities()
  }

  getCities(): void {
    this.citiesService.getCities().subscribe(cities => this.citiesList = cities);
  }

  setCityHeader(value: string) {
    this.cityHeader.emit(value)
    console.log(value, " in popular cities")
  }

}
