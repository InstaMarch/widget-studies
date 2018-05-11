/*jslint
    browser
*/

/*global
    fetch, console
*/

fetch("https://discordapp.com/api/")
    .then(function (response) {
        "use strict";
        return response.json();
    })
    .then(function (myJson) {
        "use strict";
        console.log(myJson);
    });