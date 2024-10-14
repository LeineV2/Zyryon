/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import { prefix, title } from "../../utils/utils";
import data from "../../data_";

function reset() {
    crystaltime = null;
    p1 = false;
    crystal1 = null;
    crystal2 = null;
    crystal3 = null;
    crystal4 = null;
    name1 = null;
    name2 = null;
    name3 = null;
    name4 = null;
    msgsend = false;
}

let crystaltime = null;
let p1 = false;
let crystal1 = null;
let crystal2 = null;
let crystal3 = null;
let crystal4 = null;
let name1 = null;
let name2 = null;
let name3 = null;
let name4 = null;
let msgsend = false;

register("chat", () => {
    if(!config().CrystalTimer) return
    reset()
    p1 = true
}).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")

register("step", () => {
    if(!p1) return
    crystaltime += 50
}).setFps(20)

register("chat", (name, event) => {
    if (!p1) return;
    if (crystal1 == null) {
        crystal1 = crystaltime / 1000;
        name1 = name;
        if(data.pbs.c1 < crystaltime){
            if(config().CrystalTimerPB != 1 && config().CrystalTimerPB != 3){
                prefix(`First Crystal Took ${crystal1}s! (&f${name1}&6)`);
            }
            else {
                prefix(`First Crystal Took ${crystal1}s! (&f${name1}) &5(${data.pbs.c1 / 1000}s)`);
            }
        }
        cancel(event)
        if(data.pbs.c1 > crystaltime){
            data.pbs.c1 = crystaltime
            data.save();
            prefix(`First Crystal Took ${crystal1}s! (&f${name1}&6) &5(NEW PB)`);
        }
        if(name == Player.getName()){
            title(`&6${crystal1}s`, ` `, 3000, 25, 2, true)
        }
        cancel(event)
    } else if (crystal2 == null) {
        crystal2 = crystaltime / 1000;
        name2 = name;
        if(data.pbs.c2 < crystaltime){
            if(config().CrystalTimerPB != 1 && config().CrystalTimerPB != 3){
                prefix(`Second Crystal took ${crystal2}s! (&f${name2}&6)`);
            }
            else{
                prefix(`Second Crystal took ${crystal2}s! (&f${name2}) &5(${data.pbs.c2 / 1000}s)`);
            }
        }
        cancel(event)
        if(data.pbs.c2 > crystaltime){
            data.pbs.c2 = crystaltime
            data.save()
            prefix(`Second Crystal took ${crystal2}s! (&f${name2}&6) &5(NEW PB)`);
        }
        if(name == Player.getName()){
            title(`&6${crystal2}s`, ` `, 3000, 25, 2, true)
        }
        cancel(event)
    } else if (crystal3 == null) {
        crystal3 = crystaltime / 1000;
        name3 = name;
        if(data.pbs.c3 < crystaltime){
            if(config().CrystalTimerPB != 1 && config().CrystalTimerPB != 3){
                prefix(`Third Crystal took ${crystal3}s! (&f${name3}&6)`);
            }
            else{
                prefix(`Third Crystal took ${crystal3}s! (&f${name3}) &5(${data.pbs.c3 / 1000}s)`);
            }
        }
        cancel(event)
        if(data.pbs.c3 > crystaltime){
            data.pbs.c3 = crystaltime
            data.save()
            prefix(`Third Crystal took ${crystal3}s! (&f${name3}&6) &5(NEW PB)`);
        }
        if(name == Player.getName()){
            title(`&6${crystal3}s`, ` `, 3000, 25, 2, true)
        }
        cancel(event)
    } else if (crystal4 == null) {
        crystal4 = crystaltime / 1000;
        name4 = name;
        if(data.pbs.c4 < crystaltime){
            if(config().CrystalTimerPB != 1 && config().CrystalTimerPB != 3){
                prefix(`Fourth Crystal took ${crystal4}s! (&f${name4}&6)`);
            }
            else{
                prefix(`Fourth Crystal took ${crystal4}s! (&f${name4}) &5(${data.pbs.c4 / 1000}s)`);
            }
        }
        if(data.pbs.c4 > crystaltime){
            data.pbs.c4 = crystaltime
            data.save()
            prefix(`Fourth Crystal took ${crystal4}s! (&f${name4}) &5(NEW PB)`);
        }
        if(name == Player.getName()){
            title(`&6${crystal4}s`, ` `, 3000, 25, 2, true)
        }
        p1 = false
        cancel(event)
    }
}).setCriteria("${name} picked up an Energy Crystal!")

