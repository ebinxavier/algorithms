const code = ">987v>.v\nv456<  :\n>321 ^ _@";
const stack = [];
const table = code.split("\n").map((row) => row.split(""));

let count = 0;
let dir = { x: 1, y: 0 };
let pos = { x: 0, y: 0 };

const getDir = (char) => {
  let newDir;
  switch (char) {
    case ">":
      newDir = { x: 1, y: 0 };
      break;
    case "<":
      newDir = { x: -1, y: 0 };
      break;
    case "v":
      newDir = { x: 0, y: 1 };
      break;
    case "^":
      newDir = { x: 0, y: -1 };
      break;
    default:
      newDir = false;
  }
  //   if (table[pos.x + newDir.x][pos.y + newDir.y] === undefined) // default
  //     newDir = { x: 1, y: 0 };
  return newDir;
};

const arithmeticOperation = (char) => {
  if ("*/+-".includes(char)) {
    const a = stack.pop();
    const b = stack.pop();
    let res;
    switch (char) {
      case "+":
        res = b + a;
        break;
      case "-":
        res = b - a;
        break;
      case "/":
        res = a ? b / a : 0;
        break;
      case "*":
        res = b * a;
        break;
    }
    stack.push(res);
  }
};

const hasElement = (x, y) => {
  try {
    return !!table[y][x];
  } catch (e) {
    return false;
  }
};

while (count < 1000) {
  count++; // Safety
  debugger;
  const currentChar = table[pos.y][pos.x];

  //   Number Check
  const currentNumber = Number(currentChar);
  if (!isNaN(currentNumber)) {
    stack.push(currentNumber);
  }

  //   Arithmetic Operations

  // Change Dir if any
  const newDir = getDir(currentChar);
  if (newDir) {
    dir = newDir;
  }
  if (!hasElement(pos.x + dir.x, pos.y + dir.y)) {
    dir = { x: 1, y: 0 };
  }
  pos.x += dir.x;
  pos.y += dir.y;
}
console.log(stack);
