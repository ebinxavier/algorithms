const numWays = (n, ways) => {
    let count=0;
    const calculate = (step=0) => {
        if(step === n){
            count++;
            return;
        } else if(step>n) return;
        ways.forEach(offset=>{
            calculate(step+offset)
        })
    }
    calculate();
    return count;
}
const ways=[5, 1];
console.log(numWays(10, ways))