var Widget = {
	init: function(width, height){
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
		// console.log('Widget init');
	},
	insert: function($where){
		if (this.$elem) {
			this.$elem.css({
				width: this.width + "px",
				height: this.height + "px"
			}).appendTo($where);
			// console.log('Widget insert');
		}
	}
}
var Button = Object.create(Widget);//wont be child class will be peer to be able to delegate to widget utility
Button.setup = function(width, height, label) {
	//delegated call
	console.log(this);
	this.init(width, height);
	this.label = label || 'Default';
	this.$elem = $("<button>").text(this.label);
	// console.log('Button init');
}
Button.build = function($where){
	//delegated call
	this.insert($where);
	this.$elem.bind("click", this.onClick.bind(this));
	// console.log('Button build');
}
Button.onClick = function (evt) {
	console.log("Button "+this.label+ " clicked!");
}

$(document).ready(function(){
	var $body = $(document.body);
	var btn1 = Object.create(Button);
	btn1.setup(100,50,"Hello");
	var btn2 = Object.create(Button);
	btn2.setup(200, 100, "World");

	btn1.build($body);
	btn2.build($body);
});