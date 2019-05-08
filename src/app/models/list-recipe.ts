export class ListRecipe {
  recipeUrl: string;
  recipeLabel: string;
  recipeImage: string;
  timestamp: string;
  constructor(recipeUrl: string, recipeLabel: string, recipeImage: string, timestamp?: string) {
    this.recipeImage = recipeImage;
    this.recipeLabel = recipeLabel;
    this.recipeUrl = recipeUrl;
    this.timestamp = timestamp;
  }
}
