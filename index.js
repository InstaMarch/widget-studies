/*jslint
    browser
*/

/*global
    console
*/

import parseq from "./parseq.js";

function widgetRequestor(callback, success) {
    "use strict";
    const invitationRequest = new XMLHttpRequest();
    invitationRequest.addEventListener("load", function successHandler(event) {
        const discordInformation = JSON.parse(event.target.responseText);
        callback(discordInformation); 
    });
    invitationRequest.open("GET", "https://discordapp.com/api/guilds/430758941530783754/widget.json");
    invitationRequest.send();
}

function log(value, reason) {
    console.log(value);
}

parseq.sequence([widgetRequestor])(log);
