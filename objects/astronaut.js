class Astronaut {

    maxVel = 2.5

    constructor(img, pos, k) {
        this.img = img;
        this.height = 50;
        this.width = 25;
        this.pos = pos;
        this.resultant = createVector(0,0);
        this.k = k;
        this.vel = createVector(0,0);
        this.a = createVector(0,0);
    }

    draw(planets) {

        this.drawTrace(planets);
        let x = this.pos.x;
        let y= this.pos.y;
        let resetX = false;
        let resetY = false;
        if (x > CANVAS_WIDTH-this.width) {x = CANVAS_WIDTH-this.width; resetX = true;}
        if (y > CANVAS_HEIGHT-this.height) {y = CANVAS_HEIGHT-this.height; resetY = true}
        if (x < 0) {x = 0; resetX = true}
        if (y < 0) {y = 0; resetY = true}
        this.pos = createVector(x,y);
        let velx = this.vel.x;
        let vely = this.vel.y;

        if (resetX) velx = 0
        if (resetY) vely = 0
        this.vel = createVector(velx, vely)

        stroke(220)
        image(this.img, x, y, this.width, this.height);

        this.pos.add(this.vel);

        this.vel.add(p5.Vector.div(this.resultant,100));

        let vx = this.vel.x;
        let vy = this.vel.y;
        if (vx > this.maxVel) vx = this.maxVel;
        if (vy > this.maxVel) vy = this.maxVel;
        if (vx < -this.maxVel) vx = -this.maxVel;
        if (vy < -this.maxVel) vy = -this.maxVel;
        this.vel = createVector(vx, vy);

        // console.log(p5.Vector.angleBetween())
    }

    detectCollision(planet) {
        // TODO: better collision detect: https://editor.p5js.org/mrbombmusic/sketches/l95s9fZJY
        return dist(this.center().x, this.center().y, planet.pos.x, planet.pos.y) < planet.r;
    } 

    drawTrace(planets) {
        this.resultant = createVector(0,0);
        planets.forEach(planet => {
            let force = this.evaluateForce(planet);
            if (p5.Vector.mag(force) > 0.6) {
                this.resultant.add(force);
                stroke(200)
                drawingContext.setLineDash([3,6]);
                line(planet.pos.x, planet.pos.y, this.center().x, this.center().y);
            }
        });

        // const endPoint = p5.Vector.add(this.center(), p5.Vector.mult(this.resultant, 800));
        // stroke(200)
        // drawingContext.setLineDash([3,6]);
        // // line(endPoint.x, endPoint.y, this.center().x, this.center().y);
    }

    center() {
        return createVector(this.pos.x + this.width/2, this.pos.y + this.height/2);
    }

    evaluateForce(planet) {
        const d = dist(this.center().x, this.center().y, planet.pos.x, planet.pos.y);
        const force = this.k * (planet.r * planet.r * planet.r) / (d * d);
        const displacement = p5.Vector.sub(planet.pos, this.center());
        const forceVector = p5.Vector.mult(displacement, force);

        return forceVector;
    }

}