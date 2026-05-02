function setup() {
  createCanvas(500, 500);
  background(223, 17, 25);
}

let taille = 1000;

function draw() {
  noStroke()
  circle(250, 250, taille);
  taille = taille * 0.9;
  fill(random (255))
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}