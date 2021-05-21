class Stone{
constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':14
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 100;
    this.height = 100;
    World.add(world, this.body);
  }

 display(){
   var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke('black');
    fill('yellow');
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  };
};