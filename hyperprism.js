class HyperPrism {
	constructor(lengths, orientation) {
		this.lengths = lengths;
		this.n = lengths.length;
		this.orientation = orientation;
		this.points = this.generatePoints(lengths, this.n - 1); 
	}

	generatePoints(lengths, i) {
		if (i == 0) return [[-lengths[0]/2], [lengths[0]/2]];
		let w = lengths[i];
		let points1 = this.generatePoints(lengths, i - 1);
		let points2 = this.generatePoints(lengths, i - 1);
		for (let i = 0; i < points1.length; i++) {
			points1[i].push(w/2);
			points2[i].push(-w/2);
		}
		return points1.concat(points2);
	}


	update(rotationMatrix) {
		this.orientation = rotationMatrix.mult(this.orientation).normalize();
	}

	differByOne(p1, p2){
		let count = 0;
		for (let i = 0; i < p1.length; i++){
			if (p1[i] != p2[i]) {
				count++;
			}
		}
		return count == 1;
	}

	render() {
		this.points = this.generatePoints(this.lengths, this.n - 1);
		translate(width/2, height/2);

		let newPoints = this.points.map(p => this.orientation.vectMult(new Vector(p)));


		strokeWeight(lineThickness);
		stroke(lineColor);
		for (let i = 0; i < this.points.length; i++) {
			for (let j = 0; j < this.points.length; j++) {
				if(this.differByOne(this.points[i], this.points[j])) {
					line(newPoints[i].get(0), newPoints[i].get(1),
						newPoints[j].get(0), newPoints[j].get(1));
				}
			}
		}

		noStroke();
		fill(vertexColor);
		for (let i = 0; i < this.points.length; i++) {
			let x = newPoints[i].get(0);
			let y = newPoints[i].get(1);
			ellipse(x, y, vertexSize); 
 		}
	}
}
