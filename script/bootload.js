document.body.onkeydown = function(event) {



    event = event || window.event;

    var keycode = event.keyCode,
        car = document.getElementById('car'),
    	lastClassName = car.className;
    	car.className = "car-transition";

    if (keycode == 40) {
    	if( lastClassName == "car-transition car-to-left"  || lastClassName == "car-to-left"){

    		car.classList.add("car-to-bottom-reverse");	
    		setTimeout(function(){
    			car.className = ""
    			car.classList.add("car-to-bottom");

    		}, 1000);

    	}else{
    		car.classList.add("car-to-bottom");	
    	}
        
    } else if (keycode == 39) {
    	
    	car.classList.add("car-to-right");	
        
    } else if (keycode == 37) {

    	if( lastClassName == "car-transition car-to-bottom" || lastClassName == "car-to-bottom"){
    		car.classList.add("car-to-final");
    		setTimeout(function(){
    			car.className = ""
    			car.classList.add("car-to-left");
    			
    		}, 1000);
    	}else{
        	car.classList.add("car-to-left");
        }

    } else if (keycode == 38) {

        car.classList.add("car-to-top");
        
    }

};
