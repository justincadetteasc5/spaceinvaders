var ship;
var img1;
var img2;
let spaceship;
let backgrounder;
let enemy;
function preload(){
    img1 = loadImage('https://78.media.tumblr.com/f8d5054ab6c74d701d5a0ac7dba59652/tumblr_n9jcboUNmK1qzcxzqo2_500.gif')
    img2 = loadImage('https://cdn4.iconfinder.com/data/icons/space-invaders/100/10-512.png')
}
function setup(){
    createCanvas(600,400);
    ship = new Ship();
}
let enemies = []
function draw(){
    background("white");
    for(let i=0;i<16;i++){
        image(img2,20+35*i,50,30,30)
        enemies.push([20+35*i,50])
    }
    for(let i=0;i<16;i++){
        image(img2,20+35*i,100,30,30)
        enemies.push([20+35*i,100])
    }
    for(let i=0;i<16;i++){
        image(img2,20+35*i,150,30,30)
        enemies.push([20+35*i,150])
    }
    ship.show();
    drawGame();
    nextStep();
}
    function collision(){
        for (i=0; i<bullets.length; i++){
         if(dist(enemyX+ enemy.width/10,enemyY+ enemy.height/10 ,bullets[i][0] + 5 , bullets[i][1] + 10)
        <= 10+enemy.height/10){
           isAlive = false;
           score = score + 100
        }  }
      }
      let enemyX = 400
      let subtracter = 8
      let enemyY = 50
      let enemycord = [enemyX, enemyY]
      let firerate = 60
      score = 0
      let isgone = false
      firerate-- 
if (firerate == 0) {firerate = 60}
  background(backgrounder);
  textSize(20)
  text("Player One", 650, 50)
  text("Score: "+ score, 50, 50);
  fill(255,255,255);
  noStroke()
  collision()
  if (isAlive) {
  image(enemy, enemyX, enemyY, enemy.width/5,enemy.height/5)
}
 else { isgone = true; 
}
  if (enemyX === 0 || enemyX === 600){ enemyY = enemyY+20 
    subtracter = -subtracter} 
  enemyX = enemyX + subtracter
  image(spaceship, xcoordinate, 475, spaceship.width/1.8, spaceship.height/1.8)
  drawGame(); 
  nextStep(); 
  console.log(firerate)
  console.log(isAlive, isgone)
  endgame()
  
function keyPressed(){
    if (keyCode === 68) {
        ship.move(20);
    } else if (keyCode === 65) {
        ship.move(-20);
    } else if (keyCode === 32){
        bullets.push([ship.x+20,height-15])
    }
}
// use v// use variables to represent the "state" of the game - information that represents what is going on
let spaceshipX = 10;
let bullets = [];
// draw our canvas
// update the game state when a key or mouse is pressed
// function that draws the state of the game
function drawGame(){
    for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
        rect(x, y, 5, 5);
    }
}
// updates the game state every step
function nextStep(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 1;
    }
}