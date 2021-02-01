var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var  score = 0
var particle
var turn = 0

var gameState = 0
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(35)
  fill("white")
  text("Score:  " + score, 70, 50)

  textSize(30)
  fill("white")
  text("100", 330, 730)
 
  textSize(30)
  fill("white")
  text("100", 410, 730)
  textSize(30)
  fill("white")
  text("200", 490, 730)
  textSize(30)
  fill("white")
  text("200", 570, 730)
  textSize(30)
  fill("white")
  text("200", 250, 730)
  textSize(30)
  fill("white")
  text("200", 170, 730)
  textSize(30)
  fill("white")
  text(" 500", 90, 730)
  textSize(30)
  fill("white")
  text("500", 10, 730)
  textSize(30)
  fill("white")
  text("500", 650, 730)
  textSize(30)
  fill("white")
  text("500", 730, 730)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(gameState === 0){
   if(frameCount%80===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     turn++
    
   }
  }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(turn === 5){
     gameState = 1
   }
   if (gameState === 1){
    textSize(55)
    fill("white")
    text("GAME OVER", 300, 360)
   }
   /*if (particle.body.position.y < 700){
     score = score+100
   }*/
   console.log(particles.body.position.y)
}