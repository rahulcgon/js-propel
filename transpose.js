function transposeMatrix(s) {
    var bigArr = [];
    s = s.split(' ');
    var ab = s.map(i => i.length);
    // console.log(ab);
    var max = Math.max(...ab);

    for (var i = 0; i < max; i++) {
        for (var j = 0; j < s.length; j++) {
            if (s[j][i] == undefined) {
                arr.push(' ');
            }
            else {
                arr.push(s[j][i]);
                // console.log(s[j][i]);

            }
        }
        bigArr.push(arr);
    }
    return bigArr;
}
let str = 'Bangalore Pune Mumbai';
console.log(transposeMatrix(str));
