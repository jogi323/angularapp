import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
@Input() hero: {id: number,name: string};
  constructor() {
   }
  ngOnInit() {
  }

}
