import Particle from './particle.js';

let canvas = document.getElementById('fireworks-platform');
let pCount;
const W = canvas.width = 500;
const H = canvas.height = 500;
const tick = 1000/60;
let ctx = canvas.getContext('2d');

let particle = new Particle(W, H);

document.getElementById('boom').onclick = () => {
	pCount = document.getElementById('particleCount').value;
	if (pCount == ""){
		pCount = 10;
	}
	particle.initialize();
}

function animation(){
	requestAnimationFrame(animation);
	ctx.clearRect(0, 0, W, H);
	particle.update(pCount);
	particle.draw(ctx);
}
animation();