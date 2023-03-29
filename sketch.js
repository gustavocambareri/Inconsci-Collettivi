let mySound;
function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("fish.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER);

  //   slider = createSlider(0, 255, 100);
  //   slider.position(100, 1005);
  //   slider.style("width", "200px");
  //
}

function draw() {
  textFont("Times");
  textSize(65);
  text("Inconsci Collettivi", width / 2, height / 5);
  point(mouseX, mouseY);
}

function mousePressed() {
  mySound.play();
}
