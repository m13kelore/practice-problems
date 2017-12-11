function distributeFood(foodSupply, inputArray){
    var newArray = new Array(inputArray.length).fill(0);

    for (var index = foodSupply; index > 0; index--){
        var hungriest = Math.max.apply(null, inputArray);
        var position = inputArray.indexOf(hungriest);

        inputArray[position]--;
        newArray[position]++;
    }

    return {'currentHungerLevels': inputArray,
    'foodDispersed': newArray};
}

console.log('Test: ' + distributeFood(5, [2, 5, 3, 1, 4, 2]));