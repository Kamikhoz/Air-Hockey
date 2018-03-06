let ball
let p1
let p2

function setup() {
	createCanvas(windowWidth,windowHeight)
	p1 = new Paddle(1, color('black'))
	p2 = new Paddle(2, color('black'))
	ball = new Ball()
}

function draw(){
	background('#0f962b')
	drawLine()
	ball.draw()
	ball.move()
	if(ball.collision(p1) || ball.collision(p2))
		ball.move()
	let checkScore = ball.checkScore()
	if(checkScore === 2)
		p2.updateScore()
	else if(checkScore === 1)
		p1.updateScore()
	p1.draw()
	p2.draw()
	
	if(keyIsDown(87))
		p1.move(-1,1)
	if(keyIsDown(83))
		p1.move(1,1)
	if(keyIsDown(65))
		p1.move(-1,0)
	if(keyIsDown(68))
		p1.move(1,0)
	if(keyIsDown(UP_ARROW))
		p2.move(-1,1)
	if(keyIsDown(DOWN_ARROW))
		p2.move(1,1)
	if(keyIsDown(LEFT_ARROW))
		p2.move(-1,0)
	if(keyIsDown(RIGHT_ARROW))
		p2.move(1,0)

	showScore()
}

/*function keyPressed (){
	console.log(keyCode)
	switch(keyCode){
		case 87:
			p1.move(-1)
			break
		case 83:
			p1.move(1)
			break
		case UP_ARROW:
			p2.move(-1)
			break
		case DOWN_ARROW:
			p2.move(1)
			break
	}
}*/

const drawLine = function () {
	stroke('#fff')
	strokeWeight(4)
	line(width/2,0,width/2,height)
	strokeWeight(30	)
	line(0,0,0,height)
	line(width,0,width,height)
	stroke(color('black'))
	line(0,height/2-100,0,height/2+100)
	line(width,height/2+100,width,height/2-100)
}

const showScore = function () {
	fill('#fff')
	textSize(50)
	text(p1.getScore(), width * 0.25, 70)
	text(p2.getScore(), width * 0.75, 70)
}
