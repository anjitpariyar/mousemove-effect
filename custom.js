document.addEventListener('mousemove', myfunc);

function myfunc(e){
	this.querySelectorAll('.layer').forEach(layer =>{
		var speed = layer.getAttribute('data-speed');
		var x=(window.innerWidth-e.pageX*speed)/250;
		var y=(window.innerHeight-e.pageY*speed)/250;
		layer.style.transform=`translate(${-x}px)`
	});
}