/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import { BoomSound, catsounds } from "../../utils/utils";
import variables from "../../utils/variables";

// Keys

register("chat", (rank, player) => {
    if(!config.DungeonTitleMainToggle) return
        if(config.DungeonKeyDoorTitle){
            Client.showTitle("&8Wither Key &eObtained", `&eby &6${player}!`, 10, 25, 10)
        }
}).setCriteria("${rank} ${player} has obtained Wither Key!")

register("chat", (rank, player) => {
    if(!config.DungeonTitleMainToggle) return
    if(config.DungeonKeyDoorTitle){
        Client.showTitle("&cBlood Key &eObtained", `&eby &6${player}!`, 10, 25, 2)
    }
}).setCriteria("${rank} ${player} has obtained Blood Key!")

// doors

register("chat", (player) => {
    if(!config.DungeonTitleMainToggle) return
        if(config.DungeonKeyDoorTitle){
            Client.showTitle("&8Wither Door &aOpened!", `&eby &6${player}!`, 10, 25, 10)
    }
}).setCriteria("${player} opened a WITHER door!")

register("chat", () => {
    if(!config.DungeonTitleMainToggle) return
        if(config.DungeonKeyDoorTitle){
            Client.showTitle("&cBlood Door &aOpened!", ` `, 10, 25, 10)
    }
}).setCriteria("The BLOOD DOOR has been opened!")

register("chat", () => {
    if(!config.DungeonTitleMainToggle) return
        if(config.BloodReadyDoneTitle){
            Client.showTitle(`&cBlood Ready!`, ` `, 10, 50, 10)
            ChatLib.chat(`${variables.PREFIX}&cBlood Room Ready!`)
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.")

register("chat", () => {
    if(!config.DungeonTitleMainToggle) return
        if(config.BloodReadyDoneTitle){
            Client.showTitle(`&cBlood Done!`, ` `, 10, 50, 10)
            ChatLib.chat(`${variables.PREFIX}&cBlood Room Done!`)
    }
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.")

register("chat", (td, tm) => {
    Client.showTitle(`&a&lDEVICE DONE (${td}/${tm})`, ` `, 5, 35, 5)
}).setCriteria("${Player.getName()} completed a device (${td}/${tm})")

register("chat", () => {
    if(!config.DungeonTitleMainToggle) return
        if(config.ChestLockedTitle){
            Client.showTitle(`&cThe Chest is Locked`, `&aClick the lever to Open it!`, 5, 15, 5)
    }
}).setCriteria("That chest is locked!")

const BonzoMaskcd = new Thread(() => {
    Client.showTitle(`&cYou Died!`, `&eYour &1Bonzo Mask &ehas Procted`, 5, 40, 5)
    BonzoMaskcd.sleep(100000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &4100s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &4100s`, 5, 40, 5)
    BonzoMaskcd.sleep(50000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &c50s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &c50s`, 5, 40, 5)
    BonzoMaskcd.sleep(25000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &c25s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &c25s`, 5, 40, 5)
    BonzoMaskcd.sleep(15000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is Ready in &e10s`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&3Ready in &e10s`, 5, 40, 5)
    BonzoMaskcd.sleep(10000)
    ChatLib.chat(`${variables.PREFIX}&7Your &1Bonzo Mask &7is &aReady`)
    Client.showTitle(`&eYour &1Bonzo Mask &eis`, `&7is &aReady`, 5, 40, 5)
})

const Phoenixcd = new Thread(() => {
    Client.showTitle(`&cYou Died!`, `&eYour &cPhoenix &ePet Procted`, 5, 40, 5)
    Phoenixcd.sleep(30000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready in &430s`)
    Client.showTitle(`&eYour &cPhoenix &ePet is`, `&eReady in &430s`, 5, 40, 5)
    Phoenixcd.sleep(15000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready in &c15s`)
    Client.showTitle(`&eYour &cPhoenix &ePet is`, `&eReady in &c15s`, 5, 40, 5)
    Phoenixcd.sleep(10000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is Ready in &e5s`)
    Client.showTitle(`&eYour &cPhoenix &ePet is`, `&eReady in &e5s`, 5, 40, 5)
    Phoenixcd.sleep(5000)
    ChatLib.chat(`${variables.PREFIX}&7Your &cPhoenix &7is &aReady`)
    Client.showTitle(`&eYour &cPhoenix &ePet`, `&eis &aReady`, 5, 40, 5)
})

const spiritmaskcd = new Thread(() => {
    Client.showTitle(`&cYou Died!`, `&eYour &5Spirit Mask &eProcted`, 5, 40, 5)
    spiritmaskcd.sleep(15000)
    ChatLib.chat(`${variables.PREFIX}&7Your &5Spirit Mask &7is back in &415s`)
    Client.showTitle(`&eYour &5Spirit Mask &eis`, `&eReady in &415s`, 5, 40, 5)
    spiritmaskcd.sleep(10000)
    ChatLib.chat(`${variables.PREFIX}&7Your &5Spirit Mask &7is back in &e5s`)
    Client.showTitle(`&eYour &5Spirit Mask &eis`, `&eReady in &e5s`, 5, 40, 5)
    spiritmaskcd.sleep(5000)
    ChatLib.chat(`${variables.PREFIX}&7Your &5Spirit Mask &7is &aReady`)
    Client.showTitle(`&eYour &5Spirit Mask &eis`, `&7is &aReady`, 5, 40, 5)
})

register("chat", () => {
    if(config.BonzoMaskCDTitle){
        BonzoMaskcd.start()
        catsounds()
    }    
}).setCriteria("Your Bonzo's Mask saved your life!")

register("chat", () => {
    if(config.BonzoMaskCDTitle){
        Phoenixcd.start()
        catsounds()
    }
}).setCriteria("Your Phoenix Pet saved you from certain death!")

register("chat", () => {
    if(config.BonzoMaskCDTitle){
        spiritmaskcd.start()
        catsounds()
    }
}).setCriteria("Second Wind Activated! Your Spirit Mask saved your life!")

register("chat", () => {
    if(!config.DungeonTitleMainToggle) return
    if(!config.F6M6Titles) return
    Client.showTitle(`&6Terracota Dead!`, ` `, 2, 25, 2)
    catsounds()
}).setCriteria("[BOSS] Sadan: ENOUGH!")

register("chat", () => {
    if(!config.DungeonTitleMainToggle) return
    if(!config.F6M6Titles) return
    Client.showTitle(`&cGiants Dead!`, ` `, 2, 25, 2)
    catsounds()
}).setCriteria("[BOSS] Sadan: You did it. I understand now, you have earned my respect.")

register("chat", () => {
    if(!config.ThunderBottleNotifier) return
    const emptybottle = Player.getInventory().getItems().find(a => a?.getName() == "§5Empty Thunder Bottle")
    if(emptybottle) return
    Client.showTitle(`&6THUNDER BOTTLES FULL`, ` `, 10, 50, 10)
    if(!config.ThunderBottleNotifierMessage) return
    ChatLib.command(`pc !dt Thunder Bottles`)
}).setCriteria("> Your bottle of thunder has fully charged!")

register("worldLoad", () => {
    Client.showTitle(` `, ` `, 2, 1, 2)
})