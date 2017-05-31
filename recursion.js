let factorialRecursive = function(num) {
  //repeated work: multiplication of previous product and next step in factorial
  //base case: number is 1

  if (num <= 1) {
    console.log('Base case hit:', 1);
    return 1;
  } else {
    console.log(
      'Returning factorial function of',
      num,
      'multiplying by factorial function for',
      num - 1
    );
    //5 returns 5 * (4 * (3 * (2 * (1)))?
    return num * factorialRecursive(num - 1);
  }
};

let num = 5;

let factorialIterative = function(num) {
  let product = num;

  for (let i = num; i >= 2; i--) {
    console.log('Multiplying', product, 'by', i - 1);
    product *= i - 1;
  }

  return product;
};

console.log('Recursive:', factorialRecursive(num));

console.log('Iterative:', factorialIterative(num));
