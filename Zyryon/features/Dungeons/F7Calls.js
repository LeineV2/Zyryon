import config from "../../config";

register("chat", () => {
    if(config.F7Calls == 1){
        ChatLib.command(`pc dev`)}
    if(config.F7Calls == 2){
        ChatLib.command(`pc 1`)}
    if(config.F7Calls == 3){
        ChatLib.command(`pc 2`)}
    if(config.F7Calls == 4){
        ChatLib.command(`pc 3`)}
    if(config.F7Calls == 5){
        ChatLib.command(`pc 4`)}
}).setCriteria(`&r&4[BOSS] Storm&r&c: &r&cAt least my son died by your hands.&r`).setContains()
