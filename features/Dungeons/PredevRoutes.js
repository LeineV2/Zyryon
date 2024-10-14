import config from "../../config";
import { F7M7utils } from "../../utils/utils";
import RenderLibV2 from "../../../RenderLibV2";

let inBoss = false
let fell = false

const coords = [
    [69, 220.35, 35.5] // maxor stair at top
]

register("command", () => {
    ChatLib.chat(World.getBlockAt(-35, 119, 7).toString().includes("stonebrick") ? "&aTrue" : "&cFalse")
}).setName("pdroutes")

register("renderWorld", () => { 
    if(!fell && inBoss && config().PredevRoutes){
        RenderLibV2.drawEspBoxV2(coords[0][0], coords[0][1], coords[0][2], 2, 1, 1, 0, 1, 0, 1, false);
    }
});

register("tick", () => {
    if(!fell && Player.getY() < 210){
        fell = true
    }
})

register("chat", () => {
    inBoss = true
}).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")

register("worldUnload", () => {
    inBoss = false
    fell = false
})