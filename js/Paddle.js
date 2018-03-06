const Paddle = function (player, color) {
	const c = color
	const w = 100
	const h = 100
	const p = player
	let x = p === 1 ? 0 + h : width - w - h
	const speed = 8
	let y = Math.floor(height / 2)
	let score = 0
	const UP = -1
	const DOWN = 1
	const LEFT = -1
	const RIGHT = 1

	const getX = function () {
		return x
	}
	const getY = function () {
		return y
	}
	const getW = function () {
		return w
	}
	const getH = function () {
		return h
	}

	const getScore = function () {
		return score
	}

	const draw = function () {
		noStroke()
		ellipseMode(CORNER)
		fill(c)
		ellipse(x, y, w, h)
	}	

 	const move = function (dir,sentido) {
 		//if((y+ (speed*dir)) > 0 && (y+ (speed*dir))+h < height)
 		
			if(sentido==1){
				if (edge(dir))
 					y+= (speed*dir)
			}
 			else{
 				if (limitPlayer(dir))
 					x+= (speed*dir)
 			}
 		
 	}

 	const edge = function (dir) {
 		return (dir === UP && y > 0 || dir === DOWN && y < height-h)
 	}

 	const limitPlayer = function (dir) {
 		if(p==2)
 			return (dir === LEFT && x-10 > width/2 || dir === RIGHT && x < width-w)
 		else
 			return (dir === LEFT && x > 0 || dir === RIGHT && x+w+10 < width/2)
 	}

 	const updateScore = function () {
 		score++
 	}

	return {
		draw,
		move,
		getX,
		getY,
		getW,
		getH,
		getScore,
		updateScore,
	}
}