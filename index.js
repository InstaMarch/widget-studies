/*jslint
    browser
*/

/*global
    console
*/
function logInvite(event) {
    "use strict";
    console.log(JSON.parse(event.target.responseText));
}

const invitationRequest = new XMLHttpRequest();
invitationRequest.addEventListener("load", logInvite);
invitationRequest.open("GET", "https://discordapp.com/api");
invitationRequest.send();