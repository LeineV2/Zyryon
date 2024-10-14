import config from "./config"
import data from "./data_"
import { getPuzzleCount, getCryptCount, prefix } from "./utils/utils"

// autokick
import "./features/Autokick/MonkeyKick"
// dungeons
import "./features/Dungeons/BonzoMaskReminder"
import "./features/Dungeons/CrystalTimer"
import "./features/Dungeons/CustomStormLightningTimer"
import "./features/Dungeons/CustomTerminalTitles"
import "./features/Dungeons/CustomWitherCloak"
import "./features/Dungeons/DungeonStartTimer"
import "./features/Dungeons/DungeonTitles"
import "./features/Dungeons/LeapAnnounce"
import "./features/Dungeons/M7"
import "./features/Dungeons/MaskCooldownDisplay"
import "./features/Dungeons/MaxorStartTimer"
import "./features/Dungeons/OpenPBOnStart"
import "./features/Dungeons/PlaceEnergyCrystal"
import "./features/Dungeons/PreDevTimer"
import "./features/Dungeons/PredevRoutes"
import "./features/Dungeons/perm"
import "./features/Dungeons/ragaxetimer"
import "./features/Dungeons/relicwaypoints"
import "./features/Dungeons/withershieldtimer"
import "./features/Dungeons/Wish"
// general
import "./features/General/antikick"
import "./features/General/changeplayermodel"
import "./features/General/cmds"
import "./features/General/gfscmds"
import "./features/General/HideParticles"
import "./features/General/hud"
import "./features/General/petkeybinds"
// mining
import "./features/Mining/ComDoneNotifier"
import "./features/Mining/MSBNotification"
import "./features/Mining/MSBTimer"
import "./features/Mining/ResetCold"
// chat
import "./features/chat/ahbuyping"
import "./features/chat/AntiEscrow"
import "./features/chat/ChatDropsMessage"
import "./features/chat/HideUselessMessages"
import "./features/chat/PartyCommands"
import "./features/chat/party"
// utils
import "./utils/firstinstall"

register("step", () => {
    if(Player.getContainer()?.getName() !== "Dungeoneering") return
    if(data.catalvl !== null) return
    Player.getContainer().getItems().forEach(item => {
        if(item?.getName()?.includes("The Catacombs")) {
            ChatLib.chat(item.getName())
            data.catalvl = parseInt(item.getName().split(" ")[2])
            if(data.catalvl > 50) data.catalvl = 50
            data.save()
        }
    })
}).setFps(1)

register("command", (...args) => {
    if(args[0] === "puzzlecount") ChatLib.chat(`Puzzles: ${getPuzzleCount()}`)
    if(args[0] === "cryptcount") ChatLib.chat(`Crypts: ${getCryptCount()}`)
}).setName("puzzlecount")

register("chat", () => {
    if(getPuzzleCount() < 4) return
    ChatLib.command(`pc Warning: THIS DUNGEON HAS ${getPuzzleCount()} PUZZLES!`)
}).setCriteria("Starting in 4 seconds.")

register("command", (...args) => {
    data.catalvl = args[0]
    data.save()
    ChatLib.chat(`Catalvl set to ${data.catalvl}`)
}).setName("catalvlset")