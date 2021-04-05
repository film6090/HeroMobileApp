import { Injectable } from "@angular/core";
import { Hero } from'./hero'
//เก็บข้อมูลเปิด เก็บฟังก์ชั่นที่จะไว้ใช้ในการเรียกข้อมูลโดยจะทำงานใน component จาก ฟังก์ชั่นของ Component อีกที
@Injectable({
  providedIn: 'root',
})
export class HeroService {
    private heroes = new Array<Hero>(
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
    getHeroes(): Array<Hero> {
      return this.heroes
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
    }
    getEditHero(id:number , name:string){
      for(let i = 0; i < this.heroes.length; i++) {
        if(this.heroes[i].id == id) {
            this.heroes[i].name = name;
            break;
        }
    }
    }
    getDeleteHero(id:number){
      for(let i = 0; i < this.heroes.length; i++) {
        if(this.heroes[i].id == id) {
            this.heroes.splice(i, 1);
            break;
        }
    }
  }
}