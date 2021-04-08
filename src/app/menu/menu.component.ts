import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  title = "Menu Tour of Hero";

  constructor( ) { }

  ngOnInit(): void {
  }
}
