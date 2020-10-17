/*
    Input: (String to be processed, No of characters to be there in output)
    Output: List of strings.
    Logic:
        1. Take a Set 'set' which allows only unique values
        2. Let the input string is str and length of combination as 'length'
        3. If the length is the length of str then add it to the set and exit
        4. Find the set of interleaved string eg: 'ABCD'=> ['BCD', 'ACD', ABD', 'ABC']
        5. For each interleaved strings do the same steps from 2 -> 5
        6. Now the set has list of combinations
*/
let iterations=0;

const combinations = (input, length) => {
  const set = new Set();
  const calculate = (str, parentStr = "") => {
    if (str && (!length || str.length === length)) set.add(str);
    if(str.length<=length) return;
    for (let i = 0; i < str.length; i++) {
      iterations++;
      const rest = str.slice(0, i) + str.slice(i + 1);
      calculate(rest, parentStr + rest[i]);
    }
  };
  calculate(input);
  return Array.from(set);
};

// console.log(combinations("ABCDEF", 3));

module.exports = combinations;

