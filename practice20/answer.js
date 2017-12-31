function randomize_list(array){
    var output = [];
    var z = array.length;
    while(z > 0){
        var index = Math.floor(Math.random() * array.length);
        output.push(array[index]);
        array.splice(index,1);
        z--;
    }
    return output;
}

var input_array = [5,3,2,5,1];
console.log(randomize_list(input_array));