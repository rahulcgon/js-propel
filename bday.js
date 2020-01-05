function taumBday(b, w, bc, wc, z) {
    // Write your code here
    if ( bc > wc + z ) {
        bCost = b * (wc + z);
        wCost = w * wc;
        return bCost + wCost;
    }
    else if ( wc > bc + z){
        wCost = w * (bc + z);
        bCost = b * bc;
        return bCost + wCost;

    }
    else{
        bCost = b * bc;
        wCost = w * wc;
        return bCost + wCost;
    }

}


console.log(taumBday(7, 7, 4, 2, 1));
