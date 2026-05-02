class Circle {
  constructor(cx, cy, angle){
    this.angle = angle;
    this.cx = cx;
    this.cy = cy;
  }
  
  display(){
  push (); 
  translate(this.cx, this.cy);
  noFill();
  //ellipse(0, 0, r*2, r*2);
  let c = map(abs(this.angle % TWO_PI), 0, TWO_PI, 0, 255);
  
   noStroke(); 
   fill(c);
  let x = r*cos (this.angle);
  let y = r*sin (this.angle);
 
  //ellipse(x, y, 5, 5);
    arc(x, y, size, size, this.angle, this.angle + PI/2);
    pop();
  }
  
  move(speed){
    this.angle -= speed;
  }
  
}