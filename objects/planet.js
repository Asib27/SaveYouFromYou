class Planet {

    constructor(pos, vel, r, type="") {
        this.pos = pos;
        this.vel = vel;
        this.r = r;
        this.type = type;
    }

    draw(astronaut) {
        this.handleCollision(astronaut);
        this.update();
        stroke(1);
        fill(0,255,0);
        circle(this.pos.x, this.pos.y, this.r);
    }

    update() {
        this.pos.add( this.vel);
    }

    handleCollision(astronaut){
        if( ! astronaut.detectCollision(this) ){
            return ;
        }

        if(this.type === "earth"){
            alert("you won");
        }
        else if(this.type == "helper"){
            alert("you lose");
        }else{
            astronaut.vel.mult(-1);
            astronaut.a = createVector(0,0);
        }
    }
}