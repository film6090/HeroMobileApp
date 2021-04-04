import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  hay: Array<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.hay = this.itemService.getItems()
  }
}
