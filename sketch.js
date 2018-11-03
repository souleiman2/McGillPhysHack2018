let orientation = Matrix.iden(5);
let s;
let c;
let rot1, rot2;
let h = new HyperPrism([200, 100, 300]);

function setup() {
	createCanvas(400, 400);
	s = sin(PI/60);
	c = cos(PI/60);
	rot1 = new Matrix([[c, -s, 0, 0, 0], [s, c, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]);
	s = sin(PI/160);
	c = cos(PI/160);
	rot2 = new Matrix([[1, 0, 0, 0, 0], [0, c, 0, 0, -s], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, s, 0, 0, c]]);
	s = sin(PI/260);
	c = cos(PI/260);
	rot3 = new Matrix([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0],[0, 0, c, -s, 0], [0, 0, s, c, 0], [0, 0, 0, 0, 1]]);
	s = sin(PI/60);
	c = cos(PI/60);
	rot4 = new Matrix([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, c,-s], [0, 0, 0, s, c]]);
}

function draw() {
	background(220);
	let v = new Vector([1, 1, 1]).normalized();
	let u = new Vector([1, 1, -1]).normalized();
	let theta = PI/60;
	let rot = Matrix.iden(3).add(v.outer(u).sub(u.outer(v)).scale(sin(theta))).add(
		u.outer(u).add(v.outer(v)).scale(cos(theta) - 1));
	h.update(rot);
	//h.update(rot3.mult(rot1.mult(rot2.mult(rot4))));
	h.render();
}
