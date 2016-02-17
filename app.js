function keyCodeName(num) {
    if (num === 39) {
    	return "right";
    }

    else if (num === 37) {
    	return "left";
    }

    else if (num === 38) {
    	return "forward";
    }

    else if (num === 40) {
    	return "back";
    }

    else if (num === 52||32||64) {
    	return "";
    };

};
var body = document.querySelector("body");

body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
   // e.keyCode('click', function() {
    var keyCode = e.keyCode;
    var keyName = keyCodeName(keyCode);
    displayMessage(keyName);
   // });
};
