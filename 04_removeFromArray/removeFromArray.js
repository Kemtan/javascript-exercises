const removeFromArray = function(arr, ...rest) {
    for(let i = 0; i <= rest.length; i++){
        const index = arr.indexOf(rest[i]);

        if (index > - 1){
            arr.splice(index, 1);
        }
    }
    return arr;

    //return arr.filter(val => !rest.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
