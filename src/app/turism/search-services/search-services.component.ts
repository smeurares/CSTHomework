import { Component, OnInit } from '@angular/core';
import { TravelServiceService } from 'src/app/services/travel-service.service';
import { TravelServiceInterface } from 'src/app/interfaces/travel-services-interface';
import { cities } from '../../mock-data/cities';
import { CitiesService } from 'src/app/services/cities.service';
import { CityInterface } from 'src/app/interfaces/city-interface';

@Component({
  selector: 'app-search-services',
  templateUrl: './search-services.component.html',
  styleUrls: ['./search-services.component.css']
})
export class SearchServicesComponent implements OnInit {
   searchServices: TravelServiceInterface[] = []
   citiesList: CityInterface[] = []
   searchText:string = "";
   constructor(private travelServices: TravelServiceService, private citiesService: CitiesService){}
   ngOnInit(): void {
    this.getSearchServices();
    this.getCities();
   }

   getSearchServices(): void{
     this.travelServices.getServices().subscribe(services => this.searchServices = services);
   }

   getCities(): void {
    this.citiesService.getCities().subscribe(cities => this.citiesList = cities);
  }

}
