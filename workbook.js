function workbook(n, k, arr) {
    var loopback = arr[arr.length - 1];
    // while (loopback != 0) {

    var pageCount = 0;
    var occ = 0;
    for (var i = 0; i < n; i++) {
        var temp = [];
        var count = 1;
        pageCount++;
        var counter = 0;
        for (var j = 0; j < arr[i]; j++) {
            temp.push(count);
            console.log("pageCount", pageCount, temp);
            if (count % k == 0 && j != arr[i]-1) {
                pageCount++;
                counter++;
                if(temp.indexOf(pageCount) != -1){
                    occ++;
                    console.log("----------");
                    
                    console.log(occ);
                    console.log("----------");
                    
                }
                temp = [];

            }
            count++
        }
        if(temp.indexOf(pageCount) != -1){
            occ++;
            console.log("----------");
            
            console.log(occ);
            console.log("----------");
            
        }
        console.log("----------------------");
        console.log("pageCount", pageCount, "j", j, "temp", temp);
        console.log("----------------------");

    }
    return occ;
    // }

}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
