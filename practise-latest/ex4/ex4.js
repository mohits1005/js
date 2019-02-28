function Widget(width,height) {
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}
Widget.prototype.render = function($where){
	if (this.$elem) {
		this.$elem.css({
			width: this.width + "px",
			height: this.height + "px"
		}).appendTo($where);
	}
};
function Button(label, width, height) {
	this.label = label;
	Widget.call(this, height, width);
	this.$elem = $("<button>").text(this.label);
	this.$elem.bind('click', this.onClick.bind(this));
}
Button.prototype = new Widget();
Button.prototype.renderButton = function ($where) {
	this.render($where)
};
Button.prototype.onClick = function () {
	console.log(this.label);
};
$(document).ready(function(){
	var $body = $(document.body);
	var btn1 = new Button("Button 1");
	var btn2 = new Button("Button 2", 150,150);
	btn1.renderButton($body);
	btn2.renderButton($body);
});
