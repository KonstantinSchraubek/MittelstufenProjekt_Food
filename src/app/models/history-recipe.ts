export class HistoryRecipe {
  recipeUrl: string;
  recipeLabel: string;
  recipeImage: string;
  constructor(recipeUrl: string, recipeLabel: string, recipeImage: string) {
    this.recipeImage = recipeImage;
    this.recipeLabel = recipeLabel;
    this.recipeUrl = recipeUrl;
  }
}
