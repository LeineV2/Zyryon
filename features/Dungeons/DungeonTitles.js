/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import { Soundutils, prefix, Timerutils, title, Itemutils } from "../../utils/utils";

// Keys

register("chat", (rank, player) => {
    if(!config().DungeonTitleMainToggle) return
        if(config().DungeonKeyDoorTitle){
            title(`&8Wither Key &eObtained`, `&eby &6${player}!`, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
        }
}).setCriteria("${rank} ${player} has obtained Wither Key!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
        if(config().DungeonKeyDoorTitle){
            title(`&8Wither Key &eObtained`, ` `, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
        }
}).setCriteria("A Wither Key was picked up!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
        if(config().DungeonKeyDoorTitle){
            title(`&cBlood Key &eObtained`, ` `, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
        }
}).setCriteria("A Blood Key was picked up!")

register("chat", (rank, player) => {
    if(!config().DungeonTitleMainToggle) return
    if(config().DungeonKeyDoorTitle){
        title(`&cBlood Key &eObtained`, `&eby &6${player}!`, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
        Soundutils.ping()
    }
}).setCriteria("${rank} ${player} has obtained Blood Key!")

// doors

register("chat", (player) => {
    if(!config().DungeonTitleMainToggle) return
        if(config().DungeonKeyDoorTitle){
            title(`&8Wither Door &aOpened!`, `&eby &6${player}!`, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
    }
}).setCriteria("${player} opened a WITHER door!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
        if(config().DungeonKeyDoorTitle){
            title(`&cBlood Door &aOpened!`, ` `, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
    }
}).setCriteria("The BLOOD DOOR has been opened!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
        if(config().BloodReadyDoneTitle){
            title(`&cBlood Ready!`, ` `, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
        if(config().BloodReadyDoneTitle){
            title(`&cBlood Done!`, ` `, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
            Soundutils.ping()
    }
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
        if(config().ChestLockedTitle){
            title(`&cThe Chest is Locked`, ` `, 1250, Renderer.screen.getHeight() / 8, 2.5, true)
    }
}).setCriteria("That chest is locked!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
    if(!config().bonzomask) return
    BonzoMaskcd.start()
    Soundutils.meow()
}).setCriteria("Your Bonzo's Mask saved your life!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
    if(!config().pheonix) return
    Phoenixcd.start()
    Soundutils.meow()
}).setCriteria("Your Phoenix Pet saved you from certain death!")

register("chat", () => {
    if(!config().DungeonTitleMainToggle) return
    if(!config().spiritmask) return
    spiritmaskcd.start()
    Soundutils.meow()
}).setCriteria("Second Wind Activated! Your Spirit Mask saved your life!")

register("chat", () => {
    if(!config().ThunderBottleNotifier) return
    const emptybottle = Itemutils.InvCheck("Empty Thunder Bottle")
    if(emptybottle) return
    title(`&6THUNDER BOTTLES FULL`, ` `, 2000, Renderer.screen.getHeight() / 8, 2.5, true)
    if(!config().ThunderBottleNotifierMessage) return
    ChatLib.command(`pc !dt Thunder Bottles`)
}).setCriteria("> Your bottle of thunder has fully charged!")