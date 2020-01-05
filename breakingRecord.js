function breakingRecords(scores) {
    var maxArr = [];
    var minArr = [];
    var max = scores[0];
    var min = scores[0];
    var maxCount = 0;
    var minCount = 0;

    for(var i in scores){
        // console.log(scores[i]);

        if(scores[i] > max){
            console.log(max, scores[i], ">");
            
            max = scores[i];
            maxCount++;
        }
        else if(scores[i] < min){
            console.log(min, scores[i], "<");


            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
