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

    else {
    	return "";
    };

};

var body = document.querySelector("body");

body.onkeydown = function(e){
//     //e.keyCode - will capture the key codes
    var keyCode = e.keyCode;
    var keyName = keyCodeName(keyCode);
    var locationClass = createLocationClass(taxiLocationCounter);
    displayMessage(locationClass);
    
 // moveForward();
    if (keyName === "forward") {
        moveForward();
    }
    else if (keyName === "back") {
        moveBack();
    }
    else{
        return "";
    }
};  


 var taxiLocationCounter = 1;
// //var counter = counter++;
    for (var i = 1; i < taxiLocationCounter.length; i++) {
        if (keyCodeName === 'forward') {
            taxiLocationCounter = taxiLocationCounter+1;
        }
        else{
            taxiLocationCounter = taxiLocationCounter-1;
        }
    }; 

var createLocationClass = function(number) {
    if (number === 1) {
        return "slot-one-of-nine";
    }

    if (number === 2) {
        return "slot-two-of-nine";
    }

    if (number === 3) {
        return "slot-three-of-nine";
    }

    if (number === 4) {
        return "slot-four-of-nine";
    }

    if (number === 5) {
       return "slot-five-of-nine"; 
    }

    if (number === 6) {
        return "slot-six-of-nine";
    }

    if (number === 7) {
        return "slot-seven-of-nine";
    }

    if (number === 8) {
        return "slot-eight-of-nine";
    }
    if (number === 9) {
       return "slot-nine-of-nine"; 
    };
};

function moveForward(){
    var currentLocation = createLocationClass(taxiLocationCounter);
    taxiLocationCounter++;
    var newLocation = createLocationClass(taxiLocationCounter);
    moveTaxi(currentLocation, newLocation);
};

function moveBack(){
    var currentLocation = createLocationClass(taxiLocationCounter);
    taxiLocationCounter = taxiLocationCounter - 1;
    var newLocation = createLocationClass(taxiLocationCounter);
    console.log("currentLocation: " + currentLocation);
    console.log("newLocation: " + newLocation);
    console.log("taxiLocationCounter: " + taxiLocationCounter);
    moveTaxi(currentLocation, newLocation);
};

var createTrafficLightClass = function(number) {
    if (number === 1) {
        return ".one-of-nine";
    }

    if (number === 2) {
        return ".two-of-nine";
    }

    if (number === 3) {
        return ".three-of-nine";
    }

    if (number === 4) {
        return ".four-of-nine";
    }

    if (number === 5) {
       return ".five-of-nine"; 
    }

    if (number === 6) {
        return ".six-of-nine";
    }

    if (number === 7) {
        return ".seven-of-nine";
    }

    if (number === 8) {
        return ".eight-of-nine";
    }
    if (number === 9) {
       return ".nine-of-nine"; 
    };
};
