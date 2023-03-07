//sprites
let bgTitle;
let logo;
let airplaneTitle;
let bgGameOver;
let bg;
let ship;
let enemy;
let enemy2;
let enemy3;
let portrait;
let explode;

//sounds
let musicTitle;
let musicMenu;
let musicStage;
let musicGameOver;
let sfxMenu;
let sfxSelect;
let sfxExplosion;
let sfxScore;
let sfxLife;

//animation
let bgYPos = -3800*resolution;
let bgLoop = -3800*resolution;
let explosionFrame = 1;
let explosionFrameMax = 855;
let explosionFrameTime = 0;

function preload(){
  bgTitle = loadImage("data/images/titlebackground.png");
  logo = loadImage("data/images/title.png");
  airplaneTitle = loadImage("data/images/airplane.png");
  bgGameOver = loadImage("data/images/gameoverscreen.png");
  bg = loadImage("data/images/background.png");
  ship = loadImage("data/images/ship.png");
  enemy = loadImage("data/images/enemy1.png");
  enemy2 = loadImage("data/images/enemy2.png");
  enemy3 = loadImage("data/images/enemy3.png");
  enemies = [enemy, enemy2, enemy3, enemy2, enemy];
  explode = loadImage("data/images/explosion.png");
  portrait = loadImage("data/images/portrait.png");
  
  
  musicTitle = loadSound("data/sounds/title.mp3");
  musicMenu = loadSound("data/sounds/menu.mp3");
  musicStage = loadSound("data/sounds/music.mp3");
  musicGameOver = loadSound("data/sounds/gameover.mp3");
  sfxMenu = loadSound("data/sounds/SE 26.wav");
  sfxSelect = loadSound("data/sounds/SE 27.wav");
  sfxExplosion = loadSound("data/sounds/SE 12.wav");
  sfxScore = loadSound("data/sounds/SE 29.wav");
  sfxLife = loadSound("data/sounds/SE 30.wav");
}

function objBackground(){
  image(bg, 0, bgYPos, bg.width*1.5*resolution, bg.height*1.5*resolution);
  image(bg, 0, bgYPos + bgLoop, bg.width*1.5*resolution, bg.height*1.5*resolution);
  backgroundAnimation();
  
  function backgroundAnimation(){
    bgYPos += 15*resolution;
    if (bgYPos > 0){
      bgYPos = bgLoop;
    }
  }
}

function explosionAnim(){
   image(explode, shipXPos, shipYPos, 53/2*resolution, 63/2*resolution, 3*explosionFrame, 3, 53, 63);
  
  if(explosionFrameTime < 2){
    explosionFrameTime++;
    
  }else{
    if(explosionFrame < explosionFrameMax){
      explosionFrame += 57;
      explosionFrameTime = 0;
      
    }else{
      shipExplosion = false;
      explosionFrame = 1;
      explosionFrameTime = 0;
      resetPos();
    }
  }
}