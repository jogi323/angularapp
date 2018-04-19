import { Component } from '@angular/core';
import { Heroes } from "./heroes-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroesList = Heroes;
  selectedHero = null;
  select(hero){
    this.selectedHero  = hero;
  }
}
