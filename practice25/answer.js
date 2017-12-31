function add_arrays(firstArray, needleArray){
    var output = [];
    for(var index = 0; index < firstArray.length; index++){
        var add = firstArray[index] + needleArray[index];
        output.push(add);
    }
    return output;
}

var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4];

console.log(add_arrays(first_array, second_array));