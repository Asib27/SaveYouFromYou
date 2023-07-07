class Planet {

    constructor(pos, vel, r, img) {
        this.pos = pos;
        this.vel = vel;
        this.r = r;
        this.img = img;
    }

    draw() {
        if (this.img) {
            image(this.img, this.pos.x - this.r/2, this.pos.y-this.r/2, this.r, this.r); 
        }
        noStroke();
        noFill();
        circle(this.pos.x, this.pos.y, this.r);
    }

    update() {
        this.pos.add( this.vel);
    }


}