function arrayFactors(array){
    var output = {};
    for(var index = 0; index < array.length; index ++){
        var keys = Object.keys(output);
        if(keys.indexOf(array[index]) === -1){
            var newKey = [];

            for(var factor = 0; factor < array.length; factor++){
                if(array[factor] !== array[index] && newKey.indexOf(array[factor]) === -1 && array[index] % array[factor] === 0){
                    newKey.push(array[factor]);
                }
            }

            output[array[index]] = newKey;
        }
    }

    return output;
}

console.log(arrayFactors([4,2,8,6,3,9]));