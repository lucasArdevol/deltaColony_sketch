//game
let resolution = 2;
let stage = 1;
let score = 0;
let newLife = 0;
let frame = 0;
let airplaneFrame = 0;
let control = false;

function setup() {
  createCanvas(480*resolution, 270*resolution);
  if(frame == 0){
    musicTitle.loop();
  }else if(frame == 1){
    musicMenu.loop();
  }else{
    musicStage.loop();
  }
}

function draw() {
  createCanvas(480*resolution, 270*resolution);
  if (keyIsPressed === false) {
    control = true;
  }
  
  if(frame == 0){
    titleScreen();    
  }else if(frame == 1){
    characterSelect();
  }else if(frame == 2){
    objBackground(); 
    objShip();
    objEnemy();
    hud();
    gameGoal();
    
      if (shipExplosion){
      explosionAnim();
    }
    
  }else{
    image(bgGameOver, 0, 0, width, height);
    textSize(22*resolution);
    textAlign(CENTER);
    fill(color(255));
    stroke(0);
    strokeWeight(2.5*resolution);
    text("GAME OVER", width/2, 85*resolution);
    textSize(12*resolution);
    textAlign(CENTER);
    fill(color(255));
    text("YOUR SCORE: "+score, width/2,115*resolution);
    text("PRESS ENTER OR SPACE TO TRY AGAIN", width/2, 215*resolution);
    text("PRESS ESC TO RETURN", width/2, 235*resolution);
    
    if(control){
      if (keyIsDown(27)){
        musicTitle.loop();
        musicGameOver.stop();
        frame = 0;
        control = false;
        score = 0;
      }

      if (keyIsDown(13) || keyIsDown(32)){
        sfxMenu.play();
        musicStage.loop();
        musicGameOver.stop();
        frame = 2;
        control = false;
        score = 0;
      }
    }
  }  
}

function titleScreen(){
  image(bgTitle, 0, 0, width, height);
  image(airplaneTitle, width/2-(airplaneTitle.width/3*resolution)/2 , 70*resolution, airplaneTitle.width/3*resolution, airplaneTitle.height*resolution,airplaneFrame*244 ,0 ,244, 127);
  image(logo, width/2-(logo.width*resolution)/2, 10*resolution, logo.width*resolution, logo.height*resolution);
  textSize(12*resolution);
  textAlign(CENTER);
  fill(color(255));
  stroke(0);
  strokeWeight(2.5*resolution);
  text("PRESS ENTER OR SPACE TO PLAY", width/2, 215*resolution);
  textSize(10*resolution);
  textAlign(RIGHT);
  fill(color(255));
  text("VALOS 2023", width-5*resolution, 265*resolution);
  textSize(10*resolution);
  textAlign(LEFT);
  fill(color(255));
  text("Resolution: ", 5*resolution, 255*resolution);
  text("Press 1 to 1x, Press 2 to 2x, Press 3 to 3x", 5*resolution, 265*resolution);
  if(airplaneFrame < 2){
    airplaneFrame++;
  }else{
    airplaneFrame = 0;
  }
  
  if (keyIsDown(13) || keyIsDown(32)){
    sfxSelect.play();
    musicTitle.stop();
    musicMenu.loop();
    frame = 1;
    control = false;
  }
  
  if (keyIsDown(49)){
    resolution = 1;
    resolutionCor();
  }
  if (keyIsDown(50)){
    resolution = 2;
    resolutionCor();
  }
  if (keyIsDown(51)){
    resolution = 3;
    resolutionCor();
  }
  
  function resolutionCor(){
    bgYPos = -3800*resolution;
    bgLoop = -3800*resolution;
    shipXPos = 180*resolution;
    shipYPos = 240*resolution;
    shipSpeed = [3*resolution, 2.5*resolution, 2*resolution, 4*resolution];
  }
}

