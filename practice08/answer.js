function character_convert(string){
    var output = '';
    for(var index = 0; index < string.length; index ++){
        var charCode = string.charCodeAt(index);
        output += charCode.toString();
    }


    return output;
}

var testString = 'the cat in the hat';

console.log(character_convert(testString));