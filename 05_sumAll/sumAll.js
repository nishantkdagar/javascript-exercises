const sumAll = function(from, to) {
    let sum =0;

    if(from <0 || typeof to === 'string' || typeof to === 'object'){
        return 'ERROR';
    
    }
    else if(from>to){

        let big = from;
        let small = to;
        for(let i = small; i <= big; i++){
            sum += i;
        }
        
    }
    else{
        for(let i = from; i <= to; i++){
            sum += i;
        }
    }
    
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
