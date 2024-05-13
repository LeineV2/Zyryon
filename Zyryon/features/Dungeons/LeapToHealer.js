/// <reference types="../../../CTAutocomplete" />

import config from "../../config"
import variables from "../../utils/variables"
let Healer = "null"

register("chat", (player) => {
    ChatLib.command(`SetHealer ${player}`, true)
}).setCriteria("Party Finder > ${player} joined the dungeon group! (Healer").setContains()

register("chat", (player) => {
    ChatLib.command(`SetHealer ${player}`, true)
}).setCriteria("PF > ${player} changed to Healer").setContains()

if(config.leapToHealer){
    register("chat", () => {
        if(Healer == "null") return 
            if(config.TitleInstadofMsgLTH){
                Client.showTitle(`&aLeap to ${Healer}!`, ` `, 6, 60, 6)
                return
            }
        ChatLib.command(`pc Leap to ${Healer}!`)
    }).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r").setContains()

    register("chat", () => {
        if(Player.getY() < 150){
            if(Healer == variables.username) return 
            ChatLib.command(`pc Leap to me!`)
        }
    }).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r").setContains()
}

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
    }
    Healer = arg1
        ChatLib.chat(`${variables.PREFIX}${Healer} has been Marked as the Healer!`)
}).setCommandName("seth").setAliases("sethealer")

register("command", () => {
    if(Healer == "null"){
        ChatLib.chat(`${variables.PREFIX}&7There is no Healer in this party`)
        return
    }
    ChatLib.chat(`${variables.PREFIX}${Healer} Is Currently Marked as the Healer!`)
}).setCommandName("checkh").setAliases("checkhealer")

register("command", (arg1) => {
    if(arg1 == undefined){
        ChatLib.chat(`${variables.PREFIX}&c/sethealer <username>`)
        return
    }
    if(arg1 == "null"){
        ChatLib.chat(`${variables.PREFIX}&7The Healer has changed class`)    }
    Healer = arg1
    ChatLib.chat(`${variables.PREFIX}${Healer} has been Marked as the Healer!`)
}).setCommandName("nothingtoseeheresh").setAliases("nothingtoseehereshh")

register("chat", () => {
    if(Player.getName() == Healer) return
        if(config.AutoWishMessage && config.MessageForWishing == ""){
    ChatLib.command(`pc Wish or gay`)}
    }
).setCriteria("&r&c⚠ Maxor is enraged! ⚠&r").setContains()

register("chat", () => {
    if(Player.getName() == Healer) return
        if(config.AutoWishMessage && config.MessageForWishing == ""){  
     ChatLib.command(`pc Wish or gay`)}
    }
).setCriteria("&r&4[BOSS] Goldor&r&c: &r&cYou have done it, you destroyed the factory…&r").setContains()

register("chat", () => {
    if(Player.getName() == Healer) return
        if(config.AutoWishMessage && !config.MessageForWishing == ""){
    ChatLib.command(`pc ${config.MessageForWishing}`)}
    }
).setCriteria("&r&c⚠ Maxor is enraged! ⚠&r").setContains()

register("chat", () => {
    if(Player.getName() == Healer) return
        if(config.AutoWishMessage && !config.MessageForWishing == ""){
    ChatLib.command(`pc ${config.MessageForWishing}`)}
    }
).setCriteria("&r&4[BOSS] Goldor&r&c: &r&cYou have done it, you destroyed the factory…&r").setContains()

