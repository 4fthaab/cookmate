import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeviewComponent } from './pages/recipeview/recipeview.component';

export const routes: Routes = [
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path: "",
    component:HomeComponent
  },
  {
    path:"recipes",
    component:RecipesComponent
  },
  {
    path:"recipeview/:id",
    component:RecipeviewComponent
  }
];
