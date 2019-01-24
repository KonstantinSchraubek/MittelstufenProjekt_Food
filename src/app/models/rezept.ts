export class Rezept {
  private shareAs: string;
  private uri: string;
  private image: string;
  private label: string;
  private source: string;
  private url: string;
  private yield: number;
  private dietLabels: string[];
  private cautions: string[];
  private ingredientLines: string[];
  private ingredients:  object[];
  private healthLabels: string[];
  private calories: number;
  private totalWeight: number;
  private totalTime: number;
  private totalNutrients: object;
  private digest: object[];
  private bookmarked: boolean;
  private bought: boolean;
  private totalDaily: object;

  constructor(responseObject: {
    bought: boolean;
    bookmarked: boolean;
    recipe: {
      totalDaily: object;
      digest: object[];
      totalNutrients: object;
      totalTime: number;
      totalWeight: number;
      calories: number;
      healthLabels: string[];
      ingredients: object[];
      ingredientLines: string[];
      cautions: string[];
      dietLabels: string[];
      yield: number;
      shareAs: string;
      uri: string,
      label: string,
      image: string,
      source: string,
      url: string
    }
  }) {
    this.uri = responseObject.recipe.uri;
    this.label = responseObject.recipe.label;
    this.image = responseObject.recipe.image;
    this.source = responseObject.recipe.source;
    this.url = responseObject.recipe.url;
    this.shareAs = responseObject.recipe.shareAs;
    this.yield = responseObject.recipe.yield;
    this.dietLabels = responseObject.recipe.dietLabels;
    this.cautions = responseObject.recipe.cautions;
    this.ingredientLines = responseObject.recipe.ingredientLines;
    this.ingredients = responseObject.recipe.ingredients;
    this.healthLabels = responseObject.recipe.healthLabels;
    this.calories = responseObject.recipe.calories;
    this.totalWeight = responseObject.recipe.totalWeight;
    this.totalTime = responseObject.recipe.totalTime;
    this.totalNutrients = responseObject.recipe.totalNutrients;
    this.digest = responseObject.recipe.digest;
    this.bookmarked = responseObject.bookmarked;
    this.bought = responseObject.bought;
    this.totalDaily = responseObject.recipe.totalDaily;
  }
}