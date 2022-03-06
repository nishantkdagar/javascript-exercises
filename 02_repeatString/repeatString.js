const repeatString = function(word, num) {
    let fword = '';
    if( num<0){
        fword = 'ERROR';
    }
    
    {
        for(let i=0; i<num; i++){
            fword += word;
        }
        return fword;
    }

};

// Do not edit below this line
module.exports = repeatString;
