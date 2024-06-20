import config from "../../config";

register("chat", () => {
    if(!config.AntiEscrow) return
    ChatLib.command("ah")
}).setCriteria("&r&7Putting coins in escrow...&r")