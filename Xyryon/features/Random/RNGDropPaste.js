import config from "../../config";
import variables from "../../utils/variables";

register("chat", (rng, event) => {
    if(config.RNGDropPaste){
        ChatLib.getChatMessage("CRAZY RARE DROP!")
        ChatLib.command(`gc ${variables.PREFIX}hi`)
    }
}).setCriteria("CRAZY RARE DROP!").setContains()