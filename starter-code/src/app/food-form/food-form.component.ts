import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  showAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood() {
    this.foods.push(this.newFood);
    this.newFood = {};
  }

  hideFood() {
    this.showAdd = false;
  }

}
