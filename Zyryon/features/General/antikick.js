/// <reference types="../../../CTAutocomplete" />

import config from "../../config";

const kickthread = new Thread(() => {
    Client.showTitle(`&7Kicked!`, ` `, 10, 20, 10)
    ChatLib.command("l")
    Thread.sleep(500)
    ChatLib.command("pc I got Kicked!")
})

register("chat", () => {
    kickthread.start()
}).setCriteria("You were kicked while joining that server!")