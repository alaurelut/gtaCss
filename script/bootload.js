

document.body.onkeydown = function(event) {

	event = event || window.event;

 	var keycode = event.keyCode,
  	keycode = event.keyCode,
  	car = document.getElementById("car");
	
	if (keycode == 40){<!-- aller en bas -->
		car.className = "car-to-bottom";
	}else if (keycode == 39){<!-- aller a droite -->
		car.className = "car-to-right";
	}else if (keycode == 37){ <!-- aller a gauche -->
		car.className = "car-to-left";
	}else if (keycode == 38){ <!-- aller en haut -->
		car.className = "car-to-top";
	}

};