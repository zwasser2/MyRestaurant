import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FoodService} from '../food.service';
import {filter, map} from 'rxjs/operators';
import {Food} from '../food';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  nameOfItem: string;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.nameOfItem = params.get('name');
    });
  }

  ngOnInit() {
    const example = this.foodService.getFood()
    example.subscribe((obj) => {
      this.currentItemObject = obj.filter((ele) => ele.name === this.nameOfItem)[0]
      console.log(this.currentItemObject)
    })
  }

}
