var image_tracker = 0;

function change() {
    if (image_tracker == 0) {
        document.getElementById("image_data").src = 'images/Couple.png';
    } else if (image_tracker == 1) {
        document.getElementById("image_data").src = "images/Travel.png";
    } else if (image_tracker == 2) {
        document.getElementById("image_data").src = "images/Ski.png";
    } else if (image_tracker == 3) {
        document.getElementById("image_data").src = "images/MeAndBarGreece.png";
    } else if (image_tracker == 4) {
        document.getElementById("image_data").src = "images/Jet.png";
    } else if (image_tracker == 5) {
        document.getElementById("image_data").src = "images/Didi.jpg";
    } else if (image_tracker == 6) {
        document.getElementById("image_data").src = "images/Dancing.jpg";
    } else if (image_tracker == 7) {
        document.getElementById("image_data").src = "images/BeerPong.png";
    }
    image_tracker = (image_tracker + 1) % 8;
}
var timer = setInterval('change();', 2500);