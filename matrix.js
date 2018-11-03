class Matrix{
	constructor(values){
		this.values = values;//squared matrices
		this.n = this.values.length;


	}
	get(i,j){
		return this.values[i][j];
	}

	mult(otherMatrix){//matrices multiplication
		let temp_mat = []
		for(let i = 0; i<this.n; i++){
			temp_mat.push([])
			sum = 0
			for(let k = 0; k<this.n; k++){
				for (let j = 0; j<this.n; j++){
					sum += this.get(i,j) * otherMatrix.get(j,k)
				}
			}
			temp_mat[i].push(sum);
		}
		return new Matrix(temp_mat);
	}

	vect_mult(vect){
		let list = []
		for(let i = 0; i<this.n; i++){
			sum = 0
			for(let j = 0; j<this.n; j++){
				sum += this.get(i,j) * vect.get(j);
			}
			list.push(sum);
		}
		return new Vector(list);
	}

}