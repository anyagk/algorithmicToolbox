process.stdin.setEncoding('utf8');

var data = ""

function minimumDotProduct(firstArray, secondArray) {
  var total = 0
  var descendingFirstArray = firstArray.sort(function(a, b) {return b - a});
  var ascendingSecondArray = secondArray.sort(function(a, b) {return a - b});

  for(var i = 0; i < firstArray.length; ++i) {
    total += descendingFirstArray[i] * ascendingSecondArray[i]
  }
  return total
};

process.stdin.on('end', function() {
  var lines = data.split("\n")
  var n = parseInt(lines[0], 10);

  var firstArray = [];
  var secondArray = [];

  var firstArray = lines[1]
    .split(' ')
    .map( function(elem){
      return parseInt(elem,10);
    })

  var secondArray = lines[2]
    .split(' ')
    .map( function(elem){
      return parseInt(elem,10);
    })

  console.log(minimumDotProduct(firstArray, secondArray))
  process.exit()
})
process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
    data = data + new_data
  }
})
