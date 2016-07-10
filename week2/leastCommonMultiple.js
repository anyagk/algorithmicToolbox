process.stdin.setEncoding('utf8');

var data = ""

function leastCommonMultiple(a, b) {
  var gcd = greatestCommonDivisor(a, b)
  return ((a / gcd) * b)
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a % b);
  }
}

process.stdin.on('end', function() {
  var input = data.split(" ")
  var a = parseInt(input[0], 10)
  var b = parseInt(input[1], 10)
  console.log(leastCommonMultiple(a, b))
  process.exit()
})

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
   data = data + new_data
  }
})
