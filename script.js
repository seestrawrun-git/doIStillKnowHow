function drawCircles() {
	for(let i = 0; i < 30; i++) {
		fill(random(64,72), random(22,27), random(98, 102));
		stroke(255);
		ellipse(i, 0, 200, 200);
		rotate((sin(frameCount/500) + 10));
		}
	}
function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 253, 208, 245);
	translate(width/2, height/2);
	fill(255);
	drawCircles();
	push();
	translate(200, 0);
	rotate(-frameCount/1000);
	drawCircles();
	pop();
	push();
	translate(-100, 0);
	drawCircles();
	pop();
	textAlign(CENTER);
	text("Do I know how to?");



}


