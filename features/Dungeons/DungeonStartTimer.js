import config from "../../config";
import { Timerutils } from "../../utils/utils";

register("chat", () => {
    if(!config().DungeonStartTimer) return;
    Timerutils.Timer(4000, 2.5, -Renderer.screen.getHeight() / 15)
}).setCriteria("Starting in 4 seconds.")