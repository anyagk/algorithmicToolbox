process.stdin.setEncoding('utf8');

var data = ""

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
  console.log(greatestCommonDivisor(a, b))
  process.exit()
})

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
   data = data + new_data
  }
})
