const value = [20, 5, 10, 40, 15, 25];
const weight = [1, 2, 3, 8, 7, 4];
const sack = 10;

const knapSack = () => {
  let sum = 0;
  let items;
  let iterations = 0;
  const indices = value.map((_, i) => i);
  const calculate = (V, W, I) => {
    iterations++;
    for (let i = 0; i < V.length; i++) {
      const interLeavedV = V.slice(0, i).concat(V.slice(i + 1));
      const interLeavedW = W.slice(0, i).concat(W.slice(i + 1));
      const interLeavedI = I.slice(0, i).concat(I.slice(i + 1));
      const weightSum = interLeavedW.reduce((a, e) => a + e, 0);
      const valueSum = interLeavedV.reduce((a, e) => a + e, 0);
      if (valueSum > sum && weightSum <= sack) {
        sum = valueSum;
        items = interLeavedI;
      }
      calculate(interLeavedV, interLeavedW, interLeavedI);
    }
  };
  calculate(value, weight, indices);
  console.log({ items, iterations });
};

knapSack();
