import config from "./config"
import "./features/Autokick/monkeykick"
import "./features/Dungeons/F7Calls"
import "./features/Dungeons/LeapToHealer"
import "./features/General/autogfs"
import "./features/General/gfscmds"
import "./features/Random/RNGDropPaste"
import "./features/chat/AntiEscrow"
import "./features/chat/PartyCommands"
import "./features/chat/WishMessage"
import "./features/chat/leapanounce"

register("command", () => {
    config.openGUI()
}).setCommandName("Zyryon").setAliases(["Zy"])