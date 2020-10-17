const list = ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"];
const number = "3662277";
// op => bar, cap, car, emo, foo, foobar
const getDigit = (char) => {
  const fourLetterDigits = [7, 9];
  const ascii = char.charCodeAt() - 'a'.charCodeAt();
  for (let i = 0, digit = 2; i < 26; i += 3, digit++) {
    if (fourLetterDigits.includes(digit)) i++;
    if (ascii >= i && ascii < i + 3) return digit;
  }
};
const mappedList = list.filter((item) =>{
  const convertedItem= item.split('').map((char) => getDigit(char)).join('');
  return number.includes(convertedItem);
});
console.log(mappedList);
