class Track {
  constructor(pos, trackData) {
    this.pos = pos;
    // this.trackImg = trackPicture.get();
    this.loadTrack(trackData);
    this.wallColor = [90, 90, 250, 255];
    this.checkpointColor = [90, 250, 90, 255]
    this.checkpoints = [];
    this.walls = [];
    this.createCheckpoints();
    this.createWalls();
  }

  loadTrack(trackData) {
    let loadedNodeListOfList = trackData.nodeListOfList;
    this.nodeListOfList = [[], [], []];
    
    for (let i = 0; i < loadedNodeListOfList.length; i += 1) {
      let loadedNodeList = loadedNodeListOfList[i];
      for (let j = 0; j < loadedNodeList.length; j += 1) {
        let loadedNode = loadedNodeList[j];
        let pos = createVector(loadedNode[0], loadedNode[1])
        this.nodeListOfList[i].push(pos)
      }
    }
  }

  update() {
    print('Not implemented!')
  }


  checkCollision(startPos, endPos) {
    for (let wall of this.walls) {
      let intersectionPos = Utils.segmentIntersection(wall[0],
                                                      wall[1],
                                                      startPos, 
                                                      endPos)
      if (intersectionPos) {
        return intersectionPos
      }
    }
  }

  // checkCollision(vector) {
  //   // original point base collision test
  //   let point = p5.Vector.sub(vector, this.pos)
  //   let pickedColor = this.trackImg.get(point.x, point.y)
  //   if (arrayEquals(pickedColor, this.trackColor)) {
  //     return 0;
  //   }
  //   if (arrayEquals(pickedColor, this.wallColor)) {
  //     return 1;
  //   }
  // }


  createWalls() {
    for (let wallSegmentCounter = 0; wallSegmentCounter < 2; wallSegmentCounter += 1) { 
      let checkpointList = this.nodeListOfList[wallSegmentCounter];
      for (let i = 0; i < checkpointList.length-1; i += 1) {
        let start = checkpointList[i];
        let end = checkpointList[i+1];
        let wall = [start.copy(), end.copy()]
        this.walls.push(wall);
      }
      let wall = [checkpointList[0].copy(), checkpointList[checkpointList.length-1].copy()]
      this.walls.push(wall);
    }
  }


  createCheckpoints() {
    let checkpointList = this.nodeListOfList[2];
    checkpointList = checkpointList.slice(CHECKPOINTSHIFTAMOUNT*2, checkpointList.length).concat(checkpointList.slice(0, CHECKPOINTSHIFTAMOUNT*2))

    let num = 1;
    for (let i = 0; i < checkpointList.length-1; i += 2) {
      let start = checkpointList[i];
      let end = checkpointList[i+1];
      let checkpoint = {'num': num,
                        'start': createVector(start.x, start.y),
                        'end': createVector(end.x, end.y),
                        'center': createVector((start.x + end.x) / 2, (start.y + end.y) / 2)
                       }
      this.checkpoints.push(checkpoint);
      num++;
    }
  }
  
  display() {
    // image(this.trackImg, this.pos.x, this.pos.y);
    


    push();
    stroke(this.wallColor);
    strokeWeight(5);
    for (let wall of this.walls) {
      line(wall[0].x, wall[0].y, 
        wall[1].x, wall[1].y)
    }
    pop();

    push();
    for (let checkpoint of this.checkpoints) {
      stroke(this.checkpointColor);
      strokeWeight(5);
      line(checkpoint.start.x, checkpoint.start.y, 
           checkpoint.end.x, checkpoint.end.y)
      stroke(0);
      fill(0)
      strokeWeight(2);
      text(checkpoint.num, checkpoint.start.x, checkpoint.start.y)
    }
    pop();
  }
}





function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}