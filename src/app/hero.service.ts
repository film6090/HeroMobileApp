import { Injectable } from "@angular/core";
import { Hero } from'./hero'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private templateHero = new Array<Hero>(
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  )
  heroes : Array<Hero>
  
  constructor(){
    const firsttimerun = AppSettings.getBoolean("firsttimerun");
    if(firsttimerun == null || firsttimerun == undefined){
      this.heroes = this.templateHero;
      AppSettings.setString("HeroesData", JSON.stringify(this.heroes));
      AppSettings.setBoolean("firsttimerun", false)
    }
    else {
      this.heroes = JSON.parse(AppSettings.getString("HeroesData"));
    }
  }
    
    getHeroes(): Array<Hero> {
      return this.heroes
    }
    getLength() { 
      return this.heroes.length
    }  
    getHero(id: number): Hero {
      return this.heroes.filter((item) => item.id === id)[0]
    }
    getnewHero( name:string ) {
      this.heroes.push(
        {
            "id": this.heroes[this.heroes.length-1].id+1 ,
            "name": name
        });
      AppSettings.setString("HeroesData", JSON.stringify(this.heroes))
    }
    getEditHero(id:number , name:string){
      for(let i = 0; i < this.heroes.length; i++) {
        if(this.heroes[i].id == id) {
            this.heroes[i].name = name;
            break;
        }
    }
    AppSettings.setString("HeroesData", JSON.stringify(this.heroes))
    }
    getDeleteHero(id:number){
      for(let i = 0; i < this.heroes.length; i++) {
        if(this.heroes[i].id == id) {
            this.heroes.splice(i, 1);
            break;
        }
    }
    AppSettings.setString("HeroesData", JSON.stringify(this.heroes))
  }
}