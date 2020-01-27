//space variable
 var space,spaceImg

//sun variable
 var sun,sunImg;

//planet variable
 var mercury,mercuryImg;
 var venus,venusImg;
 var earth,earthImg;
 var mars,marsImg;
 var jupiter,jupiterImg;
 var saturn,saturnImg;
 var uranus,uranusImg;
 var neptune,neptuneImg;

function setup() {
  createCanvas(1900,1000);

  //space Img preload
   spaceImg = loadImage("space.png");

  //sun Img preloads
   sunImg = loadImage("sun.png");

  //planet Img preloads
   mercuryImg = loadImage("mercury.png");
   venusImg = loadImage("venus.png");
   earthImg = loadImage("earth.png");
   marsImg = loadImage("mars.png");
   jupiterImg = loadImage("jupiter.png");
   saturnImg = loadImage("saturn.png");
   uranusImg = loadImage("uranus.png");
   neptuneImg = loadImage("neptune.png");

  //space 
   space = createSprite(950,500,10,10);
   space.scale = 7;
   space.addImage(spaceImg);

  //sun
   sun = createSprite(950,500,10,10);
   sun.scale = 2;
   sun.addImage(sunImg);
  //mercury
   mercury = createSprite(900,800,10,10);
   mercury.scale = 1/285 * 2;
   mercury.addImage(mercuryImg);
  //venus
   venus = createSprite(1000,850,10,10);
   venus.scale = 1/115 * 2;
   venus.addImage(venusImg);
  //earth
   earth = createSprite(1200,500,10,10);
   earth.scale = 1/109 * 2;
   earth.addImage(earthImg);
  //mars
   mars = createSprite(900,230,10,10);
   mars.scale = 1/205 * 2;
   mars.addImage(marsImg);
  //jupiter
   jupiter = createSprite(1280,230,10,10);
   jupiter.scale = 1/10 * 2;
   jupiter.addImage(jupiterImg);
  //saturn
   saturn = createSprite(300,230,10,10);
   saturn.scale = 1/12 * 3;
   saturn.addImage(saturnImg);
  //uranus
   uranus = createSprite(1650,600,10,10);
   uranus.scale = 1/27 * 7;
   uranus.addImage(uranusImg);
  //neptune
   neptune = createSprite(150,900,10,10);
   neptune.scale = 1/28 * 5;
   neptune.addImage(neptuneImg);
  
}

function draw() {
  background(0,0,0);
 // sun.debug = true 
  
  if(keyDown("space")){
   if(World.frameCount % 1 ===0){
    sun.scale = sun.scale + 0.005;
   }
  }

  Touching();

  drawSprites();
}

