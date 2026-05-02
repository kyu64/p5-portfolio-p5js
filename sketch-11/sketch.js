
let bricks =[];
let cols = 10; let rows = 3; let size = 50;
let ball;
let bar;

function setup() {
  createCanvas(500, 500);
  for (let i=0; i<cols; i++){
    bricks[i] = [];
    for (let j=0; j<rows;j++){
      bricks[i][j] = new Brick(i*size, j*size, size, size);
    }
  } 
  ball = new Ball(width/2, 250, 5);
  bar = new Bar(mouseX);
}

function draw() {
  background(220);
  bar.x = mouseX;
  
  for ( let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      if (bricks[i][j].val == 0){
      bricks[i][j].drawBrick();
      bricks[i][j].collided(ball);    
      }

    }
  }
  ball.moveBall();
  ball.checkBoundaries();
  ball.drawBall();
  
  bar.hitBar(ball);
  bar.drawBar();
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}




 