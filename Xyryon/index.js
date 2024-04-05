import config from "./config"
import "./features/Dungeons/LeapToHealer/LeapToHealer"
import "./features/Random/RNGDropPaste"

register("command", () => {
    config.openGUI()
}).setCommandName("Xyryon").setAliases(["Xy"])