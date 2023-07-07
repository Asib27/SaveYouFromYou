const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;
let astronautImg;
let earthImg;
let planets = [];

function preload() {
  astronautImg = loadImage('./assets/astronaut.png')
  earthImg = loadImage('./assets/earth.png')
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < 4; i++) 
      addPlanet(0,0,0);
    

  }
  
function draw() {
    background(40);

    image(astronautImg, 100, 100, 80, 80);
    image(earthImg, 900, 300, 80, 80);

    planets.forEach(planet => planet.draw())
}

function addPlanet(x,y,r) {
  x = random(width-100);
  y = random(height-100);
  r = random(100)+50;

  planets.push(new Planet(createVector(x,y),createVector(0,0), r))
}