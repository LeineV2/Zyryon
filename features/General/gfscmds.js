import config from "../../config";
import { prefix } from "../../utils/utils";

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
        prefix(`You got &bEnder Pearls &6again!`)
        return
    }

    const pearlstogive = 16 - pearlStack.getStackSize()
    if(pearlstogive == 0){
        prefix(`Already at &b16 Ender Pearls!`)
        return
    }

    ChatLib.command(`gfs ender pearl ${pearlstogive}`)
    
    if (pearlstogive == 1){
        prefix(`Im gonna give you &b${pearlstogive} Ender Pearl &6to fill your stack`)
        return
    }

    prefix(`Im gonna give you &b${pearlstogive} Ender Pearls &6to fill your stack`)
}).setName("ep").setAliases(["pearls", "enderpearls"])

register("chat", (event) => {
    cancel(event)
}).setCriteria("Ender Pearl&r&a from your Sacks to your inventory.&r").setContains()

const PearlClickMessage = new Message(
new TextComponent(`&bZyryon&f&8 >&6 Click to Refill &bEnder Pearls`).setClick(`run_command`, `/pearls`).setHoverValue(`&bClick to Refill &bEnder Pearls!`));

register("chat", () => {
    if(config().AutoGFS){
        if(config().ManualGFS){
            ChatLib.chat(PearlClickMessage) 
            return
        }
        ChatLib.command(`pearls`, true)
    }
}).setCriteria(`&r&aStarting in 2 seconds.&r`)

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if(isNaN(num)) return ChatLib.chat(`/ij [amount]`)
        ChatLib.command(`gfs inflatable jerry ${num}`)
        return
    }

    const jerryStack = Player.getInventory().getItems().find(a => a?.getName() == "§fInflatable Jerry")

    if (!jerryStack) {
        ChatLib.command(`gfs inflatable jerry 64`)
        prefix(`You got &bInflatable Jerrys &6again!`)
        return
    }

    const jerrystogive = 64 - jerryStack.getStackSize()
    if(jerrystogive == 0){
        prefix(`Already at &b64 Inflatable Jerrys!`)
        return
    }

    ChatLib.command(`gfs inflatable jerry ${jerrystogive}`)
    
    if (jerrystogive == 1){
        prefix(`Im gonna give you &b${jerrystogive} Inflatable Jerry &6to fill your stack`)
        return
    }

    prefix(`Im gonna give you &b${jerrystogive} Inflatable Jerrys &6to fill your stack`)
}).setName("ij").setAliases(["jerrys", "inflatablejerrys"])

register("chat", (event) => {
    cancel(event)
}).setCriteria("Inflatable Jerry&r&a from your Sacks to your inventory.").setContains()