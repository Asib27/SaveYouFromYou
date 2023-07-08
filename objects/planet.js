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
        // this.update();
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
            handleResetBtn();
            // TODO: prompt 
        }
        else if(this.type == "helper"){
            astronaut.vel = createVector(0,0);
            astronaut.poisonous += 5;
            
            if(astronaut.poisonous >= 255) {
                run = false;
                alert("you lose");
                handleResetBtn();
                // TODO: prompt
            }
        } else if(this.type == "poisonous"){
            astronaut.vel = createVector(0,0);
            astronaut.poisonous += 5;
            
            if(astronaut.poisonous >= 255) {
                run = false;
                alert("you lose");
                handleResetBtn();
                // TODO: prompt
            }
        } else{
            astronaut.vel.mult(-1);
            astronaut.a = createVector(0,0);
        }
    }

    detectPlanetCollison(planet) {

        let dis = this.pos.dist(planet.pos);
        let minDis = this.r/2 + planet.r/2;

        if(dis <= minDis) return true;
        return false;
    }


    handlePlanetCollision(planet) {

        // console.log("coll");
        
        if(this.type === "helper") {
            
            if(planet.type === "earth") {
                run = false;
                alert("YOU! The destroyer of earth");
            } else if(planet.type === "splitter") {
                //split function
            } else {
                console.log("Should stuck on that direction");
            }

        }

    }
}