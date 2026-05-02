function setup() {
  createCanvas(600, 600);
  background(241, 51, 122);
}

let taille =1;

function draw() {
  noFill();
  circle(300, 200, taille);
taille = taille + 15;
}