function characterSelect(){
  image(bgTitle, 0, 0, width, height);
  image(portrait, width/2-(portrait.width*resolution)/4, 50*resolution, 640/2*resolution, 223/2*resolution, 0, 0, 640, 223);
  
  noFill();
  stroke('magenta');
  strokeWeight(4*resolution);
  rect(width/2-(portrait.width*resolution)/4+(character*80*resolution), 50*resolution, 80*resolution, 112*resolution);
  
  fill(0);
  noStroke();
  rect(width/2-(portrait.width*resolution)/4, 170*resolution, 640/2*resolution, 80*resolution);
  
  textSize(10*resolution);
  textAlign(LEFT);
  fill(color(255));
  text(characterName[character], width/2-(portrait.width*resolution)/4+55*resolution, 190*resolution);
  text("LIVES: "+lives[character], width/2-(portrait.width*resolution)/4+55*resolution, 210*resolution);
  text("SPEED: "+shipSpeed[character]/resolution, width/2-(portrait.width*resolution)/4+55*resolution, 220*resolution);
  text("SCORE: +"+scoreAdd[character], width/2-(portrait.width*resolution)/4+55*resolution, 230*resolution);
  
  image(ship, width/2+(portrait.width*resolution)/4-75*resolution, 190*resolution, ship.width/4*resolution, ship.height*resolution, 21*character, 0, 20, 30);
  
  
  if(control){
    if (keyIsDown(39) || keyIsDown(68)){
      sfxMenu.play();
      control = false;
      character++;
    }
    
    if (keyIsDown(37) || keyIsDown(65)){
      sfxMenu.play();
      control = false;
      character--;
    }
    
    if (keyIsDown(27)){
      musicTitle.loop();
      musicMenu.stop();
      frame = 0;
      control = false;
    }
    
    if (keyIsDown(13) || keyIsDown(32)){
      sfxMenu.play();
      musicStage.loop();
      musicMenu.stop();
      frame = 2;
      control = false;
    }
  }
  
  if(character>3){
    character = 0;
  }else if (character<0){
    character = 3;
  }
  
}

function hud(){
  fill(color(0));
  rect(width-100*resolution, 0, 100*resolution, height);
  
  stageShow();
  scoreShow();
  livesShow();
  
  function stageShow(){
    textSize(10*resolution);
    textAlign(LEFT);
    fill(color(255));
    text("STAGE", width-90*resolution, 100*resolution);
    textSize(10*resolution);
    textAlign(RIGHT);
    fill(color(255));
    text(stage, width-10*resolution, 110*resolution);
  }

  function scoreShow(){
    textSize(10*resolution);
    textAlign(LEFT);
    fill(color(255));
    text("SCORE", width-90*resolution, 140*resolution);
    textSize(10*resolution);
    textAlign(RIGHT);
    fill(color(255));
    text(score, width-10*resolution, 150*resolution);
  }
  
  function livesShow(){
    textSize(10*resolution);
    textAlign(LEFT);
    fill(color(255));
    text("LIVES", width-50*resolution, 245*resolution);
    textSize(10*resolution);
    textAlign(RIGHT);
    fill(color(255));
    text("x " + lives[character], width-10*resolution, 255*resolution);
    image(portrait, width-90*resolution, 220*resolution, 64/2*resolution, 72/2*resolution, 64*character, 224, 64, 72);
  }
}

function gameGoal(){
  if(shipYPos < 15*resolution){
    stage++;
    newLife++;
    score += scoreAdd[character];
    resetPos();
    sfxScore.play();
  }
  if(newLife >= 10){
    lives[character]++;
    newLife = 0;
    sfxLife.play();
  }
}

function resetPos(){
    shipXPos = 180*resolution;
    shipYPos = 240*resolution;
  for (let i = 0; i < enemies.length; i++){
    enemiesXPos[i] = Math.floor(Math.random() * 350)*resolution;
  }
}

function gameOver(){
  lives[character] = livesB[character];
  stage = 1;
  newLife = 0;
  frame = 3;
  musicStage.stop();
  musicGameOver.play();
  shipExplosion = false;
  explosionFrame = 1;
  explosionFrameTime = 0;
  resetPos();
}


