function zigzagName(n, s) {
    let emptyArray = createEmptyArray(n, s.length);
    let ids = createIds(n);
    // console.log(ids)
    for (let i = 0; i < s.length; i++) {
        let jId = ids[i % ids.length];
        //console.log(ids[i % ids.length])
        emptyArray[jId][i] = s[i];
    }
    return emptyArray
}

function createEmptyArray(n1, n2) {
    let bigArray = [];
    for (let i = 0; i < n1; i++) {
        let small = [];
        for (let j = 0; j < n2; j++) {
            small.push('');
        }
        bigArray.push(small)
    }
    // console.log(bigArray);

    return bigArray;
}
function createIds(num) {
    let ids = [];
    for (let i = 0; i < num; i++) {
        ids.push(i);
        // console.log(ids)
    }
    for (let j = 0; j < num - 2; j++) {
        ids.push(ids[num - j - 2])
        // console.log(ids)
    }
    console.log(ids);
    return ids
}
let name = 'Rahul';
console.log(zigzagName(3, name))