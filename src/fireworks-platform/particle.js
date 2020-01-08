import Drawing from '../draw-platform/drawing.js';

export default class Particle{
	constructor(canvaWidth, canvaHeight){
		this.gravity = 0.25;
		this.W = canvaWidth;
		this.H = canvaHeight;
		this.particles = [];
		this.drawing = new Drawing(); //Array
	}
	initialize(){
		this.particles.push({x: 250, y: this.H, xDir: (Math.random()*8)-4,
												yDir: (Math.random()*-5)-10,
												radius: 3,
												shouldExplode: true});
	}
	explode(x, y, duration, particleCount){
		let dir = this.calculateDir(x, y, duration, particleCount); //Array
		for (let i = 0; i < particleCount; i++){
			let d = dir[i];
			this.particles.push({x, y, xDir: d.vx, yDir: d.vy, radius: 3});
		}
	}
	calculateDir(x, y, duration, particleCount){
		let dir = [];
		let draw = this.drawing.importDrawing(particleCount);
		for (let i = 0; i < particleCount; i++){
			let xDir = (draw[i].x) / duration; //Paatrinajums
			let yDir = (draw[i].y) / duration - 1e-3 / 2;
			dir.push({vx: xDir, vy: yDir});
		}
		return dir;
	}
	update(pCount){
		for(let i = this.particles.length-1; i >= 0; i--){
			let particle = this.particles[i];
			particle.x += particle.xDir;
			particle.y += particle.yDir;
			particle.yDir += this.gravity;
			if (particle.yDir > 0 && particle.shouldExplode){
				this.explode(particle.x, particle.y, 1000/120, pCount);
				if (pCount != 0){
					this.particles.splice(i, 1);
				}
				particle.shouldExplode = false;
			}
			if (particle.y > this.H){
				this.particles.splice(i, 1);
			}

			if (particle.yDir > 0){
				particle.radius -= 0.04;
			}
			if (particle.radius < 0){
				particle.radius = 0;
			}
		}
	}
	draw(ctx){
		for(let i = this.particles.length-1; i >= 0; i--){
			let particle = this.particles[i];
			ctx.beginPath();
			ctx.fillStyle = "white";
			ctx.ellipse(particle.x, particle.y,
						particle.radius, particle.radius, -90*Math.PI/180,
						360*Math.PI/180, false);
			ctx.fill();
		}
	}
}