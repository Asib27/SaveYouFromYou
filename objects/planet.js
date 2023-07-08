class Planet {

    constructor(pos, vel, r, img, type="") {
        this.pos = pos;
        this.vel = vel;
        this.acc = createVector(0,0);
        this.r = r;
        this.type = type;
        this.img = img;
        this.move = true;
    }

    draw(astronaut) {
        this.handleCollision(astronaut);
        // this.update();
        if (this.img) {
            if (this.type === "earth") {
                image(this.img, this.pos.x - this.r/2 - 10, this.pos.y-this.r/2 - 10, this.r + 20, this.r + 20);
            } else if(this.type === "helper") {

                let x = this.pos.x;
                let y= this.pos.y;

                let resetX = false;
                let resetY = false;

                if (x > CANVAS_WIDTH-this.r/2) {x = CANVAS_WIDTH-this.r/2; resetX = true;}
                if (y > CANVAS_HEIGHT-this.r/2) {y = CANVAS_HEIGHT-this.r/2; resetY = true}
                if (x < this.r/2) {x = this.r/2; resetX = true}
                if (y < this.r/2) {y = this.r/2; resetY = true}
            
                this.pos = createVector(x,y);

                let velx = this.vel.x;
                let vely = this.vel.y;

                if (resetX) velx = 0
                if (resetY) vely = 0
                this.vel = createVector(velx, vely)

                image(this.img, this.pos.x - this.r/2, this.pos.y-this.r/2, this.r, this.r);

            } else {
                image(this.img, this.pos.x - this.r/2, this.pos.y-this.r/2, this.r, this.r);
            }
        }
        noStroke();
        noFill();
        circle(this.pos.x, this.pos.y, this.r);
    }

    update(planets) {

        if(this.type === "helper"){
            let newMouse = createVector(mouseX, mouseY);
            let dispVect = p5.Vector.sub(newMouse, this.pos);
            let mag = p5.Vector.mag(dispVect);
            let disp = dispVect.normalize();


            planets.forEach(otherPlanet => {
                if(otherPlanet.type != "helper" && this.detectPlanetCollison(otherPlanet)) {
                    this.handlePlanetCollision(otherPlanet, newMouse, planets);
                }
            })

            if(mag >= 2 && this.move){
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
                // alert("you lose");
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
            life -= 20;
            if (life <= 0) life = 0;
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


    handlePlanetCollision(planet, newMouse, planets) {

        // console.log("coll");
        
        if(this.type === "helper") {
            
            if(planet.type === "earth") {
                run = false;
                alert("YOU! The destroyer of earth");
            } else if(planet.type === "splitter") {
                //split function
            } else if(planet.type === "increase") {
                this.r += planet.r/3;
                this.removeObjectFromArray(planets, planet);
            } else if(planet.type === "decrease") {
                this.r -= planet.r/3;
                this.removeObjectFromArray(planets, planet);
            } else if(planet.type === "speedup") {
                this.vel += (planet.r*100) ;
                this.removeObjectFromArray(planets, planet);
            }  else if(planet.type === "speedDown") {
                this.vel -= (planet.r);
                this.removeObjectFromArray(planets, planet);
            } else {

                let dispVec = p5.Vector.sub(this.pos, planet.pos);
                let newDisp = dispVec.normalize();

                let collisionX = (this.pos.x * planet.r + planet.pos.x * this.r) / (this.r+ planet.r);
                let collisionY = (this.pos.y * planet.r + planet.pos.y * this.r) / (this.r + planet.r);
                
                 // Calculate the tangent vector
                let tangentVector = createVector(this.pos.y - planet.pos.y, planet.pos.x - this.pos.x);
                tangentVector.normalize();

                // the tangent line point
                let tangentStartX = collisionX - tangentVector.x * 50;
                let tangentStartY = collisionY - tangentVector.y * 50;
                let tangentEndX = collisionX + tangentVector.x * 50;
                let tangentEndY = collisionY + tangentVector.y * 50;
                
                let slope = (tangentEndY - tangentStartY) / (tangentEndX- tangentStartX);
                let yIntercept = tangentStartY- slope * tangentStartX;

                if(this.calculateLineValue(slope, yIntercept, planet.pos)*this.calculateLineValue(slope, yIntercept, newMouse) >= 0) { 
                    this.move=false; 
                } else {
                    this.move=true;
                }
            }

        }
    }

    calculateLineValue(slope, yIntercept, pos) {
        return slope*pos.x + yIntercept - pos.y;
    }

    removeObjectFromArray(objects, objectToRemove) {
        let index = objects.indexOf(objectToRemove); // Find the index of the object in the array
        if (index !== -1) {
          objects.splice(index, 1); // Remove the object from the array
        }
      }
}