/// <reference types="../../../CTAutocomplete" />
import config from "../../config";
import { Itemutils } from "../../utils/utils";

register("chat", () => {
    if(!config().PoisonReminder) return
    if(Itemutils.InvCheck("Twilight Arrow Poison")) return
    Client.showTitle("&5&lNO ARROW POISON IN INV", "", 10, 20, 10)
}).setCriteria("[BOSS] Necron: All this, for nothing...")