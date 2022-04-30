// fitness
let slownessPenalty = 0.2;
let fastnessReward = 10;


// genetic settings
let mutationRate = 0.1; // with 0.2 value a finisher car will emerge in 10-20 gen, after that it will speed up
let popSize = 20; // 10-nél több sajnos jelenleg nagyon lassú


// sim settings
let SKIPNGEN = 0; // You can skip even 100 gen, but it could take a while. Try skip only 10-20 gen as it only takes 2-5 min. Warning, if the browser window is not in the foreground, the calculation will stop!
let SIMSPEED = 1; // speeds up simulation (unfortunately the simulation currently too calculatin heavy to take effect), use skipgen instead as that skips the drawing step
let showParentText = 1; // show ancestor on car


// you should not change values below this row without studying the codes

// car settings
let carWidth = 40;
let carHeight = 20;
let carMinSpeed = 0.8; // no reverse or stop
let carDirectSteeringSpeed = 0.1;
let carDirectSpeedChangeMagnitude = 0.1;
let carMaxSpeed = 6;

// fail safes - 
let GENERATIONS = 1000; // it prevents from running forever
let maxSimLength = 3000; // it kills the population if lasts too long (e.g. stucked)

// map settings
let start = [470, 100] // if you would like to use other map, or start from elsewhere
let STARTANGLE = 0.0; // if you change the start pos, correct it as well


// if needed you can shift the checkpoints (the cars must cross checkpoints in a given order)
let CHECKPOINTSHIFTAMOUNT = 3;

// global variables
let canvasSize = [800, 600]
let population;
let carPicture;
let testText;
let track;
let trackPicture;
let START_POINT;
let trackBuilder;
let HUD;

// user inputs
// window.doubleClicked = (e) => trackBuilder.doubleClicked();
window.mousePressed = (e) => trackBuilder.mousePressed();
window.keyPressed = (e) => (trackBuilder.keyPressed())



function preload() {
  // preload() runs once
  carPicture = loadImage('assets/redcar.png');
  trackPicture = loadImage('assets/track_1.png');
  trackData = loadJSON('assets/track_1.json')
}
