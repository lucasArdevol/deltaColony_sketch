//player
let character = 0;
let characterName = ["ThunderBolt", "BlackWidow", "SwordFish", "SpitFire"]
let shipXPos = 180*resolution;
let shipYPos = 240*resolution;
let hit = false;
let shipExplosion = false;

//attributes
let shipSpeed = [3*resolution, 2.5*resolution, 2*resolution, 4*resolution];
let scoreAdd = [100, 50, 200, 150];
let lives = [3, 5, 3, 1];
let livesB = [3, 5, 3, 1];

function objShip(){
  if(!shipExplosion){
    image(ship, shipXPos, shipYPos, ship.width/4*resolution, ship.height*resolution, 21*character, 0, 20, 30);
  shipMove();
  collideShip();
  }
  
    function shipMove(){
    if (keyIsDown(UP_ARROW) || keyIsDown(87)){
      if (shipYPos > 0){
        if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(65) || keyIsDown(68)){
          shipYPos -= shipSpeed[character]/1.5+stage/10;   
        }else
          shipYPos -= shipSpeed[character]+stage/10;
      }
    }
      
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
      if (shipYPos < height-ship.height*resolution){
        if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(65) || keyIsDown(68)){
          shipYPos += shipSpeed[character]/1.5+stage/10;
        }else
          shipYPos += shipSpeed[character]+stage/10;
      }
    }
      
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
      if (shipXPos > 0){
        if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(87) || keyIsDown(83)){
          shipXPos -= shipSpeed[character]/1.5+stage/10;
        }else
          shipXPos -= shipSpeed[character]+stage/10;
      }
    }
      
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
      if (shipXPos < width-ship.width/4*resolution-100*resolution){
        if (keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(87) || keyIsDown(83)){
          shipXPos += shipSpeed[character]/1.5+stage/10;
        }else
          shipXPos += shipSpeed[character]+stage/10;
      }
    }
  }
  
  function collideShip(){
    for (let i = 0; i < enemies.length; i++){
      hit = collideRectRect(enemiesXPos[i]*resolution, enemiesYPos[i]*resolution, enemies[i].width/4*resolution, enemies[i].height/4*resolution, shipXPos, shipYPos, ship.width/4, ship.height);
      if (hit){
        destroyShip();  
      }
    }
  }
  
  function destroyShip(){
    if(!shipExplosion){
      lives[character]--;
      sfxExplosion.play();
      shipExplosion = true;
    }
    if(lives[character] <= 0){
      gameOver();
    }
    
  }
}