function setup() {
  createCanvas(3000, 3000);
  background(220);
}

function draw() {

  let nyt = map(mouseX,0,100,100,100);
  let fps = framerate();

  circle(mouseX,mouseY,nyt);
  console.log(mouseX);



  if(mouseIsPressed){
    fill(random(0,255),random(0,255),random(0,255));
  }
}
