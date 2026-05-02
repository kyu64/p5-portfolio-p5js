let cols; let rows;
let spacing =10;
let size = [];

function setup() {
  createCanvas(500, 500);
  cols = width/spacing;
  rows = height/spacing;
  for (let i =0; i<cols; i++){
    size[i] = [];
    for (let j=0; j<rows; j++){
    // size[i][j] = (j+1)/rows*spacing;
    // size[i][j] = (i+1)/cols*spacing;
       size[i][j] = (rows -j)/cols*spacing;
    }
  }
  print(size);
}

function draw() {
  background(0);
  for(let i =0; i<cols; i++){
    for (let j=0; j<rows; j++){
      noStroke();
      fill(j/(rows-1)*255);
      ellipse(spacing/2+i*spacing, 
              spacing/2+j*spacing, size[i][j], size[i][j])
    }
  }
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}
