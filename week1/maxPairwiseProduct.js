process.stdin.setEncoding('utf8');

var data = ""

function maxPairwise(numbers) {
  var length = numbers.length;
  var result = 0;
  for (var i = 0; i < length; ++i) {
    for (var j = i + 1; j < length; ++j) {
      if (numbers[i] * numbers[j] > result) {
        result = numbers[i] * numbers[j];
      }
    }
  }
  return result;
}

function maxPairwiseFast(numbers) {
  var length = numbers.length;
  var maxNum = 0
  var maxNum2 = 0
  for (var i = 0; i < length; i++) {
    if (numbers[i] > maxNum && maxNum >= maxNum2) {
      maxNum2 = maxNum;
      maxNum = numbers[i];
    } else if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    } else if (numbers[i] > maxNum2) {
      maxNum2 = numbers[i];
    }
  }
  return maxNum * maxNum2
}

process.stdin.on('end', function() {
  var lines = data.split("\n")
  var n = parseInt(lines[0], 10)
  var numbers = lines[1]
  .split(' ')
  .map( function(elem){
    return parseInt(elem,10);
  })
  console.log(maxPairwiseFast(numbers))
  process.exit()
})
process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
   data = data + new_data
  }
})
