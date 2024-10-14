import config from "../../config";
import { prefix } from "../../utils/utils";
import data from "../../data_";

const hiddenMessages = [
    "[Bazaar] Executing instant buy...",
    "[Bazaar] Executing instant sell...",
    "[Bazaar] The Buy Orders for this item changed too much!",
    "[Bazaar] Couldn't find any buyers for",
    "[Bazaar] Putting goods in escrow...",
    "[Bazaar] Submitting sell offer...",
    "[Bazaar] Submitting buy order...",
    "[Bazaar] Claiming order...",
    "[Bazaar] Cancelling order...",
    "Putting coins in escrow...",
    "Processing purchase...",
    "Claiming BIN auction...",
    "[Bazaar] Couldn't find any buyers for",
    "[Bazaar] No items could be matched to buyers!"
];

hiddenMessages.forEach(message => {
    register("chat", (event) => {
        if(!config().HideAllUselessBazzarMessages) return
        cancel(event)
    }).setCriteria(message).setContains()
})

data.customhiddenmessages.forEach(message => {
    register("chat", (event) => {
        if(!config().HideCustomMessages) return
        cancel(event)
    }).setCriteria(message)
})

register("command", (...args) => {
    if(args[1] == "add") {
        data.customhiddenmessages.push(args.slice(2).join(" "))
        data.save()
        prefix(`Added ${args.slice(2).join(" ")} to your hidden messages!`)
    } else if(args[1] == "remove") {
        data.customhiddenmessages = data.customhiddenmessages.filter(message => message != args[2])
        data.save()
        prefix(`Removed ${args[2]} from your hidden messages!`)
    } else if(args[1] == "list") {
        prefix(`Your hidden messages: ${data.customhiddenmessages.join(", ")}`)
    } else {
        prefix(`&7Usage: /chm &4(add/remove/list) &7(message)`)
    }
    
}).setName("chm").setAliases("hidecustommessages")