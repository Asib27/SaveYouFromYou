const getCurrentLevel = (index) => { 
  const levels = [
    { 
      astronautPos: createVector(400,10),
      planets: [
         
      ],
      earthPos: createVector(900, 400),
      helper: {pos: createVector(300, 300), r: 80 },
    },
    { 
      astronautPos: createVector(100,100),
      planets: [
        {pos: createVector(300, 300), type: "poisonous", r: 80 },
        {pos: createVector(600, 300), type: "", r: 80},  
      ],
      earthPos: createVector(900, 400),
      helper: {pos: createVector(300, 300), r: 80 },
    },
    { 
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
];

  return levels[index];
}