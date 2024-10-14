import config from "../../config";
import { Soundutils } from "../../utils/utils";

register("chat", (rank, name) => {
    if (config().PartyCommands){
        ChatLib.command("pc Zyryon Command List: =(warp, allinv, pearls)")
        if(!config().HideAllDebugMessages){
            prefix(`\n &6=help &8&kA &r&7 Shows you the List of Commands avalible.\n   &6=warp &8&kA &r&7 Warps the Party to the Leaders Server.\n   &6=allinv &8&kA &r&7 Toggles Allinvite in the Party.`)
        }
    }
}).setCriteria("Party > ${rank} ${name}: =help")

register("chat", (rank ,name) => {
    if (config().PartyCommands){
        ChatLib.command("p warp")
        if(!config().HideAllDebugMessages){
            prefix(`&7Warped by [&b${name}&7]`)
        }
    }
}).setCriteria("Party > ${rank} ${name}: =warp")

register("chat", (rank, name) => {
    if (config().PartyCommands){
        ChatLib.command("p settings allinvite")
        if(!config().HideAllDebugMessages){
            prefix(`&7Toggled allinvite by [&b${name}&7]`)
        }
    }
}).setCriteria("Party > ${rank} ${name}: =allinv")

register("chat", (rank, name) => {
    if (config().PartyCommands){
        ChatLib.command("p settings allinvite")
        if(!config().HideAllDebugMessages){
            prefix(`&7Toggled allinvite by [&b${name}&7]`)
        }    
    }
}).setCriteria("Party > ${rank} ${name}: =allinvite")

register("chat", (rank, name) => {
    if (config().PartyCommands){
        ChatLib.command("pearls", true)
        if(!config().HideAllDebugMessages){
            prefix(`&bPearls &7Refrashed by [&b${name}&7]`)
        }
    }
}).setCriteria("Party > ${rank} ${name}: =pearls")

//hide =cmds

register("chat", (event) => {
    if(!config().PaShowAllMessagesMain) return
    if(!config().PaHelpMessage) return
    cancel(event)

}).setCriteria(": =help").setContains()

register("chat", (event) => {
    if(!config().PaShowAllMessagesMain) return
    if(!config().PaWarpMessage) return
    cancel(event)
    
}).setCriteria(": =warp").setContains()

register("chat", (event) => {
    if(!config().PaShowAllMessagesMain) return
    if(!config().PaAllInviteMessage) return
    cancel(event)

}).setCriteria(": =allinv").setContains()

register("chat", (event) => {
    if(!config().PaShowAllMessagesMain)  return
    if(!config().PaAllInviteMessage) return
    cancel(event)
    
}).setCriteria(": =allinvite").setContains()
 
register("chat", (event) => {
    if(!config().PaShowAllMessagesMain) return
    if(!config().PaPearlsMessage) return
    cancel(event)
    
}).setCriteria(": =pearls").setContains()