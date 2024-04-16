import config from "../../config";
import variables from "../../utils/variables";

register("chat", (name) => {
    if(config.leapAnnounce)
    ChatLib.command(`pc Leaped to ${name}!`)
}).setCriteria("You have teleported to ${name}!")