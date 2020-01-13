export default class Drawing{

	constructor(){
		// Array 'coordinates' requires object of x and y values
		this.coordinates = [];
	}
	initCanvas(canvas){
		this.W = canvas.width = 500;
		this.H = canvas.height = 500;
		let ctx = canvas.getContext('2d');
		let cursorX, cursorY, counter = 0;
		const radius = 3;

		function drawCircle(x, y, radius){
			ctx.beginPath();
			ctx.fillStyle = 'black';
			ctx.ellipse(x, y, radius, radius, -90*Math.PI/180, 360*Math.PI/180, false);
			ctx.fill();
		}
		canvas.addEventListener('mousedown', (evt) => {
			cursorX = evt.offsetX;
			cursorY = evt.offsetY;
			this.importCoords(cursorX, cursorY);
			drawCircle(cursorX, cursorY, radius);
			counter++;
		});
		document.getElementById('clearDrawing').onclick = () => {
			this.coordinates = [];
			ctx.clearRect(0, 0, this.W, this.H);
		};
		document.getElementById('undoCoord').onclick = () => {
			this.coordinates.splice(this.coordinates.length-1, 1);
			ctx.clearRect(0, 0, this.W, this.H);
			for(let i = 0; i < this.coordinates.length;i++){
				let coords = this.coordinates[i];
				drawCircle(coords.x, coords.y, radius)
			}
		}
	}
	importDrawing(particleCount){
		if (this.coordinates.length == 0){
			return this.circleDrawing(particleCount);
		} else {
			return this.createDrawing(particleCount);
		}
	}
	importCoords(ex, ey){
		this.coordinates.push({x:ex, y:ey});
	}
	createDrawing(){
		let coordinates = [];
		for (let i = 0; i < this.coordinates.length; i++){
			let nCoords = this.coordinates[i];
			coordinates.push({x:(nCoords.x-(this.W/2))/3, y:(nCoords.y-(this.H/2))/3});
		}
		return coordinates;
	}
	/*Every function needs to push new values for array 'coordinates' */
	circleDrawing(particleCount){
		let x1, y1;
		let times = 360/particleCount;
		let coordinates = [];
		for (let a = 0; a < 360; a += times){
			x1 = (Math.cos(Math.PI*a/180)*25) - (Math.sin(Math.PI*a/180)*25);
			y1 = (Math.sin(Math.PI*a/180)*25) + (Math.cos(Math.PI*a/180)*25);
			coordinates.push({x:x1,y:y1});
		}
		return coordinates;
	}
}