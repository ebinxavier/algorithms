const combinations = require('./combinations');

/*
    Input: (String to be processed, No of characters to be there in output)
    Output: List of strings.
    Logic:
        1. Take a Set 'set' which allows only unique values
        2. Find out combinations of given input string as 'com'
        3. Take for each string in com as str and length of combination as 'length'
        4. If the length of str is 2 then add both combinations (eg: 'AB'->['AB','BA']) to the set and return
        5. If the length of str is 1 then add it to the set and return
        6. Find the set of interleaved string eg: 'ABCD'=> ['BCD', 'ACD', ABD', 'ABC']
        7. For each interleaved strings do the same steps from 4 -> 7
        8. Now the set has list of permutations
*/

const permutations = (input, length) => {
  const com = combinations(input, length);
  const set = new Set();
  const calculate = (str, parentStr = "") => {
    if (str.length === 2) {
      set.add(parentStr + str);
      set.add(parentStr + str[1] + str[0]);
      return;
    } else if(str.length===1){
        set.add(str);
        return;
    }
    for (let i = 0; i < str.length; i++) {
      const rest = str.slice(0, i) + str.slice(i + 1);
      calculate(rest, parentStr + str[i]);
    }
  };
  com.forEach(e=>calculate(e));
  return Array.from(set);
};
// console.log(permutation("ABCDEFG", 2).length);

module.exports = permutations;
