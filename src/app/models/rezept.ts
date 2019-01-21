export class Rezept {
  set id(value: String) {
    this._id = value;
  }
  private _id: String;
  private image: String;
  private label: String;
  constructor(responseObject: Object) {
    this._parseObject(responseObject);
  }

  /**
   *
   * @param {Object} responseObject parsed Object by API
   * @private
   */
  private _parseObject(responseObject: Object) {
    this.id = Object.uri;
  }
}


/**
 {
    "recipe" : {
      "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
      "label" : "Chicken Vesuvio",
      "image" : "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      "source" : "Serious Eats",
      "url" : "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      "shareAs" : "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
      "yield" : 4.0,
      "dietLabels" : [ "Low-Carb" ],
      "healthLabels" : [ "Peanut-Free", "Tree-Nut-Free" ],
      "cautions" : [ ],
      "ingredientLines" : [ "1/2 cup olive oil", "5 cloves garlic, peeled", "2 large russet potatoes, peeled and cut into chunks", "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", "3/4 cup white wine", "3/4 cup chicken stock", "3 tablespoons chopped parsley", "1 tablespoon dried oregano", "Salt and pepper", "1 cup frozen peas, thawed" ],
      "ingredients" : [ {
        "text" : "1/2 cup olive oil",
        "weight" : 108.0
      }, {
        "text" : "5 cloves garlic, peeled",
        "weight" : 15.0
      }, {
        "text" : "2 large russet potatoes, peeled and cut into chunks",
        "weight" : 738.0
      }, {
        "text" : "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
        "weight" : 1587.5732950000001
      }, {
        "text" : "3/4 cup white wine",
        "weight" : 169.5
      }, {
        "text" : "3/4 cup chicken stock",
        "weight" : 180.0
      }, {
        "text" : "3 tablespoons chopped parsley",
        "weight" : 11.399999999999999
      }, {
        "text" : "1 tablespoon dried oregano",
        "weight" : 5.9999999998985585
      }, {
        "text" : "Salt and pepper",
        "weight" : 17.696839769999393
      }, {
        "text" : "Salt and pepper",
        "weight" : 8.848419884999696
      }, {
        "text" : "1 cup frozen peas, thawed",
        "weight" : 134.0
      } ],
      "calories" : 4230.305691201081,
      "totalWeight" : 2972.9302457924105,
      "totalTime" : 60.0,
      "totalNutrients" : {
        "ENERC_KCAL" : {
          "label" : "Energy",
          "quantity" : 4230.305691201081,
          "unit" : "kcal"
        },
        "FAT" : {
          "label" : "Fat",
          "quantity" : 274.57692448260667,
          "unit" : "g"
        },
        "FASAT" : {
          "label" : "Saturated",
          "quantity" : 62.54398613465762,
          "unit" : "g"
        },
        "FATRN" : {
          "label" : "Trans",
          "quantity" : 1.047163345382,
          "unit" : "g"
        },
        "FAMS" : {
          "label" : "Monounsaturated",
          "quantity" : 147.41199987638942,
          "unit" : "g"
        },
        "FAPU" : {
          "label" : "Polyunsaturated",
          "quantity" : 47.3914730818309,
          "unit" : "g"
        },
        "CHOCDF" : {
          "label" : "Carbs",
          "quantity" : 177.8427845163874,
          "unit" : "g"
        },
        "FIBTG" : {
          "label" : "Fiber",
          "quantity" : 21.103850230861813,
          "unit" : "g"
        },
        "SUGAR" : {
          "label" : "Sugars",
          "quantity" : 16.29572988725985,
          "unit" : "g"
        },
        "PROCNT" : {
          "label" : "Protein",
          "quantity" : 230.99085117764236,
          "unit" : "g"
        },
        "CHOLE" : {
          "label" : "Cholesterol",
          "quantity" : 815.06238045,
          "unit" : "mg"
        },
        "NA" : {
          "label" : "Sodium",
          "quantity" : 6879.517981530534,
          "unit" : "mg"
        },
        "CA" : {
          "label" : "Calcium",
          "quantity" : 447.3120299727316,
          "unit" : "mg"
        },
        "MG" : {
          "label" : "Magnesium",
          "quantity" : 485.56685143215077,
          "unit" : "mg"
        },
        "K" : {
          "label" : "Potassium",
          "quantity" : 5950.924381476969,
          "unit" : "mg"
        },
        "FE" : {
          "label" : "Iron",
          "quantity" : 23.630588288190932,
          "unit" : "mg"
        },
        "ZN" : {
          "label" : "Zinc",
          "quantity" : 18.41378763939628,
          "unit" : "mg"
        },
        "P" : {
          "label" : "Phosphorus",
          "quantity" : 2234.2507691001497,
          "unit" : "mg"
        },
        "VITA_RAE" : {
          "label" : "Vitamin A",
          "quantity" : 637.9185080148637,
          "unit" : "µg"
        },
        "VITC" : {
          "label" : "Vitamin C",
          "quantity" : 103.79879744959767,
          "unit" : "mg"
        },
        "THIA" : {
          "label" : "Thiamin (B1)",
          "quantity" : 1.73140519783562,
          "unit" : "mg"
        },
        "RIBF" : {
          "label" : "Riboflavin (B2)",
          "quantity" : 1.926703964512464,
          "unit" : "mg"
        },
        "NIA" : {
          "label" : "Niacin (B3)",
          "quantity" : 87.03578409848684,
          "unit" : "mg"
        },
        "VITB6A" : {
          "label" : "Vitamin B6",
          "quantity" : 6.914193343964289,
          "unit" : "mg"
        },
        "FOLDFE" : {
          "label" : "Folate equivalent (total)",
          "quantity" : 283.3102218162095,
          "unit" : "µg"
        },
        "FOLFD" : {
          "label" : "Folate (food)",
          "quantity" : 283.3102218162095,
          "unit" : "µg"
        },
        "VITB12" : {
          "label" : "Vitamin B12",
          "quantity" : 3.34660450586,
          "unit" : "µg"
        },
        "VITD" : {
          "label" : "Vitamin D",
          "quantity" : 2.1590996812000003,
          "unit" : "µg"
        },
        "TOCPHA" : {
          "label" : "Vitamin E",
          "quantity" : 20.17637308858548,
          "unit" : "mg"
        },
        "VITK1" : {
          "label" : "Vitamin K",
          "quantity" : 371.9191109601138,
          "unit" : "µg"
        }
      },
      "totalDaily" : {
        "ENERC_KCAL" : {
          "label" : "Energy",
          "quantity" : 211.51528456005406,
          "unit" : "%"
        },
        "FAT" : {
          "label" : "Fat",
          "quantity" : 422.42603766554873,
          "unit" : "%"
        },
        "FASAT" : {
          "label" : "Saturated",
          "quantity" : 312.7199306732881,
          "unit" : "%"
        },
        "CHOCDF" : {
          "label" : "Carbs",
          "quantity" : 59.28092817212914,
          "unit" : "%"
        },
        "FIBTG" : {
          "label" : "Fiber",
          "quantity" : 84.41540092344725,
          "unit" : "%"
        },
        "PROCNT" : {
          "label" : "Protein",
          "quantity" : 461.9817023552847,
          "unit" : "%"
        },
        "CHOLE" : {
          "label" : "Cholesterol",
          "quantity" : 271.68746015,
          "unit" : "%"
        },
        "NA" : {
          "label" : "Sodium",
          "quantity" : 286.64658256377226,
          "unit" : "%"
        },
        "CA" : {
          "label" : "Calcium",
          "quantity" : 44.73120299727315,
          "unit" : "%"
        },
        "MG" : {
          "label" : "Magnesium",
          "quantity" : 115.61115510289305,
          "unit" : "%"
        },
        "K" : {
          "label" : "Potassium",
          "quantity" : 126.61541237185041,
          "unit" : "%"
        },
        "FE" : {
          "label" : "Iron",
          "quantity" : 131.28104604550518,
          "unit" : "%"
        },
        "ZN" : {
          "label" : "Zinc",
          "quantity" : 167.3980694490571,
          "unit" : "%"
        },
        "P" : {
          "label" : "Phosphorus",
          "quantity" : 319.17868130002137,
          "unit" : "%"
        },
        "VITA_RAE" : {
          "label" : "Vitamin A",
          "quantity" : 70.87983422387376,
          "unit" : "%"
        },
        "VITC" : {
          "label" : "Vitamin C",
          "quantity" : 115.33199716621964,
          "unit" : "%"
        },
        "THIA" : {
          "label" : "Thiamin (B1)",
          "quantity" : 144.28376648630166,
          "unit" : "%"
        },
        "RIBF" : {
          "label" : "Riboflavin (B2)",
          "quantity" : 148.20799727018954,
          "unit" : "%"
        },
        "NIA" : {
          "label" : "Niacin (B3)",
          "quantity" : 543.9736506155427,
          "unit" : "%"
        },
        "VITB6A" : {
          "label" : "Vitamin B6",
          "quantity" : 531.8610264587915,
          "unit" : "%"
        },
        "FOLDFE" : {
          "label" : "Folate equivalent (total)",
          "quantity" : 70.82755545405237,
          "unit" : "%"
        },
        "VITB12" : {
          "label" : "Vitamin B12",
          "quantity" : 139.44185441083332,
          "unit" : "%"
        },
        "VITD" : {
          "label" : "Vitamin D",
          "quantity" : 14.393997874666669,
          "unit" : "%"
        },
        "TOCPHA" : {
          "label" : "Vitamin E",
          "quantity" : 134.5091539239032,
          "unit" : "%"
        },
        "VITK1" : {
          "label" : "Vitamin K",
          "quantity" : 309.93259246676155,
          "unit" : "%"
        }
      },
      "digest" : [ {
        "label" : "Fat",
        "tag" : "FAT",
        "schemaOrgTag" : "fatContent",
        "total" : 274.57692448260667,
        "hasRDI" : true,
        "daily" : 422.42603766554873,
        "unit" : "g",
        "sub" : [ {
          "label" : "Saturated",
          "tag" : "FASAT",
          "schemaOrgTag" : "saturatedFatContent",
          "total" : 62.54398613465762,
          "hasRDI" : true,
          "daily" : 312.7199306732881,
          "unit" : "g"
        }, {
          "label" : "Trans",
          "tag" : "FATRN",
          "schemaOrgTag" : "transFatContent",
          "total" : 1.047163345382,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "g"
        }, {
          "label" : "Monounsaturated",
          "tag" : "FAMS",
          "schemaOrgTag" : null,
          "total" : 147.41199987638942,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "g"
        }, {
          "label" : "Polyunsaturated",
          "tag" : "FAPU",
          "schemaOrgTag" : null,
          "total" : 47.3914730818309,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "g"
        } ]
      }, {
        "label" : "Carbs",
        "tag" : "CHOCDF",
        "schemaOrgTag" : "carbohydrateContent",
        "total" : 177.8427845163874,
        "hasRDI" : true,
        "daily" : 59.28092817212914,
        "unit" : "g",
        "sub" : [ {
          "label" : "Carbs (net)",
          "tag" : "CHOCDF.net",
          "schemaOrgTag" : null,
          "total" : 156.7389342855256,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "g"
        }, {
          "label" : "Fiber",
          "tag" : "FIBTG",
          "schemaOrgTag" : "fiberContent",
          "total" : 21.103850230861813,
          "hasRDI" : true,
          "daily" : 84.41540092344725,
          "unit" : "g"
        }, {
          "label" : "Sugars",
          "tag" : "SUGAR",
          "schemaOrgTag" : "sugarContent",
          "total" : 16.29572988725985,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "g"
        }, {
          "label" : "Sugars, added",
          "tag" : "SUGAR.added",
          "schemaOrgTag" : null,
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "g"
        } ]
      }, {
        "label" : "Protein",
        "tag" : "PROCNT",
        "schemaOrgTag" : "proteinContent",
        "total" : 230.99085117764236,
        "hasRDI" : true,
        "daily" : 461.9817023552847,
        "unit" : "g"
      }, {
        "label" : "Cholesterol",
        "tag" : "CHOLE",
        "schemaOrgTag" : "cholesterolContent",
        "total" : 815.06238045,
        "hasRDI" : true,
        "daily" : 271.68746015,
        "unit" : "mg"
      }, {
        "label" : "Sodium",
        "tag" : "NA",
        "schemaOrgTag" : "sodiumContent",
        "total" : 6879.517981530534,
        "hasRDI" : true,
        "daily" : 286.64658256377226,
        "unit" : "mg"
      }, {
        "label" : "Calcium",
        "tag" : "CA",
        "schemaOrgTag" : null,
        "total" : 447.3120299727316,
        "hasRDI" : true,
        "daily" : 44.73120299727315,
        "unit" : "mg"
      }, {
        "label" : "Magnesium",
        "tag" : "MG",
        "schemaOrgTag" : null,
        "total" : 485.56685143215077,
        "hasRDI" : true,
        "daily" : 115.61115510289305,
        "unit" : "mg"
      }, {
        "label" : "Potassium",
        "tag" : "K",
        "schemaOrgTag" : null,
        "total" : 5950.924381476969,
        "hasRDI" : true,
        "daily" : 126.61541237185041,
        "unit" : "mg"
      }, {
        "label" : "Iron",
        "tag" : "FE",
        "schemaOrgTag" : null,
        "total" : 23.630588288190932,
        "hasRDI" : true,
        "daily" : 131.28104604550518,
        "unit" : "mg"
      }, {
        "label" : "Zinc",
        "tag" : "ZN",
        "schemaOrgTag" : null,
        "total" : 18.41378763939628,
        "hasRDI" : true,
        "daily" : 167.3980694490571,
        "unit" : "mg"
      }, {
        "label" : "Phosphorus",
        "tag" : "P",
        "schemaOrgTag" : null,
        "total" : 2234.2507691001497,
        "hasRDI" : true,
        "daily" : 319.17868130002137,
        "unit" : "mg"
      }, {
        "label" : "Vitamin A",
        "tag" : "VITA_RAE",
        "schemaOrgTag" : null,
        "total" : 637.9185080148637,
        "hasRDI" : true,
        "daily" : 70.87983422387376,
        "unit" : "µg"
      }, {
        "label" : "Vitamin C",
        "tag" : "VITC",
        "schemaOrgTag" : null,
        "total" : 103.79879744959767,
        "hasRDI" : true,
        "daily" : 115.33199716621964,
        "unit" : "mg"
      }, {
        "label" : "Thiamin (B1)",
        "tag" : "THIA",
        "schemaOrgTag" : null,
        "total" : 1.73140519783562,
        "hasRDI" : true,
        "daily" : 144.28376648630166,
        "unit" : "mg"
      }, {
        "label" : "Riboflavin (B2)",
        "tag" : "RIBF",
        "schemaOrgTag" : null,
        "total" : 1.926703964512464,
        "hasRDI" : true,
        "daily" : 148.20799727018954,
        "unit" : "mg"
      }, {
        "label" : "Niacin (B3)",
        "tag" : "NIA",
        "schemaOrgTag" : null,
        "total" : 87.03578409848684,
        "hasRDI" : true,
        "daily" : 543.9736506155427,
        "unit" : "mg"
      }, {
        "label" : "Vitamin B6",
        "tag" : "VITB6A",
        "schemaOrgTag" : null,
        "total" : 6.914193343964289,
        "hasRDI" : true,
        "daily" : 531.8610264587915,
        "unit" : "mg"
      }, {
        "label" : "Folate equivalent (total)",
        "tag" : "FOLDFE",
        "schemaOrgTag" : null,
        "total" : 283.3102218162095,
        "hasRDI" : true,
        "daily" : 70.82755545405237,
        "unit" : "µg"
      }, {
        "label" : "Folate (food)",
        "tag" : "FOLFD",
        "schemaOrgTag" : null,
        "total" : 283.3102218162095,
        "hasRDI" : false,
        "daily" : 0.0,
        "unit" : "µg"
      }, {
        "label" : "Folic acid",
        "tag" : "FOLAC",
        "schemaOrgTag" : null,
        "total" : 0.0,
        "hasRDI" : false,
        "daily" : 0.0,
        "unit" : "µg"
      }, {
        "label" : "Vitamin B12",
        "tag" : "VITB12",
        "schemaOrgTag" : null,
        "total" : 3.34660450586,
        "hasRDI" : true,
        "daily" : 139.44185441083332,
        "unit" : "µg"
      }, {
        "label" : "Vitamin D",
        "tag" : "VITD",
        "schemaOrgTag" : null,
        "total" : 2.1590996812000003,
        "hasRDI" : true,
        "daily" : 14.393997874666669,
        "unit" : "µg"
      }, {
        "label" : "Vitamin E",
        "tag" : "TOCPHA",
        "schemaOrgTag" : null,
        "total" : 20.17637308858548,
        "hasRDI" : true,
        "daily" : 134.5091539239032,
        "unit" : "mg"
      }, {
        "label" : "Vitamin K",
        "tag" : "VITK1",
        "schemaOrgTag" : null,
        "total" : 371.9191109601138,
        "hasRDI" : true,
        "daily" : 309.93259246676155,
        "unit" : "µg"
      } ]
    },
    "bookmarked" : false,
    "bought" : false
  }
 */
