function buildTower(input){
    var output = [];
    for(var row = 1; row <= input; row++){
        var stars = starFunction(row);
        var spaces = spaceFunction(input,row);
        output.push(spaces+stars+spaces);
    }
    return output;
}

function starFunction(row){
    var stars_string = '';
    for (var star = row * 2 - 1; star > 0; star--){
        stars_string += '*';
    }
    return stars_string;
}

function spaceFunction(input,row){
    var spaces_string = '';
    for(var spaces = input - row; spaces > 0; spaces--){
        spaces_string += ' ';
    }
    return spaces_string;
}

console.log(buildTower(4));