class towerBlock{
  constructor(x,y) {
    var options = {
      restitution:0.8,
      friction:1.0,
      density:1.0
    }
    this.body = Bodies.rectangle(x,y,20,30,options);
    this.width = 20;
    this.height = 30;
    this.image = loadImage("rectImage.png");
    this.Visibility = 255;
    World.add(world,this.body);
  }

  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      fill(204,233,246);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }

  score(){
    if(this.Visibility < 0 && this.Visibility > -105){
      score++;
    }
  }
}