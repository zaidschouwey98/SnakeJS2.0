let gameArr = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]]
class Snake {
  constructor() {
    this.score = 0;
    this.horizontalMovement = 1;
    this.verticalMovement = 0;
    this.posX = 1;
    this.posY = 1;
    this.iX = 1;
    this.iY = 1;
    this.childNode = new SnakeNode(this.posX,this.posY);
    this.iteration = 0;
    this.way = [];
    
  }
  changeDirection(direction) {
    switch (direction) {
        // Left
      case 37:
        this.horizontalMovement = -1;
        this.verticalMovement = 0;
        break;
        // Up
      case 38:
        this.verticalMovement = -1;
        this.horizontalMovement = 0;
        break;
        // Right
      case 39:
        this.horizontalMovement = 1;
        this.verticalMovement = 0;
        break;
        // Down
      case 40:
      this.verticalMovement = 1;
      this.horizontalMovement = 0;
        break;
      default:
        break;
    }
  }
  move() {
     // case actuelle
    

    if(this.way.length < 1){
      astar.generateGrid();
      this.way = astar.search([this.posX,this.posY],FruitPosition)
      if(this.way.length < 1){
        this.randomWay = true;
      } else {
        this.randomWay = false;
        this.iteration = 0;
      }
    }
    
    if(!this.randomWay){
      
      this.posX = this.way[this.iteration].location.y;
      this.posY = this.way[this.iteration].location.x;
      this.iteration++;
    
    } else{
      console.log("Aleatoire...")
      if(gameArr[this.posX+1])
        if(gameArr[this.posX+1][this.posY] != 1)
          this.posX ++;
      else if(gameArr[this.posX-1][this.posY] != 1)
        this.posX --;
      else if(gameArr[this.posX][this.posY+1] != 1)
        this.posY ++;
      else if(gameArr[this.posX][this.posY-1] != 1)
        this.posY --;
    }
    
   
    
    // Prochaine case
    

    if(gameArr[this.posY][this.posX] == 2)
    {
      this.eat();
      generateFruit();
      astar.generateGrid();

      this.way = astar.search([this.posX,this.posY],FruitPosition)
      if(this.way.length < 1){
        this.randomWay = true;
      } else 
      {this.randomWay = false;
      this.iteration = 0;}
    }
    else if (gameArr[this.posY][this.posX] == 1)
      this.die();
 
    gameArr[this.posY][this.posX] = 0;
    
    this.childNode.move(this.posX,this.posY)
  }
  eat(){
    this.score ++;
    score.innerHTML = this.score;
    if(this.childNode)
      this.childNode.createChildNode();
  }
  die(){
    console.log("COLLISION")
  }
}


class SnakeNode{
  constructor(x,y) {
    this.childNode = undefined;
    this.posX = x;
    this.posY = y;
  }
  move(x,y){
    gameArr[this.posY][this.posX] = 0;
    if(this.childNode)
      this.childNode.move(this.posX,this.posY)
    this.posX = x;
    this.posY = y;
    gameArr[this.posY][this.posX] = 1;
    
  }
  createChildNode(){
    if(this.childNode)
      this.childNode.createChildNode();
    else
      this.childNode = new SnakeNode(this.posX,this.posY);
  }
}





var timer = 100;
function speeeeeedup(){
  console.log(timer)
  timer = timer - 9;
}

function generateFruit() {
  
  let x = Math.floor(Math.random() * 40);
  let y = Math.floor(Math.random() * 40);
  if(gameArr[x][y] == 0)
  {
    gameArr[x][y] = 2
    FruitPosition = [y,x]
  }
  else generateFruit();
}

var FruitPosition = [0,0];

let canvas = document.getElementById("main");
const sizeY = canvas.clientHeight/40;
const sizeX = canvas.clientWidth/40;

let score = document.getElementById("score");
let ctx = canvas.getContext("2d");
let snk = new Snake(ctx);

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = './src/snake.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0,20,20);
  }
}

let pause = false;


document.addEventListener("keydown", (event) => snk.changeDirection(event.keyCode));

generateFruit();

setInterval(function () {
  if(!pause)
    render();
}, timer);

function render() {
  snk.move();
  gameArr.forEach((col,colIndex)=>{
    col.forEach((row,rowIndex)=>{
      switch (row) {
        case 0:
          ctx.clearRect(rowIndex*sizeX, colIndex*sizeY, sizeX, sizeY);
          break
        case 1:
          ctx.fillStyle = "black";
          ctx.fillRect(rowIndex*sizeX, colIndex*sizeY, sizeX, sizeY);
          break;
        case 2:
          ctx.fillStyle = "red";
          ctx.fillRect(rowIndex*sizeX, colIndex*sizeY, sizeX, sizeY);
          break;
        case 9:
          ctx.fillStyle = "red";
          ctx.fillRect(rowIndex*sizeX, colIndex*sizeY, sizeX, sizeY);
          break;
        case 10:
          ctx.fillStyle = "red";
          ctx.fillRect(rowIndex*sizeX, colIndex*sizeY, sizeX, sizeY);
          break;
        default:
          break;
      }
    })
  })
}
