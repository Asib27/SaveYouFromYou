const getCurrentLevel = (index) => { 
  const levels = [
  { 
    astronautPos: createVector(50,10),
    planets: [    
    ],
    earthPos: createVector(1000, 400),
    helper: {pos: createVector(300, 500), r: 80 },
  },
  { 
    astronautPos: createVector(100,100),
    planets: [
      {pos: createVector(300, 300), type: "poisonous", r: 80 },
      {pos: createVector(550, 200), type: "", r: 80},  
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(300, 450), r: 80 },
  },
  { 
    astronautPos: createVector(1000,100),
    planets: [
      {pos: createVector(300, 300), type: "poisonous", r: 80},
      {pos: createVector(600, 300), type: "", r: 80},
      {pos: createVector(400, 200), type: "", r: 80},  
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(300, 300), r: 80 },
  },
  { 
    astronautPos: createVector(1000,100),
    planets: [
      {pos: createVector(400, 400), type: "", r: 160},
      {pos: createVector(500, 70), type: "speedup", r: 100},
      {pos: createVector(700, 250), type: "poisonous", r: 80},
    ],
    earthPos: createVector(1000, 500),
    helper: {pos: createVector(350, 50), r: 80 },
  },
 
];

  return levels[index];
}