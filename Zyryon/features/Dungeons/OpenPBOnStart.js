import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
if(!config.PBOnStartOfRun) return

const PotInInvT1 = Player.getInventory().getItems().find(a => a?.getName() == "§fDungeon I Potion");
const PotInInvT2 = Player.getInventory().getItems().find(a => a?.getName() == "§fDungeon II Potion");
const PotInInvT3 = Player.getInventory().getItems().find(a => a?.getName() == "§aDungeon III Potion");
const PotInInvT4 = Player.getInventory().getItems().find(a => a?.getName() == "§aDungeon IV Potion");
const PotInInvT5 = Player.getInventory().getItems().find(a => a?.getName() == "§9Dungeon V Potion");
const PotInInvT6 = Player.getInventory().getItems().find(a => a?.getName() == "§9Dungeon VI Potion");
const PotInInvT7 = Player.getInventory().getItems().find(a => a?.getName() == "§5Dungeon VII Potion");

if(PotInInvT1 || PotInInvT2 || PotInInvT3 || PotInInvT4 || PotInInvT5 || PotInInvT6 || PotInInvT7) return
ChatLib.command("pb")

}).setCriteria("${variables.username} is now ready!")