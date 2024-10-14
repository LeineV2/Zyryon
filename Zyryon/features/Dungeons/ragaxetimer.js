/// <reference types="../../../CTAutocomplete" />
import { onTick } from "../../../ServerTick";
import config from "../../config";
import { debugmsg, Soundutils, Timerutils, title } from "../../utils/utils";

let casting = false
let cooldown = false
let a = false
let b = false
register("actionBar", (b4) => {
    const acbarmsg = b4.toString().removeFormatting()
    if(acbarmsg.includes("CASTING IN")) return
    if(!config().ragaxetimer) return
    a = true
    if(a) {
        if(b) return
        b = true
        Timerutils.TickTimer(10000, 2, Renderer.screen.getHeight() * 0.33)
    }
    setTimeout(() => {
        casting = false
    }, (10000));
    setTimeout(() => {
        cooldown = false
        b = false
        title("&a&lCooldown Over!", 1000, 3, Renderer.screen.getHeight() * 0.33)
        setTimeout(() => {
        }, (1500));    
    }, (20000));
})
