function search_array(haystack, needle){
    var output = [];
    for(var index = 0; index < needle.length; index++){
        if(haystack.indexOf(needle[index]) !== -1){
            output.push(needle[index]);
        }
    }
    return output;
}

var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];
console.log(search_array(haystack,needle));