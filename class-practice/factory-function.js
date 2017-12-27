function bunnyMaker(name) {
    var bunny = {
        name: name,
        food: ['lettuce', 'carrots', 'grapes'],
        currentFoodIndex: 0,
        sound: 'hullo',
        eat: function () {
            console.log(this.name + ' is eating ' + this.food[this.currentFoodIndex]);
        },
        speak: function() {
            console.log(this.name + ' says ' + this.sound);
        },
        setFoodIndex: function(index){
            if(index <= this.food.length){
                this.currentFoodIndex = index;
            } else {
                console.log(this.name + ' does not have that many foods');
            }

        }
    };

    return bunny;
}

var banjo = bunnyMaker('banjo');
var buns = bunnyMaker('buns');

function BunMaker(name) {
    this.name = name;
    this.sound = 'hullo';
    this.food = ['lettuce', 'carrots', 'grapes'];
    this.currentFoodIndex = 0;
    this.speak = function () {
        console.log(this.name + ' says ' + this.sound);
    };
    this.eat = function () {
        console.log(this.name + ' is eating ' + this.food[this.currentFoodIndex]);
    };
    this.setFoodIndex = function (index) {
        if (index <= this.food.length) {
            this.currentFoodIndex = index;
        } else {
            console.log(this.name + ' does not have that many foods');
        }
    };
}

var floof = new BunMaker('floof');
var nubs = new BunMaker('nubs');

function RedPanda(name){
    this.name = name || 'pancake';
    this.activity = 'be adorable';
    this.getName = function(){
        return this.name;
    };
    this.action = function(){
        return this.activity;
    }
}

RedPanda.prototype.changeActivity = function(newActivity){
    return this.activity = newActivity;

};

var pancake = new RedPanda();





















