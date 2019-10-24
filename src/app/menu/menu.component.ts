import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FoodService} from '../food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentMealType = 'Appetizers'
  listOfMealsWithMealType = []

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.activatedRoute.url.subscribe(params => {
      this.currentMealType = params[0].path;
    });
  }

  ngOnInit() {
    this.foodService.getFood()
      .subscribe((res) => {
        for (const foodItem of res) {
          if (foodItem.foodType === this.currentMealType) {
            this.listOfMealsWithMealType.push(foodItem);
          }
        }
      });
  }
}
