function factorise(n){
  var factors = new Array;
  for (var i = 2; i <= n; i++){
    while (n % i == 0) {
      n = n/i;
      factors.push(i);
    }
  }
  console.log(factors); // if you want to see it
  return factors;
}
