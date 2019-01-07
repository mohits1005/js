(function iffe() {//add iffe so no variable is global
    var rest = "KLMNOPQRSTUVWXYZ".split(""), obj = {};
    for (var i = 0; i < rest.length; i++) {
        (function (i) {
            console.log("function " + rest[i]+" defined");
            // define the current function
            obj[rest[i]] = function () {
                // console.log(rest[i]);
                if (i < (rest.length - 1)) {
                    // TODO: call the next function
                    console.log("function " + rest[i] + " called");
                    obj[rest[i + 1]]();

                }
            };
        })(i);
    }
    return obj.K;
})()();
