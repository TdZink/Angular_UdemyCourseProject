import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe'
              ,'This is simply a test'
              ,'https://www.recipetineats.com/wp-content/uploads/2018/09/Honey-Garlic-Chicken-Breast_5.jpg')
    ,new Recipe('A Test Recipe 2'
                ,'This is simply a test 2'
                ,'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg')
            ];
  

  constructor() {
    console.log(this.recipes[0].name);
   }

  ngOnInit(): void {
  }

}
