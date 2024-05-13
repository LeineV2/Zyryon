import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if(config.F7Calls == 1){
        ChatLib.command(`pc dev`)}
    }
).setCriteria(`&r&4[BOSS] Storm&r&c: &r&cAt least my son died by your hands.&r`).setContains()

register("chat", () => {
    if(config.F7Calls == 2){
        ChatLib.command(`pc 1`)}
    }
).setCriteria(`&r&4[BOSS] Storm&r&c: &r&cAt least my son died by your hands.&r`).setContains()

register("chat", () => {
    if(config.F7Calls == 3){
        ChatLib.command(`pc 2`)}
    }
).setCriteria(`&r&4[BOSS] Storm&r&c: &r&cAt least my son died by your hands.&r`).setContains()

register("chat", () => {
    if(config.F7Calls == 4){
        ChatLib.command(`pc 3`)}
    }
).setCriteria(`&r&4[BOSS] Storm&r&c: &r&cAt least my son died by your hands.&r`).setContains()

register("chat", () => {
    if(config.F7Calls == 5){
        ChatLib.command(`pc 4`)}
    }
).setCriteria(`&r&4[BOSS] Storm&r&c: &r&cAt least my son died by your hands.&r`).setContains()