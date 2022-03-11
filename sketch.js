var bg;
var cupbg
var score=0;
var system,code,security;

function preload ()
{
  bg = loadImage("images/background.jpeg");
  cupbg = loadImage("images/cup.jpeg")
}



function setup() {
  createCanvas(1500,800);
  system = new System()
  security = new Security()

}

function draw() {
  background(bg);
  clues()
  security.display();
  textSize(40);
  fill("white");
  text("Score : " + score, 650, 60);

  if(score === 3) {
    clear();
    background(cupbg)
    fill("white")
    textSize(70);
    stroke(10);
    text("YOU HAVE WON THE TRIWIZARD CUP!",90, 360);
  }
  
  drawSprites();
}
