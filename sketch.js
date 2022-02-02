var fundo;
var tom, jerry,Tom, Jerry;
var mouseimg2;
var gatoimg2;
var mouseimg4;
var gatoimg4;

function preload() {
    //carregue as imagens aqui
    fundo=loadImage("images/garden.png");
    tom=loadAnimation("images/cat1.png");
    jerry=loadAnimation("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    gatoimg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseimg4=loadAnimation("images/mouse4.png");
    gatoimg4=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    Tom=createSprite(800,700);
    Tom.addAnimation("gato",tom);
    Jerry=createSprite(200,700);
    Jerry.addAnimation("rato",jerry);
    Tom.scale=0.2;
    Jerry.scale=0.2;
}

function draw() {

    background(fundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(Tom.x - Jerry.x<(Tom.width-Jerry.width)/2){
        Jerry.addAnimation("jerryColidindo",mouseimg4);
        Jerry.changeAnimation("jerryColidindo");
        Tom.addAnimation("gatoColidindo",gatoimg4);
        Tom.changeAnimation("gatoColidindo");
        Tom.velocityX = 0;
        Tom.x=300;
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
      Jerry.addAnimation("jerryProvocando",mouseimg2);
      Jerry.changeAnimation("jerryProvocando");
      Jerry.frameDelay = 25;

      Tom.velocityX = -5;
      Tom.addAnimation("gatoAndando",gatoimg2);
      Tom.changeAnimation("gatoAndando");

  }


}
