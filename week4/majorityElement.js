process.stdin.setEncoding('utf8');

var data = ""

function majoritySort(array) {
  var numberOfAppearances = {};
  var sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  var mid = sortedArray.length / 2;

  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] in numberOfAppearances) {
      numberOfAppearances[sortedArray[i]] += 1
    } else {
      numberOfAppearances[sortedArray[i]] = 1
    }
  }

  for (var key of Object.keys(numberOfAppearances)) {
    var value = numberOfAppearances[key];
    if (value > mid) {
      return 1
    }
    return 0
  }
}

process.stdin.on('end', function() {
  var lines = data.split("\n")
  var n = parseInt(lines[0], 10)
  var array = lines[1]
  .split(' ')
  .map( function(elem){
    return parseInt(elem,10);
  })
  console.log(majoritySort(array))
  process.exit()
})
process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
   data = data + new_data
  }
})
