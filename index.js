const sumFibonacci = (num) => {
    if (typeof(num) !== 'number' || num <= 1) {
      return 0;
    }
  
    const iter = (counter, acc) => {
      if (counter === num) {
        return acc;
      }
      return iter(counter + 1, counter + acc - 1);
    };
  
    return iter(2, 1);
  }

console.log(sumFibonacci(1))
console.log(sumFibonacci(2))
console.log(sumFibonacci(3))
console.log(sumFibonacci(4))
console.log(sumFibonacci(5))
console.log(sumFibonacci(6))
console.log(sumFibonacci(-1))
console.log(sumFibonacci('cat'))
