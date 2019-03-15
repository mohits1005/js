function fakeAjax(url) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;
    console.log("Requesting: " + url);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(fake_responses[url]);
        }, randomDelay);
    });
   
}
file1 = "file1";
file2 = "file2";
file3 = "file3";
// hold responses in whatever order they come back
var responses = {};
fakeAjax(file1)
.then(function (text) {
    fileReceived(file1, text)
});
fakeAjax(file2)
.then(function (text) {
    fileReceived(file2, text)
});
fakeAjax(file3)
.then(function (text) {
    fileReceived(file3, text)
})

function fileReceived(file, text) {
    // haven't received this text yet?
    if (!responses[file]) {
        responses[file] = text;
    }

    var files = ["file1", "file2", "file3"];

    // loop through responses in order for rendering
    for (var i = 0; i < files.length; i++) {
        // response received?
        if (files[i] in responses) {
            // response needs to be rendered?
            if (responses[files[i]] !== true) {
                output(responses[files[i]]);
                responses[files[i]] = true;
            }
        }
        // can't render yet
        else {
            // not complete!
            return false;
        }
    }

    output("Complete!");
}

function output(text) {
    console.log(text);
}