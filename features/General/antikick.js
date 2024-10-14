/// <reference types="../../../CTAutocomplete" />

import config from "../../config";

register("chat", () => {
    Client.showTitle(`&7Kicked!`, ` `, 10, 20, 10)
    ChatLib.command("l")
    setTimeout(() => {
        ChatLib.command("pc I got Kicked!")
    }, 500)
}).setCriteria("You were kicked while joining that server!")