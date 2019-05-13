import { Component, OnInit } from '@angular/core';
import {Food} from '../../shared/food';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  list = '';
  canBeCooked = '';
  foods: Food[] = [new Food( 'Chicken'),
                   new Food('Tomato'),
                   new Food('Fish'),
                   new Food('Beef'),
                   new Food('Lamb'),
                   new Food('Yam')];
  map = new Map();
  addFood(a: Food) {
    this.list += a.foodName + ' ';
  }
  cook() {
    if (this.map.has(this.list)) {
      this.canBeCooked = 'you will get' + this.map.get(this.list);
    } else {
      this.canBeCooked = 'they can not be cooked';
    }
  }
  reset() {
    this.list = '';
    this.canBeCooked = '';
  }
  constructor() {
    this.map.set('Chicken Tomato ', 'TomatoChicken');
  }

  ngOnInit() {
  }

}
