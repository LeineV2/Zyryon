import config from "./config"
import "./features/Autokick/MonkeyKick"
import "./features/Dungeons/F7Calls"
import "./features/Dungeons/LeapToHealer"
import "./features/Dungeons/LeapAnnounce"
import "./features/Dungeons/OpenPBOnStart"
import "./features/Dungeons/LeapToP2"
import "./features/Dungeons/DungeonTitles"
import "./features/chat/AntiEscrow"
import "./features/chat/PartyCommands"
import "./features/chat/HideUselessMessages"
import "./features/General/gfscmds"
import "./features/WIP/test"

register("command", () => {
    config.openGUI()
}).setCommandName("Zyryon").setAliases(["Zy"])