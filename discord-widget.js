function makeDiscordWidget() {
    "use strict";
    let currentInvite = "";
    const getInvite = function () {
        currentInvite = "abcD342";
    };
    const shareInvite = function () {
        return currentInvite;
    };
    return Object.freeze({
        getInvite,
        shareInvite
    });
}