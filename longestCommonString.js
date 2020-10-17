const combinations = require('./combinations');

const a="AABCDEFG";
const b="ASBGOP";

const [small, large] = a.length>b.length?[b,a]:[a,b];
console.log({small, large});

let bufferA=[];
let bufferB=[];
for(let i=1;i<=small.length;i++){
    let comb = combinations(small, i);
    bufferA = bufferA.concat(...comb);
    comb = combinations(large, i);
    bufferB = bufferB.concat(...comb);
}
for(let i=bufferA.length-1;i>=0;i--){
     if(bufferB.includes(bufferA[i])){
       console.log('Matched: ',  bufferA[i]);
       break;
     }
}
// console.log({bufferA, bufferB})