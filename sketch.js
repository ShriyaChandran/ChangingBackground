
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(255,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r = World.mouseX;
  // change the value of Green based on the mouse movement about the X axis
  g = World.mouseY;
  // change the value of Blue based on the mouse movement about the X axis
  b = World.mouseX;
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,g.b);
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,mouseY,20,15);
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}