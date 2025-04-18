import { Component } from '@angular/core';
import { CardsComponent } from '../../UI/cards/cards.component';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-recipes',
  imports: [CardsComponent],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes: any[] = [];

  constructor(private apiservice: ApiserviceService) {}
  ngOnInit() {
    this.apiservice.getRecipes().subscribe((data: any) => {
      this.recipes = data.meals.map((meal: any) => ({
        title: meal.strMeal,
        desc: meal.strCategory + ' | ' + meal.strArea,
        image: meal.strMealThumb,
        link: `/recipeview/${meal.idMeal}`
      }));
    });
  }
}
