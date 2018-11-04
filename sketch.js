let h;

//gui variables
var dimension = 3;
let dimension_ = dimension;
var length = 150;
var lineThickness = 2;
var vertexSize = 5;
var backgroundColor = '#DCDCDC';
var lineColor = '#000000';
var vertexColor = '#000000';
let angularVelocity = 5;

//max, min and step variables

//line thickness
var lineThicknessMax = 10;
var lineThicknessMin = 1;
var lineThicknessStep = 1;

//vertex size
var vertexSizeMax = 30;

//dimension
var dimensionMax = 10;
var dimensionMin = 1;
var dimensionStep = 1;


//length
var lengthMax = 500;
var lengthMin = 50;
var lengthStep = 10;

//angularVariable
let angularVelocityMax = -20;
let angularVelocityMin = 20;
let angularVelocityStep = 1;

let gui;

let u;
let v;

let theta;

let rot;

function init() {

	u = [];
	v = [];
	let lengths = [];

	for (let i = 0; i < dimension; i++){
		u.push(random(-1, 1));
		v.push(random(-1, 1));
	lengths.push(random(min(width,height)/2));
	}

	gui = createGui("Angular Velocity");
	gui.addGlobals('backgroundColor', 'lineColor', 'vertexColor', 
		'lineThickness','vertexSize', 'dimension');

	for (let i = 0; i < dimension; i++) {
		window["length" + i] = lengths[i];
		window["length" + i + "Max"] = floor(min(width, height)/2);
		window["length" + i + "Min"] = 1;
		window["length" + i + "Step"] = 1;
		gui.addGlobals('length' + i);
		print('length' + i);
	}
	
	h = new HyperPrism(lengths, Matrix.iden(dimension));
	
	u = new Vector(u).normalized();
	v = new Vector(v).normalized();

	theta = PI/60;
	rot = Matrix.iden(dimension).add(v.outer(u).sub(u.outer(v)).scale(sin(theta))).add(
		u.outer(u).add(v.outer(v)).scale(cos(theta) - 1));
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	init();
}

function draw() {
	background(backgroundColor);

	if (dimension != dimension_) {
		dimension_ = dimension;
		document.querySelector(".qs_main").outerHTML = "";
		init();
	}

	let lengths = [];
	for (let i = 0; i < dimension; i++) {
		lengths.push(window["length" + i]);
	}
	h.lengths = lengths;

	h.update(rot);
	h.render();
}
