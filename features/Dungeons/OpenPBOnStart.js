import config from "../../config";
import { Itemutils } from "../../utils/utils";

const pots = ["§fDungeon I Potion", "§fDungeon II Potion", "§aDungeon III Potion", "§aDungeon IV Potion", "§9Dungeon V Potion", "§9Dungeon VI Potion", "§5Dungeon VII Potion"]

register("chat", () => {
    if (!config().PBOnStartOfRun) return;
    for (let i = 0; i < pots.length; i++) {
        if (Itemutils.InvCheck(pots[i])) return;
    }
    ChatLib.command("pb");
}).setCriteria("${Player.getName()} is now ready!")