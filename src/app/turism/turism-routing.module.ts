import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurismHomeComponent } from './turism-home/turism-home.component';
import { SearchServicesComponent } from './search-services/search-services.component';
import { PopularCitiesComponent } from './popular-cities/popular-cities.component';

const routes: Routes = [
  { path: '', component: TurismHomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismRoutingModule {}
