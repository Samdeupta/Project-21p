function bounceOff(){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }

  function Touching(){
    if(sun.collide(mercury)){
      mercury.destroy();
    }
    if(sun.collide(venus)){
      mercury.destroy();
    }
    if(sun.collide(mercury)){
      venus.destroy();
    }
    if(sun.collide(earth)){
      earth.destroy();
    }
    if(sun.collide(mars)){
      mars.destroy();
    }
    if(sun.collide(jupiter)){
      jupiter.destroy();
    }
    if(sun.collide(saturn)){
      saturn.destroy();
    }
    if(sun.collide(uranus)){
      uranus.destroy();
    }
    if(sun.collide(neptune)){
      neptune.destroy();
    }
  }