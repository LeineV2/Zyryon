import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if(config.AntiMonkey){
        ChatLib.say(`MONKEY SPOTTED!`)
        ChatLib.command(`p kick RedShotz`)
    }
}).setCriteria("RedShotz joined the party.").setContains()

register("chat", () => {
    if(config.AntiMonkey){
        ChatLib.say(`MONKEY SPOTTED!`)
        ChatLib.command(`p leave`)
        ChatLib.chat(`${variables.PREFIX}Left RedShotz´s Party`)
    }
}).setCriteria("RedShotz's party!").setContains()