let cols; let rows;
let spacing = 20;
let size = [];
let scl =0.11;



function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  cols = width/spacing;
  rows = height/spacing;
  
}

function draw() {
  background(0);
  
  for (let i=0; i<cols;i++){
    size[i] =[];
    for (let j=0; j<rows; j++){
      noStroke();
      fill(220);
      size[i][j] = (dist(mouseX, mouseY, spacing/2 + i*spacing, spacing/2 + j*spacing))*scl;
    }
  }
  
  for (let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      rect(spacing/2 + i*spacing, spacing/2 + j*spacing, size[i][j], size[i][j]);
    }
  }
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}