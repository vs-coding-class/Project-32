class Projectile{
    constructor() {
        var options = {
            restitution:0.1,
            density:1.0
        }
        this.body = Bodies.polygon(300,500,6,30,options);
        this.image = loadImage("hexagon.jpg");
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}