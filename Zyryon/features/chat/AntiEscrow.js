import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if(config.AntiEscrow){
        ChatLib.command("ah")
        ChatLib.chat(`${variables.PREFIX}Reopened Auction House!`)
    }
}).setCriteria("&r&7Putting coins in escrow...&r")