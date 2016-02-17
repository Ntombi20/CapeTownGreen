function keyCodeName(num) {
    if (num === 39) {
    	return "forward";
    }

    else if (num === 37) {
    	return "back";
    }

    else if (num === 38) {
    	return "right";
    }

    else if (num === 40) {
    	return "left";
    }

    else if (num === 52||32||64) {
    	return "";
    };

};

 var body = document.querySelector("body");

 body.onkeydown = function(e){
//     //e.keyCode - will capture the key codes
//     //e.keyCode('click', function() {
    var keyCode = e.keyCode;
    var keyName = keyCodeName(keyCode);
    var locationClass =createLocactionClass(taxiLocationCounter)
    displayMessage(locationClass);
    //});
 };

var taxiLocationCounter = 1;
for (var i = 0; i < taxiLocationCounter.length; i++) {
    taxiLocationCounter[i];
};

var createLocactionClass = function(number) {
    if (number === 1) {
        return "slot-one-of-nine";
    }

    if (number === 5) {
       return "slot-five-of-nine"; 
    }

    if (number === 9) {
       return "slot-nine-of-nine"; 
    };
};