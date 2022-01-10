var gameStart = true
var gameOver = false
var lives = 10

function setup() {
  createCanvas(500, 500);
	frameRate(10)
}

function draw() {
	// Create a start screen and 
	if(gameStart){
		background(0);
		fill("mistyrose")
		rect(width/2, height/2, 50, 50)
		stroke("black")
		fill("black")
		text("START", 255, 280)
		if(mouseIsPressed){
			if(mouseX > width/2 && mouseX < width/2 + 50 && mouseY > height/2 && mouseY < height/2 + 50){
				gameStart = false
			}
		}
	}
	else {
		background(0, 100, 200);
		textSize(32)
		text("LET'S PLAY A GAME", 100, 50)
		textSize(16)
		text("LIVES: " + lives, 0, 450)
	}

	// is the game over?
	if(gameOver){
		background("yellow")
		textSize(32)
		text("GAME OVER", 150, 200)
	}

	if(lives <= 0){
		gameOver = true
	}
	else {
		if(mouseIsPressed){
			lives--
		}
	}
	
	
	



	

  

}

// Declare function below this line
