 
let circle =[];
let cols; let rows; let size = 10;
let r = size/2;

let k = 20;


function setup() {
  createCanvas(500, 500);
  cols = width/size;
  rows = height/size;
  
  for (let i=0; i<cols; i++) {
    circle[i] = [];
    for(let j=0; j<rows; j++) {
      let x = size/2 + i*size;
      let y = size/2 + j*size;
      let d = dist(x, y, width/2, height/2);
      let angle = d /k;
    circle[i][j] = new Circle(x,y, angle);
    }
  }
}

function draw() {
  background(220);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++){
      circle[i][j].display();
      circle[i][j].move(0.05);
    }  
  }
}