register("chat", () => {
    if(config().CrystalTimerSum == 1 || config().CrystalTimerSum == 3){
    if (crystal1 !== null && crystal2 !== null && crystal3 !== null && crystal4 !== null) {
        if(config().CrystalTimerPB == 2 || config().CrystalTimerPB == 3){
            let msges = [ChatLib.getChatBreak("&b-") ,`&6First set:`,`&6- First Crystal: &7${crystal1}s &6(&f${name1}&6) &5(${data.pbs.c1 / 1000}s)`, `&6- Second Crystal: &7${crystal2}s &6(&f${name2}&6) &5(${data.pbs.c2 / 1000}s)`, `&6Second Set:`, `&6- Third Crystal: &7${crystal3}s &6(&f${name3}&6) &5(${data.pbs.c3 / 1000}s)`, `&6- Fourth Crystal: &7${crystal4}s &6(&f${name4}&6) &5(${data.pbs.c4 / 1000}s)`, ChatLib.getChatBreak("&b-")]
            msges.forEach((msg, index) => {
                setTimeout(() => {
                    ChatLib.chat(msg)
                }, index * 20)
            })
        }
        else {
            let msges = [ChatLib.getChatBreak("&b-") ,`&6First set:`,`&6- First Crystal: &7${crystal1}s &6(&f${name1}&6)`, `&6- Second Crystal: &7${crystal2}s &6(&f${name2}&6)`, `&6Second Set:`, `&6- Third Crystal: &7${crystal3}s &6(&f${name3}&6)`, `&6- Fourth Crystal: &7${crystal4}s &6(&f${name4}&6)`, ChatLib.getChatBreak("&b-")]
            msges.forEach((msg, index) => {
                setTimeout(() => {
                    ChatLib.chat(msg)
                }, index * 20)
            })
        }
        msgsend = true
    }
    if(config().CrystalTimerSum == 1 && msgsend){
        reset()
    }
}}).setCriteria("[BOSS] Maxor: I'M TOO YOUNG TO DIE AGAIN!")

register("chat", () => {
    if(!config().CrystalTimerSum !== 1 || !config().CrystalTimerSum !== 3 || msgsend) return
    if(config().CrystalTimerPB == 2 || config().CrystalTimerPB == 3){
        let msges = [ChatLib.getChatBreak("&b-") ,`&6First set:`,`&6- First Crystal: &7${crystal1}s &6(&f${name1}&6)`, `&6- Second Crystal: &7${crystal2}s &6(&f${name2}&6)`, `&6Second Set:`, `&6- Third Crystal: &7${crystal3}s &6(&f${name3}&6)`, `&6- Fourth Crystal: &7${crystal4}s &6(&f${name4}&6)`, ChatLib.getChatBreak("&b-")]
        msges.forEach((msg, index) => {
            setTimeout(() => {
                ChatLib.chat(msg)
            }, index * 20)
        })
    }
    else {
        let msges = [ChatLib.getChatBreak("&b-"), `&6First set:`,`&6- First Crystal: &7${crystal1}s &6(&f${name1}&6)`, `&6- Second Crystal: &7${crystal2}s &6(&f${name2}&6)`, `&6Second Set:`, `&6- Third Crystal: &7${crystal3}s &6(&f${name3}&6)`, `&6- Fourth Crystal: &7${crystal4}s &6(&f${name4}&6)`, ChatLib.getChatBreak("&b-")]
        msges.forEach((msg, index) => {
            setTimeout(() => {
                ChatLib.chat(msg)
            }, index * 20)
        })
    }
    if(config().CrystalTimerSum == 1){
        reset()
    }
}).setCriteria("[BOSS] Storm: Pathetic Maxor, just like expected.")

register("chat", () => {
    if(config().CrystalTimerSum == 2 || config().CrystalTimerSum == 3){
    if (crystal1 !== null && crystal2 !== null && crystal3 !== null && crystal4 !== null) {
        if(config().CrystalTimerPB == 2 || config().CrystalTimerPB == 3){
            let msges = [ChatLib.getChatBreak("&b-"), `&6First set:`,`&6- First Crystal: &7${crystal1}s &6(&f${name1}&6)`, `&6- Second Crystal: &7${crystal2}s &6(&f${name2}&6)`, `&6Second Set:`, `&6- Third Crystal: &7${crystal3}s &6(&f${name3}&6)`, `&6- Fourth Crystal: &7${crystal4}s &6(&f${name4}&6)`, ChatLib.getChatBreak("&b-")]
            msges.forEach((msg, index) => {
                setTimeout(() => {
                    ChatLib.chat(msg)
                }, index * 1)
            })
        }
        else {
            let msges = [ChatLib.getChatBreak("&b-"), `&6First set:`,`&6- First Crystal: &7${crystal1}s &6(&f${name1}&6)`, `&6- Second Crystal: &7${crystal2}s &6(&f${name2}&6)`, `&6Second Set:`, `&6- Third Crystal: &7${crystal3}s &6(&f${name3}&6)`, `&6- Fourth Crystal: &7${crystal4}s &6(&f${name4}&6)`, ChatLib.getChatBreak("&b-")]
            msges.forEach((msg, index) => {
                setTimeout(() => {
                    ChatLib.chat(msg)
                }, index * 1)
            })
        }
    }     
    reset()
}}).setCriteria("                             > EXTRA STATS <").setContains()

register("worldUnload", () => {
    reset()
})