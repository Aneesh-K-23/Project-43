var spacecraft, iss;
var issIMG, bg, scimg;
var hasDocked = false;

function Preload () {
scimg = loadImage("spacecraft1.png");
scimg1 = loadImage("spacecraft2.png");
scimg2 = loadImage("spacecraft3.png");
scimg3 = loadImage("spacecraft4.png");
issIMG = loadImage("iss.png");
bg = loadImage("spacebg.jpg");
}



function setup() {
  createCanvas(800,400);
  
  spacecraft = createSprite(285, 240);
  spacecraft.addImage("scimg");
  spacecraft.scale = 0.15;
    
  iss = createSprite(330, 130);
  iss.addImage("issIMG");
  iss.scale = 0.25;
 
  
}

function draw() {
  background(bg);  
  spacecraft.addImage("scimg");
   
  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1)
  }

  if(keyDown("UP_ARROW")) {
    spacecraft.y = spacecraft.y - 2;
  }

  if(keyDown("LEFT_ARROW")) {
    spacecraft.x = spacecraft.x - 1; 
    spacecraft.addImage("scimg3")
  }

  if(keyDown("RIGHT_ARROW")) {
    spacecraft.x = spacecraft.x + 1; 
    spacecraft.addImage("scimg2")
  }

  if(keyDown("DOWN_ARROW")) {
     spacecraft.addImage("scimg1")
  }

  if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10)) {
    hasDocked = true;
    fill = "white";
    textsize = 25;
    text("docking succesful", 200, 300);
  }

}
