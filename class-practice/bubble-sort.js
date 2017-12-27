function isSubset(para1, para2){
    if (para2.length > para1.length){
        return false;
    }else{
        for(var index = 0; index < para2.length; index++){
            if(para1.indexOf(para2[index]) === -1){
                return false;
            }
        }
        return true;
    }
}

var set1 = ['twelve', 'nine', 'five', 'six', 'eight', 'eleven'];
var set2 = ['six', 'eight', 'five', 'ten'];
var set3 = ['five', 'six', 'eleven', 'eight'];


function bubbleSort(array){
    for(var current = 0; current < array.length; current++){
        var currentIndex = array[current];
        var temp;
        if(currentIndex > array[current + 1]){
            temp = array[current + 1];
            array[current + 1] = currentIndex;
            array[current] = temp;
        }
    }
}

console.log(bubbleSort(set1));