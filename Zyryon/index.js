import config from "./config"
import variables from "./utils/variables"
import "./features/Autokick/MonkeyKick"
import "./features/Dungeons/DungeonStartTimer"
import "./features/Dungeons/DungeonTitles"
import "./features/Dungeons/F7Calls"
import "./features/Dungeons/LeapAnnounce"
import "./features/Dungeons/LeapToHealer"
import "./features/Dungeons/OpenPBOnStart"
import "./features/Dungeons/M7"
import "./features/General/antikick"
import "./features/General/cmds"
import "./features/General/gfscmds"
import "./features/General/hud"
import "./features/WIP/test"
import "./features/chat/AntiEscrow"
import "./features/chat/HideUselessMessages"
import "./features/chat/PartyCommands"
import "./features/chat/auto-o7"
import "./features/chat/ChatDropsMessage"
import "./features/Mining/MSBTimer"
import "./features/Mining/MSBNotification"
import "./features/Mining/ComDoneNotifier"

register("command", (arg1) => {
    if(arg1 == "help"){
        ChatLib.chat(`${variables.PREFIX}&bZyryon Commands&r \n&r &b/ep\n&r &b/seth(ealer)\n&r &b/checkh(ealer)\n&r &b/fov\n&r &b/vol`)
    } else {
        config.openGUI()
    }
}).setCommandName("Zyryon").setAliases(["Zy"])