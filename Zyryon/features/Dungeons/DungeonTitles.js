/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import variables from "../../utils/variables";
// Keys

register("chat", (rank, player) => {
    if(config.DungeonKeyDoorTitle){
        Client.showTitle("&8Wither Key &eObtained", `&eby &6${player}!`, 10, 25, 10)
    }
}).setCriteria("${rank} ${player} has obtained Wither Key!")

register("chat", (rank, player) => {
    if(config.DungeonKeyDoorTitle){
        Client.showTitle("&cBlood Key &eObtained", `&eby &6${player}!`, 10, 25, 2)
    }
}).setCriteria("${rank} ${player} has obtained Blood Key!")

// doors

register("chat", (player) => {
    if(config.DungeonKeyDoorTitle){
        Client.showTitle("&8Wither Door &aOpened!", `&eby &6${player}!`, 10, 25, 10)
    }
}).setCriteria("${player} opened a WITHER door!")

register("chat", () => {
    if(config.DungeonKeyDoorTitle){
        Client.showTitle("&cBlood Door &aOpened!", ` `, 10, 25, 10)
    }
}).setCriteria("The BLOOD DOOR has been opened!")

register("chat", () => {
    if(config.BloodReadyDoneTitle){
        Client.showTitle(`&cBlood Ready!`, ` `, 10, 50, 10)
        ChatLib.chat("&cBlood Room Ready!")
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.")

register("chat", () => {
    if(config.BloodReadyDoneTitle){
        Client.showTitle(`&cBlood Done!`, ` `, 10, 50, 10)
        ChatLib.chat("&cBlood Room Done!")
    }
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.")

register("worldLoad", () => {
    Client.showTitle(` `, ` `, 2, 1, 2)
})

const BonzoMaskcd = new Thread(() => {
    Client.showTitle(`&cYou Died!`, `&eYour &1Bonzo Mask has Procted`, 5, 40, 5)
    BonzoMaskcd.sleep(100000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &e100s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &e 100s`, 5, 40, 5)
    BonzoMaskcd.sleep(50000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &e50s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &e 50s`, 5, 40, 5)
    BonzoMaskcd.sleep(25000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &e25s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &e 25s`, 5, 40, 5)
    BonzoMaskcd.sleep(15000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &e10s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &e 10s`, 5, 40, 5)
    BonzoMaskcd.sleep(10000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is &eReady`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&7is &3Ready`, 5, 40, 5)
})

const Phoenixcd = new Thread(() => {
    Client.showTitle(`&cYou Died!`, `&eYour &cPhoenix &ePet Procted`, 5, 40, 5)
    Phoenixcd.sleep(30000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready in &e30s`)
    Client.showTitle(`&eYour &cPhoenix &ePet is`, `&eReady in 30s`, 5, 40, 5)
    Phoenixcd.sleep(15000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready in &e15s`)
    Client.showTitle(`&eYour &cPhoenix &ePet is`, `&eReady in 15s`, 5, 40, 5)
    Phoenixcd.sleep(10000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready in &e5s`)
    Client.showTitle(`&eYour &cPhoenix &ePet is`, `&eReady in 5s`, 5, 40, 5)
    Phoenixcd.sleep(5000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready`)
    Client.showTitle(`&eYour &cPhoenix &ePet`, `&eis Ready`, 5, 40, 5)
})

register("chat", () => {
    if(config.BonzoMaskCDTitle){
        BonzoMaskcd.start()
    }    
}).setCriteria("Your Bonzo's Mask saved your life!")

register("chat", () => {
    if(config.BonzoMaskCDTitle){
        Phoenixcd.start()
    }
}).setCriteria("Your Phoenix Pet saved you from certain death!")