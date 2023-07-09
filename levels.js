const getCurrentLevel = (index) => { 
  const levels = [
  { 
    id: 1,
    astronautPos: createVector(50,10),
    planets: [],
    earthPos: createVector(1000, 400),
    helper: {pos: createVector(300, 500), r: 80 },
  },
  { 
    id: 2,
    astronautPos: createVector(100,100),
    planets: [
      {pos: createVector(300, 300), type: "poisonous", r: 80 },
      {pos: createVector(550, 200), type: "", r: 60},  
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(300, 450), r: 80 },
  },
  { 
    id: 3,
    astronautPos: createVector(100,150),
    planets: [
      {pos: createVector(300, 350), type: "poisonous", r: 80},
      {pos: createVector(600, 400), type: "", r: 80},
      {pos: createVector(450, 170), type: "", r: 80},
      {pos: createVector(950, 170), type: "", r: 80},  
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(250, 250), r: 80 },
  },
  {
    id: 4, 
    astronautPos: createVector(1000,100),
    planets: [
      {pos: createVector(400, 400), type: "", r: 120},
      {pos: createVector(550, 360), type: "increase", r: 70},
      {pos: createVector(650, 250), type: "poisonous", r: 40},
    ],
    earthPos: createVector(1000, 500),
    helper: {pos: createVector(450, 50), r: 80 },
  },
  {
    id: 5, 
    astronautPos: createVector(100,150),
    planets: [
      {pos: createVector(200, 150), type: "", r: 20},
      {pos: createVector(300, 50), type: "", r: 40},
      {pos: createVector(800, 300), type: "", r: 50},
      {pos: createVector(300, 360), type: "increase", r: 80},
      {pos: createVector(450, 520), type: "poisonous", r: 40},
      {pos: createVector(450, 280), type: "poisonous", r: 40},
    ],
    earthPos: createVector(1000, 500),
    helper: {pos: createVector(450, 50), r: 80 },
  },
  {
    id: 6, 
    astronautPos: createVector(20,230),
    planets: [
      {pos: createVector(50, 170), type: "poisonous", r: 50},
      {pos: createVector(50, 340), type: "poisonous", r: 50},
      {pos: createVector(120, 350), type: "poisonous", r: 50},
      {pos: createVector(130, 175), type: "poisonous", r: 30},  
      {pos: createVector(200, 150), type: "poisonous", r: 55},
      {pos: createVector(200, 370), type: "poisonous", r: 50},
      {pos: createVector(335, 170), type: "poisonous", r: 50},
      {pos: createVector(330, 440), type: "poisonous", r: 50},

      {pos: createVector(400, 170), type: "poisonous", r: 50},
      {pos: createVector(400, 440), type: "poisonous", r: 50},

      {pos: createVector(480, 190), type: "poisonous", r: 50},

      {pos: createVector(600, 220), type: "", r: 80},
      {pos: createVector(700, 130), type: "", r: 100},

      {pos: createVector(500, 140), type: "decrease", r: 40},
      {pos: createVector(100, 540), type: "increase", r: 65},


    ],
    earthPos: createVector(1000, 530),
    helper: {pos: createVector(300, 80), r: 87 },
  },
  {
    id: 7, 
    astronautPos: createVector(100,250),
    planets: [
      {pos: createVector(200, 150), type: "", r: 60},
      {pos: createVector(300, 50), type: "", r: 70},
      {pos: createVector(800, 300), type: "", r: 90},
      {pos: createVector(300, 500), type: "", r: 40},
      {pos: createVector(200, 400), type: "", r: 50},
      {pos: createVector(300, 300), type: "poisonous", r: 60},
      {pos: createVector(300, 200), type: "", r: 40},
      {pos: createVector(900, 400), type: "poisonous", r: 40},
      {pos: createVector(500, 450), type: "poisonous", r: 80},
      {pos: createVector(600, 250), type: "increase", r: 60},

    ],
    earthPos: createVector(1000, 500),
    helper: {pos: createVector(450, 50), r: 80 },
  },
 
];

  return levels[index];
}