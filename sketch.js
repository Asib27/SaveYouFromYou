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

let run = false;
let currentLevel = 0;
let newMenu = true;
let pauseMenu = false;
let level;

const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const continueBtn = document.getElementById('continueBtn');


const menu = document.getElementById('menu');
const pauseMenuBox = document.getElementById('pauseMenu');
const levelBox = document.getElementById('levelBox');
const pauseResetMenu = document.getElementById('pauseReset');

const lvl1Btn = document.getElementById('lvl1');
const lvl2Btn = document.getElementById('lvl2');
const lvl3Btn = document.getElementById('lvl3');
const lvl4Btn = document.getElementById('lvl4');
const lvl5Btn = document.getElementById('lvl5');
const lvl6Btn = document.getElementById('lvl6');
const lvl7Btn = document.getElementById('lvl7');
const lvl8Btn = document.getElementById('lvl8');

lvl1Btn.addEventListener('click', () => { currentLevel = 1; startGame(); });
lvl2Btn.addEventListener('click', () => { currentLevel = 2; startGame(); });
lvl3Btn.addEventListener('click', () => { currentLevel = 3; startGame(); });
lvl4Btn.addEventListener('click', () => { currentLevel = 4; startGame(); });
lvl5Btn.addEventListener('click', () => { currentLevel = 5; startGame(); });
lvl6Btn.addEventListener('click', () => { currentLevel = 6; startGame(); });
lvl7Btn.addEventListener('click', () => { currentLevel = 7; startGame(); });
lvl8Btn.addEventListener('click', () => { currentLevel = 8; startGame(); });

pauseBtn.addEventListener('click', () => {
  pauseMenu = true;
  menu.style.display = 'flex';
  levelBox.style.display = 'none';
  pauseMenuBox.style.display = 'flex';
  run = false;
  pauseResetMenu.style.display = 'none';
});

resetBtn.addEventListener('click', () => {
  handleResetBtn();
});

continueBtn.addEventListener('click', () => {
  run = true;
  menu.style.display = 'none';
  pauseResetMenu.style.display = 'flex';
  draw();
})

function handleResetBtn() {
  menu.style.display = 'flex';
  pauseMenuBox.style.display = 'none';
  levelBox.style.display = 'flex';
  run = false;
  pauseResetMenu.style.display = 'none';
}


function startGame() {
  level = getCurrentLevel(currentLevel-1);
  startNewLevel();
  pauseResetMenu.style.display = 'flex';
  run = true;
  menu.style.display = 'none';
  draw();
}


function preload() {
  astronautImg = loadImage('./assets/astronaut.png')
  earthImg = loadImage('./assets/earth.png')
  planetImg.push(loadImage('./assets/planet1.png'));
  planetImg.push(loadImage('./assets/planet2.png'));
  planetImg.push(loadImage('./assets/planet3.png'));

}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < 100; i++) {
      let pos = createVector(random(width), random(height));
      randomPos.push({pos: pos, opacity: random(255), size: random(5)});
    }

    helper = new Planet(createVector(400, 400), createVector(0,0), 80, planetImg[2], "helper");
    earth = new Planet(createVector(800, 400), createVector(0,0), 80, earthImg, "earth");

    planets.push(helper);
    planets.push(new Planet(createVector(100, 100), createVector(0,0), 70, planetImg[0]));
    planets.push(new Planet(createVector(400, 400), createVector(0,0), 70, planetImg[1], "poisonous"));
    planets.push(earth)
    astronaut = new Astronaut(astronautImg, createVector(150, 450), 0.0003);

    noLoop();

  }

function startNewLevel() {

  console.log(level);

  planets = [];

  helper = new Planet(level.helper.pos, createVector(0,0), level.helper.r, planetImg[2], "helper");
  earth = new Planet(level.earthPos, createVector(0,0), 80, earthImg, "earth");

  planets.push(helper);
  level.planets.forEach(planet => {
    let randomIndex =Math.floor(random(3))
    planets.push(new Planet(planet.pos, createVector(0,0), planet.r, planetImg[randomIndex], planet.type));
  })
  planets.push(earth)

  // console.log(planets);
  astronaut = new Astronaut(astronautImg, level.astronautPos, 0.0003);
}
  
function draw() {

    background(10);

    drawbg();

    // helper.pos = createVector(mouseX, mouseY);

    if (astronaut.poisonous === 0) {
      astronaut.drawTrace(planets);
    }
    planets.forEach(planet => {
      console.log(planet.pos)
      planet.draw(astronaut)
    })
    if (astronaut.poisonous === 0) {
      helper.update();
    }
    astronaut.draw();


    if(run){
      loop();
    } else {
      noLoop();
    }
}

function drawbg() {
  
  randomPos.forEach(star => {

    loopCount++;

    if (loopCount === 10) {loopCount = 0;}

    let fromColor = color(240,240,240, random(240));
    let toColor = color(240,240,240, random(240));
    let interColor = lerpColor(fromColor, toColor, 0.33);
    fill(interColor);
    stroke(interColor);
    strokeWeight(1);
    circle(star.pos.x, star.pos.y, random(3));
  
    strokeWeight(6);
    stroke(80, 80, 120, 200);
    noFill()
    drawingContext.setLineDash([5, 10, 30, 10]);
    rect(0,0, width, height);
  })
}