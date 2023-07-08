const getCurrentLevel = (index) => { 
  const levels = [
  { 
    astronautPos: createVector(100,100),
    planets: [
      {pos: createVector(300, 300), type: "Poisonous", r: 80 },
      {pos: createVector(600, 300), type: "", r: 80},  
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(300, 300), r: 80 },
  },
  { 
    astronautPos: createVector(1000,100),
    planets: [
      {pos: createVector(300, 300), type: "Poisonous", r: 80},
      {pos: createVector(600, 300), type: "", r: 80},
      {pos: createVector(400, 200), type: "", r: 80},  
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(300, 300), r: 80 },
  },
  { 
    astronautPos: createVector(400,10),
    planets: [
       
    ],
    earthPos: createVector(900, 400),
    helper: {pos: createVector(300, 300), r: 80 },
  }
];

  return levels[index];
}