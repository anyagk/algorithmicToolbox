process.stdin.setEncoding('utf8');

var data = ""

function binarySearch(sortedArray, secondArrayInteger) {
  var low = 0;
  var high = sortedArray.length - 1;

  while (low <= high) {
    mid = (Math.floor((high - low) / 2)) + low;
    element = sortedArray[mid];
    if (element < secondArrayInteger) {
      low = mid + 1;
    } else if (element > secondArrayInteger) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;

  // var mid = Math.floor((high - low)/ 2) + low;
  // var element = sortedArray[mid];

  // if (low > high) return -1;

  // if (element < secondArrayInteger) {
  //   return binarySearch(sortedArray, secondArrayInteger, mid + 1, high)
  // } else if (element > secondArrayInteger) {
  //   return binarySearch(sortedArray, secondArrayInteger, low, mid - 1)
  // } else {
  //   return mid
  // }
};

process.stdin.on('end', function() {
  var lines = data.split("\n")

  var firstArray = [];
  var secondArray = [];
  var answerArray = [];

  var firstArray = lines[0]
    .split(' ')
    .map( function(elem){
      return parseInt(elem,10);
    })
    .slice(1);

  var secondArray = lines[1]
    .split(' ')
    .map( function(elem){
      return parseInt(elem,10);
    })
    .slice(1);

  // var low = 0;
  // var high = firstArray.length - 1;

  for (var i = 0; i < secondArray.length; i++) {
    answerArray.push(binarySearch(firstArray, secondArray[i]));
  }

  var output = answerArray.join(" ")

  console.log(output)
  process.exit()
})

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
    data = data + new_data
  }
})
