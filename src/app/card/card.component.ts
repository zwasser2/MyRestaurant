import { Input, Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name;
  constructor(
    private imageService: FoodService
  ) { }
}
