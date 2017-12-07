//Basic version of 99 bottles of beer
//Modified by M. Eric Carr
//from prior verison foudn on this site
//(modified to correct "1 bottle" grammar)
for(var i=100; i>0; i--){
    var print = i + 'bottle';
    if(i !== 1){
        bottles();
    } else{
        bottle();
    }

}

function bottles(){
    print += 's of beer on the wall, ' + i + 'bottles of beer. Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall';
}

function bottle(){
    print += 'of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.'
}