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
fakeAjax(file1)
.then(function (text) {
    console.log('Promise caught ' + text);
    return fakeAjax(file2);
})
.then(function (text) {
    console.log('Promise caught ' + text);
    return fakeAjax(file3);
})
.then(function (text) {
    console.log('Promise caught ' + text)
    console.log('Complete');
})