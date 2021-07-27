const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(700,250,400,15)

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(600,240,50,50);
    box2 = new Box(650,240,50,50);
    
    box3 = new Box(700,240,50,50);
    box4 = new Box(750,240,50,50);
    
    box5 = new Box(750,160,50,50);
    box6 = new Box(650,160,50,50);

    box7 = new Box(700,160,50,50);
    box8 = new Box(735,165,50,50);

    box9 = new Box(669,110,50,50);
    box10 = new Box(725,110,50,50);

    box11 = new Box(690,65,50,50);
   
    bird = new Bird(50,200);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

}

function draw(){
    background(backgroundImg);
    text(mouseX + ',' + mouseY, 10, 15);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    stand.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}