import config from "../../config";
import variables from "../../utils/variables";

register("chat", (name) => {
    if(config.leapAnnounce){
        ChatLib.command(`pc Leaped to ${name}!`)}
        if(!config.HideAllDebugMessages){
    ChatLib.chat(`${variables.PREFIX}&aYou have teleported to &f${name}!`)}
}).setCriteria("You have teleported to ${name}!").setContains()

//register("chat", (event) => {
//   cancel(event)
//}).setCriteria("You have teleported to").setContains() 

register("chat", () => {
    if(config.HideLeapMsgLevel == 0) return
})

register("chat", (event) => {
    if(config.HideLeapMsgLevel == 1){
        cancel(event)
    }
}).setCriteria(`${variables.username}: Leaped to `).setContains()

register("chat", (event) => {
    if(config.HideLeapMsgLevel == 2){
        cancel(event)
    }
}).setCriteria(`Leaped to `).setContains()