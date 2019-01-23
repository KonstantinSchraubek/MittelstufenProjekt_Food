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
    totalDaily: object;
    bought: boolean;
    bookmarked: boolean;
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
  }) {
    this.uri = responseObject.uri;
    this.label = responseObject.label;
    this.image = responseObject.image;
    this.source = responseObject.source;
    this.url = responseObject.url;
    this.shareAs = responseObject.shareAs;
    this.yield = responseObject.yield;
    this.dietLabels = responseObject.dietLabels;
    this.cautions = responseObject.cautions;
    this.ingredientLines = responseObject.ingredientLines;
    this.ingredients = responseObject.ingredients;
    this.healthLabels = responseObject.healthLabels;
    this.calories = responseObject.calories;
    this.totalWeight = responseObject.totalWeight;
    this.totalTime = responseObject.totalTime;
    this.totalNutrients = responseObject.totalNutrients;
    this.digest = responseObject.digest;
    this.bookmarked = responseObject.bookmarked;
    this.bought = responseObject.bought;
    this.totalDaily = responseObject.totalDaily;
  }
}
