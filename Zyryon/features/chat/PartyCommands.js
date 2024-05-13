import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if (config.PartyCommands){
        ChatLib.say(`Zyryon Command List: =(warp, allinv, pearls)`)
        if(!config.HideAllDebugMessages){
            ChatLib.chat(`${variables.PREFIX}\n   &6=help &8&kA &r&7 Shows you the List of Commands avalible.\n   &6=warp &8&kA &r&7 Warps the Party to the Leaders Server.\n   &6=allinv &8&kA &r&7 Toggles Allinvite in the Party. `)
        }
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =help/)

register("chat", (name) => {
    if (config.PartyCommands){
        ChatLib.command(`p warp`)
        if(!config.HideAllDebugMessages){
            ChatLib.chat(`${variables.PREFIX}Warped by [${name}]`)
        }
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =warp/)

register("chat", (name) => {
    if (config.PartyCommands){
        ChatLib.command(`p settings allinvite`)
        if(!config.HideAllDebugMessages){
            ChatLib.chat(`${variables.PREFIX}Enabled allinvite by [${name}]`)
        }
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =allinv/)

register("chat", (player) => {
    if (config.PartyCommands){
        ChatLib.command(`p settings allinvite`)
        if(!config.HideAllDebugMessages){
            ChatLib.chat(`${variables.PREFIX}Enabled allinvite by [${player}]`)
        }    
    }
}).setCriteria(/Party > (\[.+\])? ?(.+) ?[ቾ⚒] : =allinvite/)

register("chat", (name) => {
    if (config.PartyCommands){
        ChatLib.command(`pearls`, true)
        if(!config.HideAllDebugMessages){
            ChatLib.chat(`${variables.PREFIX}Pearls Refrashed by [${name}]`)
        }
    }
}).setCriteria(`Party > (\[.+\])? ?(.+) ?[ቾ⚒]?: =pearls`)

//hide =help

register("chat", (event) => {
    if(config.PaShowAllMessagesMain)
        if(config.PaHelpMessage){
            cancel(event)
    }
}).setCriteria(`: =help`).setContains()

register("chat", (event) => {
    if(config.PaShowAllMessagesMain){
        if(config.PaWarpMessage) return
            cancel(event)
    }
}).setCriteria(`: =warp`).setContains()

register("chat", (event) => {
    if(config.PaShowAllMessagesMain){
        if(config.PaAllInviteMessage) return
            cancel(event)
    }
}).setCriteria(`: =allinv`).setContains()

register("chat", (event) => {
    if(config.PaShowAllMessagesMain){
        if(config.PaAllInviteMessage) return
            cancel(event)
    }
}).setCriteria(`: =allinvite`).setContains()
 
register("chat", (event) => {
    if(config.PaShowAllMessagesMain){
        if(config.PaPearlsMessage) return
            cancel(event)
    }
}).setCriteria(`: =pearls`).setContains()

//register("chat", (event) => {
//    cancel(event)
//}).setCriteria("RedShotz").setContains()