import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

//import { ItemsComponent } from './item/items.component'
//import { ItemDetailComponent } from './item/item-detail.component'

import { HeroesComponent } from './heroes/heroes.component'

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  //{ path: 'items', component: ItemsComponent },
  //{ path: 'item/:id', component: ItemDetailComponent },
  { path: 'heroes' , component:HeroesComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
