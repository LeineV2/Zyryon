import config from "../../config";
import { pd } from "./PreDevTimer";
import { prefix } from "../../utils/utils";

register("chat", (name, event) => {
    if(!config().leapAnnounce) return
    ChatLib.command(`pc Leaped to ${name}!`)
    cancel(event)
    if(pd) return
    prefix(`&aYou have teleported to &f${name}&a!`)
}).setCriteria("You have teleported to ${name}!")

register("chat", (event) => {
    if(config().HideLeapMsgLevel !== 1) return
    cancel(event)
}).setCriteria(`${Player.getName()}: Leaped to `).setContains()

register("chat", (event) => {
    if(config().HideLeapMsgLevel !== 2) return
    cancel(event)
}).setCriteria(`Leaped to `).setContains()