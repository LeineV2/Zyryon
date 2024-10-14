import config from "../../config";
import { title } from "../../utils/utils";

register("chat", (event) => {
    const message = ChatLib.getChatMessage(event)
    if(!config().WishTitle) return
    if(message == "⚠ Maxor is enraged! ⚠"){
        title("&c⚠ &6Wish! &c⚠", " ", 2000, Renderer.screen.getHeight() * 0.11, 4, true)
    }
})