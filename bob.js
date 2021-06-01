class Bob {
  constructor(x) {
    var y = 500;
    var radius = 40;
    var options = {
      isStatic: false,
      restitution: 1,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;

    World.add(world, this.body);
  }
  display() {
    ellipseMode(RADIUS);

    fill(230, 17, 212);

    circle(this.body.position.x, this.body.position.y, this.radius);
  }
}
