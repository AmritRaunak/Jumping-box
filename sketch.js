var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var r1,r2,r3,r4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,550,180,20);
    surface2=createSprite(300,550,180,20);
    surface3=createSprite(500,550,180,20);
    surface4=createSprite(700,550,180,20);

    surface1.shapeColor="red";
    surface2.shapeColor="blue";
    surface3.shapeColor="yellow";
    surface4.shapeColor="green";


    //create box sprite and give velocity
     box=createSprite(350,300,40,40);
     box.velocityX=2;
     box.velocityY=4;


     r1=createSprite(400,5,800,10);
     r2=createSprite(795,300,10,800);
     r3=createSprite(5,300,10,800);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
   drawSprites();

    //add condition to check if box touching surface and make it box

    //box.bounceOff(topEdge);

    box.bounceOff(r1);
    box.bounceOff(r2);
    box.bounceOff(r3);

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="red";
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor="blue";
    }
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor="yellow";
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor="green";
    }

}
