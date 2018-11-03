let orientation = Matrix.iden(5);
let s;
let c;
let rot1, rot2;
let h = new HyperPrism([200, 100, 300, 50, 150]);

//gui variables
let dimension = 2;
let length = 150;
let angularVelocity = 5;

//max, min and step variables

//dimension
let dimensionMax = 10;
let dimensionMin = 1;
let dimensionStep = 1;


//length
let lengthMax = 500;
let lengthMin = 50;
let lengthStep = 10;

//angularVariable
let angularVelocityMax = -20;
let angularVelocityMin = 20;
let angularVelocityStep = 1;

let gui;
let pseudoGui;
let hello = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

	pseudoGui = createGui("Length")
	pseudoGui.addGlobals('hello')
	//create the GUI
	gui = createGui("Succ");
	gui.addGlobals('dimension', 'length', 'angularVelocity', 'pseudoGui')

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
	h.update(rot3.mult(rot1.mult(rot2.mult(rot4))));
	h.render();
}
