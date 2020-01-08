import Drawing from './drawing.js';

let canvas = document.getElementById('draw-platform');
let saveDrawing = document.getElementById('saveDrawing');
let topOffset = parseInt(window.getComputedStyle(document.querySelector('.canva-panel'), null).getPropertyValue('padding-top')) +
				parseInt(window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('margin-top'));
let bodyMarginLeft = parseInt(window.getComputedStyle(document.querySelector('body'), null).getPropertyValue('margin-left'));
let canvaPanelPaddingLeft = parseInt(window.getComputedStyle(document.querySelector('.canva-panel'), null).getPropertyValue('padding-left'));
let canvaFireworkWidth = parseInt(window.getComputedStyle(document.getElementById('fireworks-platform'), null).getPropertyValue('width'));
let leftOffSet = bodyMarginLeft + canvaPanelPaddingLeft + canvaFireworkWidth;
let W = canvas.width = 500;
let H = canvas.height = 500;
let ctx = canvas.getContext('2d');
let cursorX, cursorY, counter;

let drawing = new Drawing();

function drawCircle(x, y, radius){
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.ellipse(x, y, radius, radius, -90*Math.PI/180, 360*Math.PI/180, false);
	ctx.fill();
}
canvas.addEventListener('mousedown', (evt) => {
	cursorX = evt.clientX - leftOffSet;
	cursorY = evt.clientY - topOffset;
	drawing.importCoords(cursorX, cursorY);
	drawCircle(cursorX, cursorY, 3);
	counter++;
});
saveDrawing.addEventListener('click', (evt) => {
	// drawing.createDrawing(counter);
	
});