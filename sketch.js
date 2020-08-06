function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  let s = second();
  let m = minute();
  let h = hour();



  strokeWeight(8);
  stroke("red");
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("green");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke("blue");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("red");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("green");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("blue");
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

    fill(255);
    noStroke();
    rotate(90);
    textStyle(BOLD);
    textSize(14);
    fill("green")
text('Current hour: ' + h, -190, 180);
fill("blue")
text('Current minute: ' + m, -70, 180);
fill("red")
text('Current second: ' + s, 70, 180);
}