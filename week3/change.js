process.stdin.setEncoding('utf8');

var data = ""

function change(n) {
  var totalNumberOfCoins = 0
  var workingTotal = 0
  while (n % 10 < n) {
    workingTotal = n - (n % 10)
    totalNumberOfCoins += workingTotal/10
    n = n % 10
  }
  while (n % 5 < n) {
    workingTotal = n - (n % 5)
    totalNumberOfCoins += workingTotal/5
    n = n % 5
  }
  totalNumberOfCoins += n
  return totalNumberOfCoins
}

process.stdin.on('end', function() {
  var n = parseInt(data)
  console.log(change(n))
  process.exit()
})

process.stdin.on('readable', function(){
  new_data = process.stdin.read();
  if (new_data !== null) {
   data = data + new_data
  }
})

