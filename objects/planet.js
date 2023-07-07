class Planet {

    constructor(pos, vel, r) {
        this.pos = pos;
        this.vel = vel;
        this.r = r;
    }

    draw() {
        stroke(1);
        fill(0,255,0);
        circle(this.pos.x, this.pos.y, this.r);
    }

    update() {
        this.pos.add( this.vel);
    }


}