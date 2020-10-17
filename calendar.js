const a=[["09:00","10:30"],["12:00","13:00"],["16:00","18:00"]];
const boundA=["09:00", "20:00"];
const b=[["10:00","11:30"],["12:30","14:30"],["14:30","15:00"],["16:00","17:00"]];
const boundB=["10:00", "18:30"];
const slot=30;
// op=> [11:30, 12:00], [15:00, 16:00], [18:00, 18:30]

const combinedSet=[];

const convert = (time) => {
    return Number(time.slice(0,2))+ Number(time.slice(3))/100;
}
const diff = (timeB, timeA) => {
    const hoursToMin = (Number(timeB.slice(0,2)) - Number(timeA.slice(0,2)))*60;
    const minutes = Number(timeB.slice(3)) - Number(timeA.slice(3))
    return hoursToMin+minutes;
}

const start = convert(boundA[0]) < convert(boundB[0])?boundB[0]:boundA[0];
const end = convert(boundA[1]) > convert(boundB[1])?boundB[1]:boundA[1];

const mergeSlots = () => {
    const mergedSlots=[];
    const availableSlots=[];
    let k=0;
    for(let i=0,j=0;i<a.length || j<b.length;k++){
        const itemA = a[i] ? convert(a[i][0]):Infinity;
        const itemB = b[j] ? convert(b[j][0]): Infinity;
        const previousSlot = mergedSlots[k-1];
        if(itemA<itemB){
            if(k===0 && diff(a[i][0], start) >= slot){
                availableSlots.push([start, a[i][0]])
            }
            if(previousSlot && diff(a[i][0], previousSlot[1]) >= slot)
                availableSlots.push([previousSlot[1],a[i][0]])
            mergedSlots[k]=a[i++];
        } else {
            if(k===0 && diff(b[j][0], start) >= slot){
                availableSlots.push([start, b[j][0]])
            }
            if(previousSlot && diff(b[j][0], previousSlot[1]) >= slot)
                availableSlots.push([previousSlot[1],b[j][0]])
            mergedSlots[k]=b[j++];
        }
    }
    if(diff(end, mergedSlots[k-1][1])>= slot){
        availableSlots.push([mergedSlots[k-1][1], end])
    }
    console.log('availableSlots', availableSlots)
}
mergeSlots();

