class Vector{
	constructor(values){
		this.values = values
		this.n = this.values.length
	}
	get(i){
		return this.values[i];
	}
	n(){
		return this.n
	}
	add(otherVector){
		let new_tab = []
		for(let i = 0; i<otherVector.n; i++){
			new_tab.push(otherVector.get(i) + this.get(i));
		}
		return new Vector(new_tab);
	}
	neg(){
		return this.scale(-1);
	}
	scale(c){
		let temp_list = this.values.slice();
		for(let i = 0; i<this.n; i++){
			temp_list[i] *= c;
		}
		return new Vector(temp_list)
	}

	sub(otherVector){
		return this.add(otherVector.neg())
	}
	norm(){
		let sum = 0;
		for(let i = 0; i<this.n; i++){
			sum += this.get(i) ** 2;
		}
		return Math.sqrt(sum);
	}
	dot(otherVector){
		let sum = 0;
		for(let i = 0; i<this.n; i++){
			sum += this.get(i) * otherVector.get(i)
		}
		return sum;
	}

}