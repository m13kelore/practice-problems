function reverseCapitalize(string){
    var newString = "";

    for(var index = 0; index < string.length; index++){
        if(string.charCodeAt(string[stringIndex]) >= 65 && string.charCodeAt(string[stringIndex]) < 91){
            newString.push(string[index].toLowerCase());
        } else if (string.charCodeAt(string[stringIndex]) >= 97 && string.charCodeAt(string[stringIndex]) < 123){
            newString.push(string[index].toUpperCase());
        }
    }

    return newString;
}

console.log('Test 1: ' + reverseCapitalize('Hello There'));