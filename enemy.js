//enemy
let enemiesXPos = [-90,-90, -90 ,-90 ,-90];
let enemiesYPos = [0, 0, 0, 0, 0];
let enemiesSpeed = [5, 4, 3, 4.5, 5.5];

function objEnemy(){
  for (let i = 0; i < enemies.length; i++){
    image(enemies[i], enemiesXPos[i]*resolution, enemiesYPos[i]*resolution, enemies[i].width/2*resolution, enemies[i].height/2*resolution);   
  }
  
  enemyMove();
  
  function enemyMove(){
    for (let i = 0; i < enemies.length; i++){
      enemiesXPos[i] -= enemiesSpeed[i]+ (stage/10)*resolution;
    }
    
    for (let i = 0; i < enemies.length; i++){
      if (outOfFrame(enemiesXPos[i])){
        enemiesXPos[i] = 400;
        enemiesYPos[i] = Math.floor(Math.random() *150+15);
      }
    } 
  }
  
  function outOfFrame(enemyX){
    return enemyX < 0-enemy.width*resolution;
  }
}
