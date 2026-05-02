class Bar{
  constructor(x){
    this.x = x;
    this.y = height-20;
    this.w = 80;
    this.h = 10;
  }
  drawBar(){
    fill(0);
    rect(this.x, this.y, this.w, this.h);
  }
  
  hitBar(ball){
   let distY = (this.y - ball.y);
    if (distY <= ball.r && ball.x >this.x && ball.x < this.x + this.w){
      ball.dy = ball.dy * -1;
    }
  }
}