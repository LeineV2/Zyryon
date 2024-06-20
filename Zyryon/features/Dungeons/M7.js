import config from "../../config";

register("chat", () => {
    const twilightArrowPoisonInInv = Player.getInventory().getItems().find(a => a?.getName() == "§aTwilight Arrow Poison")
    if(!config.PoisonReminder && Player.getY() > 50) return
    if(!twilightArrowPoisonInInv){
        Client.showTitle("&5&lNO ARROW POISON IN INV", "", 10, 50, 10)
    }
}).setCriteria("[BOSS] Necron: All this, for nothing...")