import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if(!config.AntiEscrow) return
        ChatLib.command("ah")
        if(!config.HideAllDebugMessages){
            ChatLib.chat(`${variables.PREFIX}Reopened Auction House!`)
        }     
}).setCriteria("&r&7Putting coins in escrow...&r")