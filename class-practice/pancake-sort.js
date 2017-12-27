


//from the index of the counter >> end of array, reverse order of values
//increment the counter by 1

function pancakeSort(array){
    var counter = 0;
    do {
        var largestValue = array[0];
        var flipIndex = array.indexOf(largestValue);
        var flippedArray = [];

        for(var index = 0; index < array.length; index++){
            if(array[index] > largestValue){
                largestValue = array[index];
            }
        }

        flippedArray = array.splice(0, flipIndex);
        flippedArray.concat(array.reverse());

        array = flippedArray.splice(counter,array.length -1);
        array.concat(flippedArray.reverse());

        counter++;

    }
    while(counter < array.length);
}


//sorted counter starts at 0 (the entire array is not sorted)
//find the largest value in array