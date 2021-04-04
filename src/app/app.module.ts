import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
//import { ItemsComponent } from './item/items.component'
//import { ItemDetailComponent } from './item/item-detail.component'

import { HeroesComponent } from './heroes/heroes.component'
import { HeroComponent } from './hero/hero.component'

import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroService } from "./hero.service";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule ],
  declarations: [AppComponent, HeroesComponent 
                , HeroComponent ,DashboardComponent],
  providers: [HeroService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
