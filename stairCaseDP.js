let iterations = 0;
const hashTable = {};
const numWays = (n, ways) => {
  const calculate = (step = 0) => {
    iterations++;
    if (step === n) return 1;
    else if (step > n) return 0;
    else if (hashTable[step] !== undefined) return hashTable[step];
    let sum = 0;
    ways.forEach((offset) => {
      const value = calculate(step + offset);
      sum += value;
      hashTable[step + offset] = value;
    });
    return sum;
  };
  return calculate();
};
const ways = [10, 3];
console.log(numWays(50, ways), iterations);
