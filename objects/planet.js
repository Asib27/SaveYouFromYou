class Planet {

    constructor(pos, vel, r, img, type="") {
        this.pos = pos;
        this.vel = vel;
        this.r = r;
        this.type = type;
        this.img = img;
    }

    draw(astronaut) {
        this.handleCollision(astronaut);
        this.update();
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

    handleCollision(astronaut){
        if( ! astronaut.detectCollision(this) ){
            return ;
        }

        if(this.type === "earth"){
            run =  false;
            alert("you won");
        }
        else if(this.type == "helper"){
            astronaut.vel = createVector(0,0);
            astronaut.poisonous += 5;
            
            if(astronaut.poisonous >= 255) {
                run = false;
                alert("you lose");
            }
        } else if(this.type == "poisonous"){
            astronaut.vel = createVector(0,0);
            astronaut.poisonous += 5;
            
            if(astronaut.poisonous >= 255) {
                run = false;
                alert("you lose");
            }
        } else{
            astronaut.vel.mult(-1);
            astronaut.a = createVector(0,0);
        }
    }
}