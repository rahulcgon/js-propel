function cutTheSticks(arr) {
    arr = arr.sort();
    var n = arr.length;
    for (var i = 0; i < n; i = i + c) {
        console.log(n-i)
        c = 0;
        for (var j = i; j < n; j++) {
            var a = arr[j] - arr[i];
            if (a == 0) c += 1;
        }
    }

}

console.log(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]));
