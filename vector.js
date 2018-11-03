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
		new_tab = []
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
		for(let i = 0; i<this.values.n; i++){
			this.temp_list *= c;
		}
		return new Vector(temp_list)
	}

	sub(otherVector){
		return this.add(otherVector.neg())
	}
	norm(){
		let lol = 0;
		for(let i = 0; i<this.n; i++){
			lol += this.values[i];
		}
		return Math.sqrt(lol);
	}

}