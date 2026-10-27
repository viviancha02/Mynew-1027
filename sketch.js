let ball;


function setup() {
  createCanvas(400, 400);
  ball = new Walker();
}

function draw() {
  background(220);
  ball.move();
  ball.show();
}