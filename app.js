
var body = document.querySelector("body");
var taxiLocationCounter = 1;

body.onkeydown = function(e){
var tl = new TrafficLight(taxiLocationCounter);
    if (e.keyCode === 38){
        tl.makeRed();
    }
    if (e.keyCode === 40){
        tl.makeGreen();
    }
    if (e.keyCode === 16) {
        tl.makeOrange();
    };

 //e.keyCode - will capture the key codes
    var keyCode = e.keyCode;
    var keyName = keyCodeName(keyCode);
    
 // moveForward();
    if (keyName === "forward") {
        if (taxiLocationCounter<9) {
            if (tl.color() === "green") {
                moveForward();
            }    
        }
    };
    if (keyName === "back") {
        if (taxiLocationCounter>1) {
            moveBack();
        };    
    }
    
    var locationClass = createLocationClass(taxiLocationCounter);
    displayMessage(locationClass);
};

// taxi should stop when the traffic light is red.  

function keyCodeName(num) {
    if (num === 39) {
        return "forward";
    }

    else if (num === 37) {
        return "back";
    }

    else if (num === 38) {
        return "up";
    }

    else if (num === 40) {
        return "down";
    }

    else {
        return "";
    };

};

var createLocationClass = function(taxiLocationCounter) {
    if (taxiLocationCounter === 1) {
        return "slot-one-of-nine";
    }

    if (taxiLocationCounter === 2) {
        return "slot-two-of-nine";
    }

    if (taxiLocationCounter === 3) {
        return "slot-three-of-nine";
    }

    if (taxiLocationCounter === 4) {
        return "slot-four-of-nine";
    }

    if (taxiLocationCounter === 5) {
       return "slot-five-of-nine"; 
    }

    if (taxiLocationCounter === 6) {
        return "slot-six-of-nine";
    }

    if (taxiLocationCounter === 7) {
        return "slot-seven-of-nine";
    }

    if (taxiLocationCounter === 8) {
        return "slot-eight-of-nine";
    }
    if (taxiLocationCounter === 9) {
        return "slot-nine-of-nine"; 
   }
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



function TrafficLight(x) {
    var className = createTrafficLightClass(x);
    var trafficLightElement = document.querySelector(className);

     this.makeRed = function(){
       trafficLightElement.classList.remove("lights-go");
       trafficLightElement.classList.remove("lights-slowdown");
       trafficLightElement.classList.add("lights-stop"); 
    };
    this.makeOrange = function(){
        trafficLightElement.classList.remove("lights-stop");
        trafficLightElement.classList.remove("lights-go");
        trafficLightElement.classList.add("lights-slowdown");
    };
    this.makeGreen = function(){  
        trafficLightElement.classList.remove("lights-slowdown");
        trafficLightElement.classList.add("lights-go");
        trafficLightElement.classList.remove("lights-stop"); 
    };    
    this.color = function(){
        if (trafficLightElement.classList.contains("lights-go")){
        return 'green';
        }
        else if (trafficLightElement.classList.contains("lights-slowdown")){
        return 'orange';
        }
        else if(trafficLightElement.classList.contains("lights-stop")){
        return 'red';    
        }
    };
}
 