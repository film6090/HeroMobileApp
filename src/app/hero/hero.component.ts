import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'ns-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  title = "Hero Detail"
  hero : Hero

  constructor( private heroService :HeroService ,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.hero = this.heroService.getHero(id)
  }
}
