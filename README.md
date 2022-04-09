# Self driving car in P5JS (Made by: Bence Káré)
Welcome to my simulation! 
## Below you can find some useful tips:
- You can tweak the simulation in many ways. Check the init.js file!
- You can change the NN structure in the brain.js. Smallest NN-s usually better.
- With the original parameters a finisher car will emerge in the first 10-20 generation in the majority of the cases.
- If you register to this site (https://editor.p5js.org/), you can copy the project and save your changes.


## About the AI:
  - I do not use Neat, only a very simple neural network.
  - The cars evolve based on only selection by fitness and mutation. No crossover used.
  - The best car is always revived into the new generation unchanged.

## Sources:
  - nn library:
    - https://github.com/CodingTrain/Toy-Neural-Network-JS/tree/master/lib
    - Check this video as well, from the creator of this library ;) 
      - https://www.youtube.com/watch?v=c6y21FkaUqw&ab_channel=TheCodingTrain

  - Some other simulation like this:
    - https://www.youtube.com/results?search_query=ai+car+simulator
    - https://www.youtube.com/watch?v=Aut32pR5PQA&ab_channel=SamuelArzt
    - https://www.youtube.com/watch?v=wL7tSgUpy8w&ab_channel=Nebol%27sCoding
    - https://www.youtube.com/watch?v=r428O_CMcpI&ab_channel=CodeBullet
    
## TODO
  - [ ] Kód tisztítás, rendezés. A sok ötlet kipróbálása szétzilálta az eredeti rendszert...
    - [ ] Mindenféle debug ki-be kapcsoló létrehozása
  - [ ] Leírás készítése a használathoz (pl a trackbuilder, különböző gombok stb)
  - [ ] Saját egyszerűsített nn osztályt írni, ami csak arra képes, amire nekem van szükségem.
  - [ ] NN vizualizáció
  - [ ] A korábbi projektekhez hasonlóan chartok létrehozása (fitness progress, finish rate stb.)
  - [ ] A global változókat tedd be egy statikus osztályba, vagy egy normál json fájlba.
  - [ ] UI létrehozása (sim speed, 1-2 globális változó manipulálása)
  - [X] Mivel a P5JS nem képes pixcel perfect ütközés detektálásra, felesleges pixel alapú pályát létrehozni és hozzá pixel alapú ütközés detektálást használni, mert nagyon erőforrás igényes. Sima egyenes alapúra alakítsd át.
  - [ ] Az autó jelenleg a középpontja körül forog nem a kerekeknek megfelelően, mint a python változat. Ezt javítani kell.
  











