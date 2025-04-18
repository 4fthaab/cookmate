import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  // Get all recipes
  getRecipes() {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  }

  // Get single recipe by ID
  getRecipeById(id: string) {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
