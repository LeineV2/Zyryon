import { prefix } from "../../utils/utils";
import data from "../../data_";

register("command", (fov) => {
    if(fov == undefined) return prefix(`Usage: /setFOV (number)!`)
    if(isNaN(fov)) return prefix(`Please use a Number!`)
    Client.settings.setFOV(parseFloat(fov))
    prefix(`Changed FOV to &b${fov}!`)
}).setName("setFOV").setAliases("fov")

register("command", (mavol) => {
    if(mavol == undefined) return prefix(`Usage: /setVolume (number)`)
    if(isNaN(mavol)) return prefix(`Use a Number Between &b1-100 &7Instead!`)
    if(mavol > 100 || mavol < 0 ) return prefix(`Use a Number Between &b1-100 &7Instead!`)
    Client.settings.sound.setMasterVolume(mavol / 100)
    prefix(`&7Set Master Volume to &b${mavol}!`)
}).setName("setVolume").setAliases("vol")

register("command", (...args) => {
    if(args[0] == "pb") {
        if(args[1] == "predev" || args[1] == "pd") {
            data.pbs.pd = 999999
            data.save()
            prefix(`Reset Predev Data!`)
        } else if(args[1] == "crystals" || args[1] == "cry" || args[1] == "cr") {
            data.pbs.c1 = 999999
            data.pbs.c2 = 999999
            data.pbs.c3 = 999999
            data.pbs.c4 = 999999
            data.save()
            prefix(`Reset Crystal Data!`)
        } else {
            prefix(`&7Invalid Argument! Use /reset pb (predev/crystals)!`)
        }
    } else {
        prefix(`&7Usage: /reset (pb) (predev/crystals)`)
    }
}).setName("reset").setAliases("re")


register("command", () => {
    ChatLib.command("warp camp")
    prefix("&7Warping to &6Dwarven Base Camp")
}).setName("ca")