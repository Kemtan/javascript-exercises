const reverseString = function(string) {
    let arr = [];
    let result = [];
    
    for(let i = 0; i < string.length; i++){
        let slicedString = string.slice(i, i+1);
        arr.push(slicedString);
    }
    for(let j = arr.length-1; j >= 0; j--){
        result.push(arr[j]);
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
