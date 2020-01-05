function test(n) {
    var sum = 0;
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (let i = 0; i < 2 ** n; i++) {
        for (var j = 0; j < n; j++) {
            if(i & (1 << j) > 0){
                console.log(arr[j])
            }

        }
        console.log("-----");
        console.log("sum = ",sum);
        console.log("-----");

        
    }

    return sum;
}

console.log(test(3));
