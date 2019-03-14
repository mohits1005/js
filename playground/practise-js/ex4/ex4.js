function Widget(width, height) {
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}

Widget.prototype.render = function ($where) {
	if (this.$elem) {
		this.$elem.css({
			width: this.width + "px",
			height: this.height + "px"
		}).appendTo($where);
	}
};

function Button(label, height, width) {
	this.label = label;
	this.height = height;
	this.width = width;	
	this.$elem = $("<button>").text(this.label);
}
Button.prototype = Object.create(Widget.prototype);
Button.prototype.renderButton = function ($where){
	this.render($where);
	this.$elem.bind('click', this.onClick.bind(this));
}
Button.prototype.onClick = function () {
	console.log(this.label+' clicked');
}
/*
Button -> render = function($where) {
	// call the parent render()
	// add a click handler -> onClick
}

Button -> onClick = function(evt) {
	console.log("...");
}
*/
$(document).ready(function(){
	var $body = $(document.body);
	var btn1 = new Button('btn1', 50, 100);
	var btn2 = new Button('btn2', 100, 200);

	btn1.renderButton($body);
	btn2.renderButton($body);
});