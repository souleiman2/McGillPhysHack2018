let orientation = new Matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
let s;
let c;
let rot1, rot2;
let h = new HyperPrism([200, 100, 300, 50]);

function setup() {
	createCanvas(400, 400);
	s = sin(PI/60);
	c = cos(PI/60);
	rot1 = new Matrix([[c, -s, 0, 0], [s, c, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
	rot2 = new Matrix([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, c, -s], [0, 0, s, c]]);
	rot3 = new Matrix([[1, 0, 0, 0], [0, c, -s, 0], [0, s, c, 0], [0, 0, 0, 1]]);
}

function draw() {
	background(220);
	h.update(rot3.mult(rot1.mult(rot2)));
	h.render();
}
