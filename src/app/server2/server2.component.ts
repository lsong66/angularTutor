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
  chooseChicken = false;
  chooseTomato = false;
  chooseFish = false;
  chooseBeef = false;
  chooseLamb = false;
  chooseYam = false;
  foods: Food[] = [new Food( 'Chicken'),
                   new Food('Tomato'),
                   new Food('Fish'),
                   new Food('Beef'),
                   new Food('Lamb'),
                   new Food('Yam')];
  map = new Map();
  addChicken() {
    this.chooseChicken = true;
    this.list += 'Chicken ';
  }
  addTomato() {
    this.chooseTomato = true;
    this.list += 'Tomato ';
  }
  addFish() {
    this.chooseFish = true;
    this.list += 'Fish ';
  }
  addBeef() {
    this.chooseBeef = true;
    this.list += 'Beef ';
  }
  addLamb() {
    this.chooseLamb = true;
    this.list += 'Lamb ';
  }
  addYam() {
    this.chooseYam = true;
    this.list += 'Yam';
  }
  cook() {
    if (this.map.has(this.list)) {
      this.canBeCooked = 'You will get ' + this.map.get(this.list);
    } else {
      this.canBeCooked = 'They can not be cooked';
    }
  }
  reset() {
    this.list = '';
    this.canBeCooked = '';
    this.chooseChicken = false;
    this.chooseTomato = false;
    this.chooseFish = false;
    this.chooseBeef = false;
    this.chooseLamb = false;
    this.chooseYam = false;
  }
  constructor() {
    this.map.set('Chicken Tomato ', 'TomatoChicken');
  }

  ngOnInit() {
  }

}
