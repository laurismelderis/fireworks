import Particle from './particle.js';

let newDiv = document.createElement('div');
newDiv.id = "canvas-panel";
newDiv.className = "canvas-panel";
let canvas = document.createElement('canvas');
let prevDiv = document.getElementById("buttons");
canvas.id = 'fireworks-platform';
newDiv.appendChild(canvas);
document.body.insertBefore(newDiv, prevDiv);
let pCount;
const W = canvas.width = 500;
const H = canvas.height = 500;
const tick = 1000/60;
let ctx = canvas.getContext('2d');

let particle = new Particle(W, H);

document.getElementById('shoot').onclick = () => {
	particle.shoot();
}
document.getElementById('specialShoot').onclick = () => {
	particle.specialShoot();
}

function animation(){
	requestAnimationFrame(animation);
	ctx.clearRect(0, 0, W, H);
	particle.update(pCount);
	particle.draw(ctx);
}
animation();