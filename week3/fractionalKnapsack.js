process.stdin.setEncoding('utf8');

var data = ""

function knapsack(capacity, weights, calories) {
  var knapsackIngredientArray = [];
  var finalCalorie = 0;

  for(var i = 0; i < weights.length; ++i) {
    var caloriesPerUnit = calories[i] / weights[i]
    var knapsackIngredient = {
      weight: weights[i],
      calorie: calories[i],
      caloriesPerUnit: caloriesPerUnit
    }
    knapsackIngredientArray.push(knapsackIngredient)
  }

  knapsackIngredientArray.sort(function(a, b) {
    return parseFloat(b.caloriesPerUnit) - parseFloat(a.caloriesPerUnit)
  });

  for(var i = 0; i < knapsackIngredientArray.length; ++i) {
    if (capacity >= knapsackIngredientArray[i].weight) {
      capacity -= knapsackIngredientArray[i].weight
      finalCalorie += knapsackIngredientArray[i].calorie
    } else {
      finalCalorie += knapsackIngredientArray[i].caloriesPerUnit * capacity
      capacity = 0
    }
  }
  return finalCalorie
};

process.stdin.on('end', function() {
  var lines = data.split("\n")
  var n = parseInt(lines[0].split(" ")[0], 10);
  var capacity = parseInt(lines[0].split(" ")[1], 10);

  var weights = [];
  var calories = [];

  for(var i = 1; i < n+1; i++) {
    var split = lines[i].split(" ");
    calories[i-1] = parseInt(split[0], 10);
    weights[i-1] = parseInt(split[1], 10);
  }

  console.log(knapsack(capacity, weights, calories))
  process.exit()
})
process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
    data = data + new_data
  }
})
