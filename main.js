canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_array = ["mars.jpg", "nasa_img_1.jfif", "nasa_img_2.jfif", "nasa_img_3.jfif", "nasa_img_4.jfif"];
random_number = Math.floor(Math.random()*5); 
background_image = nasa_array[random_number];
console.log("background_image = " + background_image);
var rover_width = 100;
var rover_height = 90;
var rover_x = 10;
var rover_y = 10;
rover_image = "rover.png";
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;
    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
} 
function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height); 
}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed = '38') {
        up();
        console.log("up");
    }
    if (keyPressed = '41') {
        down();
        console.log("down");
    }
    if (keyPressed = '37') {
        left();
        console.log("left");
    }
    if (keyPressed = '39') {
        right();
        console.log("right");
    }
} 

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}