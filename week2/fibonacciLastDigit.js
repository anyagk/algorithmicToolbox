process.stdin.setEncoding('utf8');

var data = ""

function fibonacciLastDigit(n) {
  var fibonacciArray = [];

  fibonacciArray[0] = 0;
  fibonacciArray[1] = 1;
  for (i = 2; i <= n; i++) {
    fibonacciArray[i] = (fibonacciArray[i-2] + fibonacciArray[i-1]) % 10;
  }
  return (fibonacciArray[n]);
}

process.stdin.on('end', function() {
  var n = parseInt(data)
  console.log(fibonacciLastDigit(n))
  process.exit()
})

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
   data = data + new_data
  }
})
