function diagonalDifference(arr) {
    // Write your code here
    // console.log(arr.length);
    let num1 = 0;
    let num2 = 0;
    let n = arr.length;
    for(var i = 0; i < n; i++){
        num1 += arr[i][i]
        num2 += arr[i][n-i-1]
    }

    // console.log(num1,num2);
    
    
    return Math.abs(num1 - num2);
    

}


array = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
console.log(diagonalDifference(array));
