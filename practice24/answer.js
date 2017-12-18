function matrix_add(arr1, arr2){
    var output = [];
    for(var index = 0; index < arr1.length; index++){
        var arr1_holder = arr1[index];
        var arr2_holder = arr2[index];
        var output_holder = [];
        for(var inner = 0; inner < arr1_holder.length; inner++){
            var sum =
            output_holder.push(arr1_holder[inner] + arr2_holder[inner]);
        }
        output.push(output_holder);
    }
    return output;
}

var array1 = [[1,2,3], [3,4,5], [6,7,8]];
var array2 = [[1,2,3], [1,2,3], [1,2,3]];

console.log(matrix_add(array1, array2));