class Boy {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage('boy.png');
     
    }
     display(){
       var pos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image,82,10,255,350);
      pop();
    }
  }