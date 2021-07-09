canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


function up()
{
if(rover_y >=0)
{
rover_y -= 10;
console.log("when up arrow is pressed = " + rover_x + " - " +rover_y);
uploadBackground();
uploadwater();
uploadrover();
}
}

function down()
{
if(rover_y <=500)
{
rover_y += 10;
console.log("when down arrow is pressed = " + rover_x + " - " +rover_y);
uploadBackground();
uploadwater();
uploadrover();
}
}

function left()
{
if(rover_x >=0)
{
rover_x -= 10;
console.log("when left arrow is pressed = " + rover_x + " - " +rover_y);
uploadBackground();
uploadwater();
uploadrover();
}
}

function right()
{
if(rover_x <=700)
{
rover_x += 10;
console.log("when right arrow is pressed = " + rover_x + " - " +rover_y);
uploadBackground();
uploadwater();
uploadrover();
}
}


