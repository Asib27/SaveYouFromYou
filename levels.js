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
    helper: {pos: createVector(300, 300), r: 80 },
  },
  {
    id: 4, 
    astronautPos: createVector(1000,100),
    planets: [
      {pos: createVector(400, 400), type: "", r: 120},
      {pos: createVector(550, 360), type: "increase", r: 40},
      {pos: createVector(650, 250), type: "poisonous", r: 40},
    ],
    earthPos: createVector(1000, 500),
    helper: {pos: createVector(450, 50), r: 50 },
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
    astronautPos: createVector(20,200),
    planets: [
      {pos: createVector(50, 130), type: "poisonous", r: 50},
      {pos: createVector(50, 300), type: "poisonous", r: 50},
      {pos: createVector(120, 310), type: "poisonous", r: 50},
      {pos: createVector(130, 125), type: "poisonous", r: 30},  
      {pos: createVector(200, 100), type: "poisonous", r: 55},
      {pos: createVector(200, 330), type: "poisonous", r: 50},
      {pos: createVector(335, 130), type: "poisonous", r: 50},
      {pos: createVector(330, 400), type: "poisonous", r: 50},

      {pos: createVector(400, 130), type: "poisonous", r: 50},
      {pos: createVector(400, 400), type: "poisonous", r: 50},

      {pos: createVector(480, 150), type: "poisonous", r: 50},

      {pos: createVector(600, 180), type: "", r: 80},
      {pos: createVector(700, 90), type: "", r: 100},



     

      {pos: createVector(500, 100), type: "decrease", r: 40},
      {pos: createVector(100, 500), type: "increase", r: 10},


    ],
    earthPos: createVector(1000, 500),
    helper: {pos: createVector(300, 50), r: 87 },
  },
 
];

  return levels[index];
}