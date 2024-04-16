import config from "../../config"
import variables from "../../utils/variables"
let Healer = "null"

register("chat", (player) => {
    ChatLib.command(`SetHealer ${player}`, true)
}).setCriteria("Party Finder > ${player} joined the dungeon group! (Healer").setContains()

register("chat", (player) => {
    ChatLib.command(`SetHealer ${player}`, true)
}).setCriteria("PF > ${player} changed to Healer").setContains()

register("chat", () => {
    if(config.leapToHealer){
        if(Healer == "null") return 
        ChatLib.command(`pc Leap to ${Healer}`)
    }
}).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r").setContains()

register("chat", (player) => {
    if(Healer == player)
        ChatLib.command(`sethealer null`, true)
}).setCriteria("Party Finder > ${player} set their class to Mage").setContains()

register("chat", (player) => {
    if(Healer == player)
        ChatLib.command(`sethealer null`, true)
}).setCriteria("Party Finder > ${player} set their class to Berserk").setContains()

register("chat", (player) => {
    if(Healer == player)
        ChatLib.command(`sethealer null`, true)
}).setCriteria("Party Finder > ${player} set their class to Archer").setContains()

register("chat", (player) => {
    if(Healer == player)
        ChatLib.command(`sethealer null`, true)
}).setCriteria("Party Finder > ${player} set their class to Tank").setContains()

register("chat", (player) => {
        ChatLib.command(`sethealer ${player}`, true)
}).setCriteria("Party Finder > ${player} set their class to Healer").setContains()

register("command", (arg1) => {
    if(arg1 == undefined){
        ChatLib.chat(`${variables.PREFIX}&c/sethealer <username>`)
        return
    }
    if(arg1 == "null"){
        ChatLib.chat(`${variables.PREFIX}&7The Healer has changed class`)
        return
    }
    Healer = arg1
    //if(leapToHealerDebugMessage == true){
    ChatLib.chat(`${variables.PREFIX}${Healer} has been Marked as the Healer!`)//}
}).setCommandName("seth").setAliases("sethealer")

register("command", () => {
    if(Healer == "null"){
        ChatLib.chat(`${variables.PREFIX}&7There is no Healer in this party`)
        return
    }
    //if(leapToHealerDebugMessage == true){
    ChatLib.chat(`${variables.PREFIX}${Healer} Is Currently Marked as the Healer!`)//}
}).setCommandName("checkh").setAliases("checkhealer")

register("command", (arg1) => {
    if(arg1 == undefined){
        ChatLib.chat(`${variables.PREFIX}&c/sethealer <username>`)
        return
    }
    if(arg1 == "null"){
        ChatLib.chat(`${variables.PREFIX}&7The Healer has changed class`)
        return
    }
    Healer = arg1
    if(!leapToHealerDebugMessage) return
    ChatLib.chat(`${variables.PREFIX}${Healer} has been Marked as the Healer!`)
}).setCommandName("nothingtoseeheresh").setAliases("nothingtoseehereshh")