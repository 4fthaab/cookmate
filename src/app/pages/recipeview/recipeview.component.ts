import { Component } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipeview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipeview.component.html',
  styleUrls: ['./recipeview.component.scss']
})
export class RecipeviewComponent {
  recipe: any;

  constructor(private route: ActivatedRoute, private apiservice: ApiserviceService) {}

  ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.apiservice.getRecipeById(recipeId).subscribe((data: any) => {
        this.recipe = data.meals[0];
      });
    }
  }
}
