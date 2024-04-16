import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if (config.PartyCommands){
        ChatLib.chat(`${variables.PREFIX}\n   &6=help &8&kA &r&7 Shows you the List of Commands avalible.\n   &6=warp &8&kA &r&7 Warps the Party to the Leaders Server.\n   &6=allinv &8&kA &r&7 Toggles Allinvite in the Party. `)
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =help/)

register("chat", () => {
    if (config.PartyCommands){
        ChatLib.command(`p warp`)
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =warp/)

register("chat", () => {
    if (config.PartyCommands){
        ChatLib.command(`p settings allinvite`)
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =allinv/)

register("chat", () => {
    if (config.PartyCommands){
        ChatLib.command(`p settings allinvite`)
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =allinvite/)

register("chat", () => {
    if (config.PartyCommands){
        ChatLib.command(`pearls`, true)
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =pearls/)

//hide =help

register("chat", (event) => {
    cancel(event)
}).setCriteria(`: =help`).setContains()