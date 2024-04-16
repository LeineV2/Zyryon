import config from "../../config";

// const pearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")
// const pearlstogive = 16 - pearlStack.getStackSize()

register("chat", () => {
    if (config.AutoGFS){
    ChatLib.command("pearls", true)}
}).setCriteria("&r&aStarting in 1 second.&r")