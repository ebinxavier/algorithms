let iterations = 0;
const hashTable = {};
const results = [];
const permutation = (input) => {
  iterations++;
  if (hashTable[input]) return hashTable[input];
  if (input.length === 1) {
    return [input];
  }
  let localPermutations = [];
  for (let i = 0; i < input.length; i++) {
    const newInput = input.slice(0, i) + input.slice(i + 1);
    const item = permutation(newInput);
    if (item)
      localPermutations = localPermutations.concat(
        item.map((e) => input[i] + e)
      );
  }
  if (!hashTable[input]) hashTable[input] = localPermutations;
  return localPermutations;
};
const per = permutation("abcd");
console.log(per, iterations);
