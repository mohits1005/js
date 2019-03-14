var Widget={
    init: function(width, height) {
            this.width = width || 50;
            this.height = height || 50;
            this.$elem = null;
        },
    render: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    }    
}

var Button = Object.create(Widget);
Button.init = function (label, height, width) {
    this.label = label;
    this.height = height;
    this.width = width;
    this.$elem = $("<button>").text(this.label);
}
Button.renderButton = function ($where) {
    this.render($where);
    this.$elem.bind('click', this.onClick.bind(this));
}
Button.onClick = function () {
    console.log(this.label + ' clicked');
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
$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    btn1.init('btn1', 50, 100);
    btn1.renderButton($body);
    var btn2 = Object.create(Button);
    btn2.init('btn2', 100, 200);
    btn2.renderButton($body);
});