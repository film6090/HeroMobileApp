import { Component, OnInit } from '@angular/core'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'ns-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  title = "Tour of Heroes"
  heroes : Array<Hero>;
  heroName : string;
  constructor( private heroService :HeroService ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
  }
  add(){
    if(this.heroName != undefined || this.heroName != null){
      this.heroService.getnewHero( this.heroName );
      this.heroName = '';
    }
  }
}
