let cols; let rows; let size = 25;
let colors;

let x; let y; let scl = 4;

function setup() {
  createCanvas(500, 500);
  cols = width/size;
  rows = height/size;
  ellipseMode(CORNER);
  
 colors =["#abcd5e", "#14976b", "#2b67af", "#62b6de",
          "#f589a3","#ef562f","#fc8405","#f9d531",]; 
}

function draw() {
  background(255);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      let index = j*rows +i;
      fill(colors[index % colors.length]);
      let x = i*size;
      let y = j*size;
      ellipse(x, y, size, size);
    }
  }
  
  x = mouseX;
  y = mouseY;
  copy(x, y, 
       size, size,
      x, y,
      size*scl, size*scl);
  noFill();
  strokeWeight(5);
  rect(x, y,
      size*scl, size*scl);
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}