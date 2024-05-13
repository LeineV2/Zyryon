/// <reference types="../../../CTAutocomplete" />

import config from "../../config";

register("chat", () => {
if(!config.LeapinP2) return
    if(Player.getY() < 200 && Player.getY() > 150){
        ChatLib.command("pc Leap")
    }
}).setCriteria("&r&4[BOSS] Maxor&r&c: &r&cTHAT BEAM! IT HURTS! IT HURTS!!&r").setContains()