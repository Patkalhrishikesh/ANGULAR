import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients: ingredient [] =[
  new ingredient ('apple', 4),
  new ingredient('tomyato',10),
  new ingredient('potato',310)
];

  constructor() { }

  ngOnInit(): void {
  }

}
