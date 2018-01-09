function stringsInStrings(array1, array2){
    var output = [];
    for(var arr1Index = 0; arr1Index < array1.length; arr1Index++){
        for(var arr2Index = 0; arr2Index < array2.length; arr2Index++){
            if(array2[arr2Index].indexOf(array1[arr1Index]) !== -1){
                output.push(arr1Index);
            }
        }
    }
    return output; 
}