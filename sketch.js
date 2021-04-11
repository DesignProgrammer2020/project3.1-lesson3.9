let array = []; //empty array for mouseX and mouseY
//let backgroundColor = 255;

function setup() {
  //fullscreen canvas
  createCanvas(windowWidth, windowHeight);
  background(20, 120, 255);
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    //backgroundColor -= 5;
    //background(20, 120, 255);
    //line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    //line(mouseX, mouseY);
    //array.push([mouseX, mouseY]); //to push mouseX and mouseY into array
    // beginShape(); //draw image in curvilinear lines
    // for (let i = 0; i < array.length; i++) {
    //   curveVertex(array[i][0], array[i][1]);
    // }
    // endShape();
  }
}

function keyTyped() {
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  }
  // else if (key === 'd') { //display image
  //   background(255);
  //   beginShape(); //draw image in curvilinear lines
  //   for (let i = 0; i < array.length; i++) {
  //     curveVertex(array[i][0], array[i][1]);
  //   }
  //   endShape();
  // }
  return false;
}

function mousePressed() {
  array = [];
  //background(0, 40, 255)

}
