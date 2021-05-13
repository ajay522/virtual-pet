//Create variables here

var dog, happyDog, database, foodS, foodStock;

function preload(){
	//load images here

  dogimg=loadeImage("Images/dogimg.png");
  happyDogimg=loadeImage("images/happyDogImg.png");

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodstock=database.ref("food");
  foodstock.on("value", readstock);
  foodstock.set(20);

  dog = createSprites(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
}


function draw() {  
background("green");
if(food!==undefined){
  textSize(20);
  Fill(255);
  text("note:press UP_ARROW key To Feed Drago Milk");
  text("Food Remaning:" +foodS, 150,150);

  if(keyWentDown(UP_ARROW)){
    WriteStock(foodS);
    dog.addImage(happyDogImg);

  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }
}
  if(foodS === 0){
    foodS=(20);
  }

  drawSprites();
  //add styles here

}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x=x=-1;
  }
  database.ref("/").update({
    Food:x
  })
}
function readstock(data){
  foodS = data.vall();
}