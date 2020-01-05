function timeConversion(s) {
   
    if(s[8] === 'A'){
        str = s.slice(0, s.length - 2);
        console.log(str);
    }
    else if(s[8] === 'P'){
        str = s.slice(0, s.length - 2);
        console.log(str);
        var hr = Number(str.slice(0,2))+12;
        hr = hr.toString();
        console.log(hr);
        str = hr.concat(str.substring(2,str.len))

        
        console.log(str);
        
    }

}

console.log(timeConversion('07:05:45PM'));



