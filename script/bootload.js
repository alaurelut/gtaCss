document.body.onkeydown = function(event) {

    event = event || window.event;

    var keycode = event.keyCode,
        keycode = event.keyCode,
        car = document.getElementById('car');

    car.className = "";

    if (keycode == 40) {

        car.classList.add("car-to-bottom");
    } else if (keycode == 39) {
        car.classList.add("car-to-right");
    } else if (keycode == 37) {
        car.classList.add("car-to-left");
    } else if (keycode == 38) {
        car.classList.add("car-to-top");
    }

};
