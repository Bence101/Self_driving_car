
currentGen = 0;

function setup() {
  simCanvas = createCanvas(canvasSize[0], canvasSize[1]);
  simCanvas.parent("p5jsContainer")
  track = new Track(createVector(0, 0), trackData);
  START_POINT = createVector(start[0], start[1]);
  population = new Population(popSize, 200);
  trackBuilder = new TrackBuilder();
  HUD = createHUD(simCanvas);
}


function draw() {
  background(220);
  SIMSPEED = HUD.simSpeedController.slider.value();
  mutationRate = HUD.mutationRateController.slider.value();
  popSize = HUD.popSizeController.slider.value();


  for (let i = 0; i < SIMSPEED; i++) {

    // updating population (e.g. moving agents based on their genes)
    population.update(track);
    
    // checking for the end of a population
      
    if ((!population.hasAlive) || (population.age>=maxSimLength)) {
      population.calculateFitnesses();
      print(population.maxScore, currentGen, population.maxFitness)
      addData(fitnessChart, currentGen, [population.maxFitness, population.avgFitness])
      addData(finisherChart, currentGen, [population.finisherRate])
      addData(avgSpeedChart, currentGen, [population.bestAvgSpeed])


      // creating new population from the previous generation
      population = new Population(popSize, 200, population);
            
      currentGen++;
      if (currentGen>=GENERATIONS) {
        // currently this ends the simulation (with error)
          // but later a restart button will handle this
        print('The simulation finished!')
        noLoop();
        break;
      }      
    }
    
    // this freezes the loop until desired generation is not reached
    if (currentGen<SKIPNGEN) {
      i-=1;
    }
  }
  
  track.display();
  population.display();
  trackBuilder.display();
}


