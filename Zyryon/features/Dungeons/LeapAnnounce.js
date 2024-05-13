import config from "../../config";
import variables from "../../utils/variables";

let inBoss = false

register("chat", (name) => {
    if(config.leapAnnounce){
        if(config.OnlyLeapMessageInBoss) return
        ChatLib.command(`pc Leaped to ${name}!`)}
        if(!config.HideAllDebugMessages){
    ChatLib.chat(`${variables.PREFIX}&aYou have teleported to &f${name}!`)}
}).setCriteria("You have teleported to ${name}!").setContains()

register("chat", (event) => {
   cancel(event)
}).setCriteria("You have teleported to").setContains() 

register("chat", () => {
    if(config.HideLeapMsgLevel == 0) return
})

register("chat", (event) => {
    if(config.HideLeapMsgLevel == 1){
        cancel(event)
    }
}).setCriteria(`${variables.username}: Leaped to `).setContains()

register("chat", (event) => {
    if(config.HideLeapMsgLevel == 2){
        cancel(event)
    }
}).setCriteria(`Leaped to `).setContains()

register("command", (arg1) => {
    if(arg1 == "on"){
        inBoss = true
    }

    if(arg1 == "off"){
        inBoss = false
    }
}).setName("inbosstoggle").setAliases("inboss")

register("chat", () => {
    ChatLib.command("inboss on", true)
    ChatLib.chat(`${variables.PREFIX}Boss Mode on`)
}).setCriteria("[BOSS] Maxor: WELL WELL WELL LOOK WHO'S HERE!").setContains()

register("chat", () => {
    ChatLib.command("inboss off", true)
    ChatLib.chat(`${variables.PREFIX}Boss Mode Off`)
}).setCriteria("[BOSS] Necron: All this, for nothing...").setContains()