
const makeHash = (str) => {
    const hash = {};
    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) hash[str[i]] = 1;
        else hash[str[i]]++;
    }
    return hash;
}

function stringAnagram(dictionary, query) {
    // Write your code here
    const hashDs = dictionary.map(item => {
        return makeHash(item);
    })
    const result=[];
    query.forEach((q, index) => {
        result[index]=0;
        const hashQ = makeHash(q);
        return hashDs.forEach(d=>{
            const qKeys = Object.keys(hashQ)
            const dKeys = Object.keys(d);

            if(qKeys.length !== dKeys.length){
               return false 
            } else {
                const matched = !qKeys.some(key=>{
                    if(hashQ[key] !== d[key]) {
                        return true
                    }
                })
                // console.log({qKeys, d, hashQ, matched})
                if(matched){
                    result[index]++;
                }
            }
        })
    })
    return result;
}

const res = stringAnagram(['abc','acb', 'abc'], ['a', 'asda']);
console.log(res)