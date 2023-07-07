class Planet {

    constructor(pos, vel, r, img, type="") {
        this.pos = pos;
        this.vel = vel;
        this.acc = createVector(0,0);
        this.r = r;
        this.type = type;
        this.img = img;
    }

    draw(astronaut) {
        this.handleCollision(astronaut);
        this.update();
        if (this.img) {
            if (this.type === "earth") {
                image(this.img, this.pos.x - this.r/2 - 10, this.pos.y-this.r/2 - 10, this.r + 20, this.r + 20);
            } else {
                image(this.img, this.pos.x - this.r/2, this.pos.y-this.r/2, this.r, this.r);
            }
        }
        noStroke();
        noFill();
        circle(this.pos.x, this.pos.y, this.r);
    }

    update() {
        if(this.type === "helper"){
            let newMouse = createVector(mouseX, mouseY);
            let dispVect = newMouse.sub(this.pos);
            let mag = p5.Vector.mag(dispVect);
            let disp = dispVect.normalize();

            if(mag >= 2){
                this.vel = p5.Vector.mult(disp, 2);
            }
            else{
                this.vel = p5.Vector.mult(disp, 0);
            }
            
        }

        this.pos.add( this.vel);
        this.vel.add(this.acc);
    }

    handleCollision(astronaut){
        if( ! astronaut.detectCollision(this) ){
            return ;
        }

        if(this.type === "earth"){
            run =  false;
            alert("you won");
        }
        else if(this.type == "helper"){
            run = false;
            alert("you lose");
        }else{
            astronaut.vel.mult(-1);
            astronaut.a = createVector(0,0);
        }
    }
}