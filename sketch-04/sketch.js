function setup() {
  createCanvas(500, 500);
  background(241, 51, 122);
}

let taille =1;

function draw() {
  noFill();
  circle(300, 200, taille);
taille = taille + 15;
}
