import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()
  //menus: Observable<any>

  constructor() { }

  ngOnInit() {
    //this.menus = this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])

  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
