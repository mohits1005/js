var Widget = {
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
Button.initButton = function (label, width, height){
    this.label = label;
    //delegated call
    this.init(height, width);
    this.$elem = $("<button>").text(this.label);
}
Button.renderButton = function ($where) {
    //delegated call
    this.render($where);
    this.$elem.bind('click', this.onClick.bind(this));
};
Button.onClick = function () {
    console.log(this.label);
};
$(document).ready(function () {
    var $body = $(document.body);
    var btn1 = Object.create(Button);
    var btn2 = Object.create(Button);
    btn1.initButton("Button 1");
    btn2.initButton("Button 2", 150, 150);
    btn1.renderButton($body);
    btn2.renderButton($body);
});
