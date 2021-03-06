function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    apiCall();
}

function apiCall(){
    var request = new XMLHttpRequest();
    var wrap = document.getElementById('loader-wrapper');
    wrap.classList.remove('hidden');
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.onload = function () {
        wrap.classList.add('hidden');
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                console.log(movie.title);
            });
        } else {
            console.log('error');
        }
    }

    request.send();
}