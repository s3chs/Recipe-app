import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'data:image/jpeg;base64,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'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a simple test',
      'data:image/jpeg;base64,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'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
