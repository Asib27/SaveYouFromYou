const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;

let astronautImg;
let earthImg;

let planets = [];
let astronaut;
let helper;
let earth;

let run = true;


function preload() {
  astronautImg = loadImage('./assets/astronaut.png')
  earthImg = loadImage('./assets/earth.png')
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    helper = new Planet(createVector(200, 200), createVector(0,0), 80, "helper");
    earth = new Planet(createVector(800, 400), createVector(0,0), 90, "earth");

    planets.push(helper);
    planets.push(new Planet(createVector(100, 100), createVector(0,0), 70));
    planets.push(new Planet(createVector(400, 400), createVector(0,0), 70));
    planets.push(earth)
    astronaut = new Astronaut(astronautImg, createVector(150, 250), 0.0003);

  }
  
function draw() {
    background(40);

    helper.pos = createVector(mouseX, mouseY);

    planets.forEach(planet => planet.draw(astronaut))
    astronaut.draw(planets);


}

function addPlanet(x,y,r) {
  x = random(width-100);
  y = random(height-100);
  r = random(100)+50;

  planets.push(new Planet(createVector(x,y),createVector(0,0), r))
}