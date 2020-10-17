const isLower = (char) => {
    return char.charCodeAt()>=97 && char.charCodeAt()<=122;
}
const isUpper = (char='') => {
    return char.charCodeAt()>=65 && char.charCodeAt()<=90;
}

function decryptPassword(s) {
    let pswd="";
    for(let i=0;i<s.length;i++){
        if(isLower(s[i]) && isUpper(s[i+1])){
            pswd+=s[i+1]+s[i]+"*";
            i++;
        } else if(!isNaN(s[i])){
            pswd=s[i]+pswd+'0';
        } else pswd+=s[i];
    }
    return pswd;
}

function enPassword(s) {
    let numberIndex=0;
    while(!isNaN(s[numberIndex])){
        numberIndex++;
    }
    const num = s.slice(0,numberIndex);
    let rest = s.slice(numberIndex).split('');
    for(let i=rest.length-1, count=0;i>=0;i--){
        if(rest[i]==='0') {
            rest[i]= num[count++];
        } else if(rest[i]==='*'){
            const t=rest[i-1];
            rest[i-1]=rest[i-2];
            rest[i-2]=t;
        }
    }
    console.log('rest', rest.filter(e=>e!=='*').join(''))
}

// const pswd = decryptPassword('aP1pL5e');
enPassword('51Pa*0Lp*0e')