function sort_object_list_by_field(array, property){

    var swapped;
    do {
        swapped = false;
        for (var index=0; index < array.length-1; index++) {
            if (array[index].property > array[index+1].property) {
                var temp = array[index];
                array[index] = array[index+1];
                array[index+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

var input_array =
    [
        {name: 'John', age:42, gender:'M'},
        {name: 'Jack', age:34, gender:'M'},
        {name: 'Michael',age:40, gender: 'M'},
        {name: 'Kendra',age:48, gender:'F'}
    ];

console.log(sort_object_list_by_field(input_array, age));