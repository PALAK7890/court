var backgroundImg;
var player1 , player2;
var ball;
var player1Img , player2Img;
var ballImg;
var edge; 

function preload(){

player1Img=loadImage ("boy.png");
player2Img=loadImage("girl.png");
backgroundImg=loadImage("bg.jpg");
ballImg=loadImage("ball.png");



}

function setup(){     
  createCanvas(windowWidth-20,windowHeight-30);
  
  player1 = createSprite(20,windowHeight/2);
  //add img to player1
  player1.addImage("player1", player1Img);
  player1.scale = 0.2;

  player2  = createSprite(windowWidth-50,windowHeight/2);
  // add img to player2
  player2.addImage("player2", player2Img);
  player2.scale = 0.7

  ball = createSprite(windowWidth/2,windowHeight/2,30,30);
  //add img to ball
  ball.addImage("ball", ballImg);
  ball.scale = 0.04

  edge = createEdgeSprites();

}

function draw(){
  background (backgroundImg);

  if(keyDown("space")){
    ball.velocityX = -7   
    ball.velocityY = -2
  }

  ball.bounceOff(player1)
  ball.bounceOff(player2)

  ball.bounceOff(edge[2])
  ball.bounceOff(edge[3])
  

  if(keyDown(UP_ARROW)){
    player1.y += -4;   
  }

  if(keyDown(DOWN_ARROW)){
    player1.y += 4;
 }

 if(keyDown("w")){
  player2.y += -4;   
}

if(keyDown("x")){
  player2.y += 4;
}
  drawSprites ();


}

