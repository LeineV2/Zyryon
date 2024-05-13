import variables from "../../utils/variables";
import config from "../../config";

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if(isNaN(num)) return ChatLib.chat(`/ep [amount]`)
        ChatLib.command(`gfs ender pearl ${num}`)
    return
    }

    const pearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")

    if (!pearlStack) {
        ChatLib.command(`gfs ender pearl 16`)
        ChatLib.chat(`${variables.PREFIX}You got &bEnder Pearls &7again!`)
        return
    }

    const pearlstogive = 16 - pearlStack.getStackSize()
    if(pearlstogive == 0){
        ChatLib.chat(`${variables.PREFIX}Already at &b16 Ender Pearls!&7`)
        return
    }

    ChatLib.command(`gfs ender pearl ${pearlstogive}`)
    
    if (pearlstogive == 1){
        ChatLib.chat(`${variables.PREFIX}Im gonna give you &b${pearlstogive} Ender Pearl &7to fill your stack`)
        return
    }

    ChatLib.chat(`${variables.PREFIX}Im gonna give you &b${pearlstogive} Ender Pearls &7to fill your stack`)
}).setCommandName("ep").setAliases(["pearls", "enderpearls"])

register("chat", (event) => {
    cancel(event)
}).setCriteria("Ender Pearl&r&a from your Sacks to your inventory.&r").setContains()

const PearlClickMessage = new Message(
new TextComponent(`${variables.PREFIX}&7Click to Refill &bEnder Pearls`).setClick(`run_command`, `/pearls`).setHoverValue(`&bClick to Refill &bEnder Pearls!`));

register("chat", () => {
    if(config.AutoGFS){
        if(config.ManualGFS){
            ChatLib.chat(PearlClickMessage) 
            return
        }
        ChatLib.command(`pearls`, true)
    }
}).setCriteria(`&r&aStarting in 2 seconds.&r`)
