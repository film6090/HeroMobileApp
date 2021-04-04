import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  title = "Tour of Heroes";
  heroes : Array<Hero>;

  constructor( private heroService :HeroService ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes().slice(0,5);
  }
}
