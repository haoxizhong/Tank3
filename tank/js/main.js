var mainCanvas, context;
var downkeys = [];

function init() {
	mainCanvas = document.getElementById("mainCanvas");
	context = mainCanvas.getContext("2d");

	gameInit();
	requestAnimFrame(update);
}

function update() {
	clear();
	gameUpdate();
}

function clear() {
	ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}
