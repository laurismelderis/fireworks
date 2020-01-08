export default class Drawing{

	constructor(){
		// Array 'coordinates' requires object of x and y values
		this.coordinates = [];
		this.newCoordinates = [];
		this.count = 0;
	}
	importDrawing(particleCount){
		this.coordinates.length = 0;
		
		this.circleDrawing(particleCount);
		// this.createDrawing(particleCount);
		// if (!createDrawing(particleCount)){
		// } else{
		
		// }
		
		return this.coordinates;
	}
	importCoords(ex, ey){
		this.coordinates.push({x:ex, y:ey});
		this.count++;
		console.log(this.coordinates);
	}
	createDrawing(count){
		for (let i = 0; i < count; i++){
			let nCoords = this.newCoordinates[i];
			this.coordinates.push({x:nCoords.x, y:nCoords.y});
		}
		count = 0;
		console.log("Drawing created");
		
	}
	/*Every function needs to push new values for array 'coordinates' */
	circleDrawing(particleCount){
		let x1, y1;
		let times = 360/particleCount;
		for (let a = 0; a < 360; a += times){
			x1 = (Math.cos(Math.PI*a/180)*25) - (Math.sin(Math.PI*a/180)*25);
			y1 = (Math.sin(Math.PI*a/180)*25) + (Math.cos(Math.PI*a/180)*25);
			this.coordinates.push({x:x1,y:y1});
		}
		
	}
}