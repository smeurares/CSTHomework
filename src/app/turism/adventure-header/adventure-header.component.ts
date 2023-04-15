import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventure-header',
  templateUrl: './adventure-header.component.html',
  styleUrls: ['./adventure-header.component.css']
})
export class AdventureHeaderComponent {
   newAdventure: string = ''

   setNewAdventure(value: string){
    this.newAdventure = value;
    console.log(value, " in header")
   }

}
