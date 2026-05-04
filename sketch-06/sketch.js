
let c1; let c2; let c3;
let blocks = []; let num = 40;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  
  c1 = color('#617EF1');
  c2 = color('#56ABAA');
  c3 = color('#E2E0D4');
  
  let x = width/num;
  let h =height/num;
  
  for (let i=0; i<num; i++) {
    blocks[i] = new Block(c1, c2, c3 ,x*i ,h*i ,h)
  }
}

function draw() {
  background(220);
for (let i=0; i<num; i++) {
    blocks[i].display();
    blocks[i].move();
  }
}


function keyPressed(){
  if( key =="s"){save("drawing.png");}}
