import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurismHomeComponent } from './turism-home/turism-home.component';
import { SearchServicesComponent } from './search-services/search-services.component';
import { PopularCitiesComponent } from './popular-cities/popular-cities.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { AdventureHeaderComponent } from './adventure-header/adventure-header.component';



@NgModule({
  declarations: [
    TurismHomeComponent,
    SearchServicesComponent,
    PopularCitiesComponent,
    AdventureHeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TurismHomeComponent
  ]
})
export class TurismModule { }
