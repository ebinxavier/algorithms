const value = [20, 5, 10, 40, 15, 25, 11];
const weight = [1, 2, 3, 8, 7, 4, 2];
const sack = 10;

const knapSack = () => {
  let sum = 0;
  let items;
  let iterations = 0;
  const indices = value.map((_, i) => i);
  const hashTable={};
  const calculate = (V, W, I) => {
    
    const key = I.join('');
    if(hashTable[key]) return;
    iterations++;
    const weightSum = W.reduce((a, e) => a + e, 0);
    const valueSum = V.reduce((a, e) => a + e, 0);

    if (valueSum > sum && weightSum <= sack) {
      sum = valueSum;
      items = {V,W}
    }
    hashTable[key] = true;
    for (let i = 0; i < V.length; i++) {
      const interLeavedV = V.slice(0, i).concat(V.slice(i + 1));
      const interLeavedW = W.slice(0, i).concat(W.slice(i + 1));
      const interLeavedI = I.slice(0, i).concat(I.slice(i + 1));
      calculate(interLeavedV, interLeavedW, interLeavedI);
    }
  };
  calculate(value, weight, indices);
  console.log({ value: items.V.reduce((a,e)=>a+e,0), iterations });
};

knapSack();
