// last 

function last(k) {
    clock = [1, 2, 3, 4, 5, 6, 7];
    arr = clock;
    // console.log(arr, "hello");
    var count = 0;
    for (var i = 0; i < 15; i++) {
        // console.log(arr[i]);
        count++;
        console.log(count);
        if(count == 3){
            count = 0;
            var x = arr.splice(i , 1);
            i = i-1;
            console.log("splice",arr );
            console.log("i = ", i);
            console.log("x = ",x);
            

            
            
        }
        // if (i == 3 ) {
        //     arr.splice(i - 1, 1);
        //     // i = -1;
        //     // count++;
        // // }
        // if (i == arr.length) {
        //     i = -1;
        // }

    }
    // console.log(arr);
    
    
}

console.log(last(3));
