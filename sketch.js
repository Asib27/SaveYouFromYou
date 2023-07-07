const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;
const p = []

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p.push(new Planet(createVector(width/2, height/2), createVector(1, 1), 100));
}
  
function draw() {
    background(255, 0, 0);


    p.forEach(planet => {
        planet.update()
    })

    p.forEach(planet => {
        planet.draw()
    })
}