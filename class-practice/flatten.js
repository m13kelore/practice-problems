var array = [1, [2], [3,[[4]]], [5,6]];

function flatten(array){
    var output = [];

    while(array.length > 0){
        for(var index = 0; index < array.length; index++){
            if(Array.isArray(array[index])){
                var splitArray = splitArray(array[index]);
                array.push(splitArray);
                array.splice(index, 1);

            }else{
                output.push(array[index]);
                array.splice(index, 1);
            }
        }
    }

    return output;

}

function splitArray(array){
    var holder = [];

    for(var j = 0;  j < array.length; j++){
        holder.push(array[j]);
    }

    return holder;
}

console.log('Test: ' + flatten(array));