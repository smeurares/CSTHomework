import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdventureHeaderComponent } from './turism/adventure-header/adventure-header.component';
import { TurismHomeComponent } from './turism/turism-home/turism-home.component';

const routes: Routes = [
  {path: '', component: TurismHomeComponent},
  {
    path: "",
    loadChildren: () => import('./turism/turism.module').then(m => m.TurismModule)
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
