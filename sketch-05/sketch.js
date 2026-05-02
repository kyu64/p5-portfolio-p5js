function setup() {
  createCanvas(500, 500);
  background(223, 17, 25);
}

let taille = 1200;
let taille2 = 900;

function draw() {
  strokeWeight(2)
  circle(250, 500, taille);
  taille = taille * 0.9;
  if(taille < 210){
     taille = false
     }
  

  circle(250,500, taille2);
  taille2 = taille2 * 0.91;
  
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}