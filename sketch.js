const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;

let astronautImg;
let earthImg;

let planets = [];
let astronaut;
let helper;
let earth;
let planetImg = [];
let randomPos = [];
let loopCount = 0;

let run = true;


function preload() {
  astronautImg = loadImage('./assets/astronaut.png')
  earthImg = loadImage('./assets/earth.png')
  planetImg.push(loadImage('./assets/planet.png'));
  planetImg.push(loadImage('./assets/jupiter.png'));

}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < 100; i++) {
      let pos = createVector(random(width), random(height));
      randomPos.push({pos: pos, opacity: random(255), size: random(5)});
    }

    helper = new Planet(createVector(200, 200), createVector(0,0), 80, planetImg[1]);
    earth = new Planet(createVector(800, 400), createVector(0,0), 90, earthImg);

    planets.push(helper);
    planets.push(new Planet(createVector(100, 100), createVector(0,0), 70, planetImg[0]));
    planets.push(new Planet(createVector(400, 400), createVector(0,0), 70, planetImg[1]));
    planets.push(earth)
    astronaut = new Astronaut(astronautImg, createVector(150, 250), 0.0003);

  }
  
function draw() {
    background(10);

    drawbg();

    helper.pos = createVector(mouseX, mouseY);

    planets.forEach(planet => planet.draw())
    astronaut.draw(planets);

    if (astronaut.detectCollision(earth)) {
      run = false
      console.log("You won");
    }

    if (astronaut.detectCollision(helper)) {
      run = false
      console.log("You lost");
    }

    if (!run) noLoop()
    else loop()
}

function addPlanet(x,y,r) {
  x = random(width-100);
  y = random(height-100);
  r = random(100)+50;

  planets.push(new Planet(createVector(x,y),createVector(0,0), r))
}

function drawbg() {
  // loopCount++;

  // if (loopCount == 10) {
  //   loopCount = 0;
  // } 
  
  randomPos.forEach(star => {

    loopCount++;

    if (loopCount === 10) {loopCount = 0;}

    let fromColor = color(240,240,240, random(255));
    let toColor = color(240,240,240, random(255));
    let interColor = lerpColor(fromColor, toColor, 0.33);
    fill(interColor);
    circle(star.pos.x, star.pos.y, random(5));
  
    

    // if (loopCount == 0) {
    //   star.size = random(5);
    //   star.opacity = random(255);
    // }

    // noStroke();
    // fill(240, 240, 240, star.opacity);
    // circle(star.pos.x, star.pos.y, star.size);
  })
}