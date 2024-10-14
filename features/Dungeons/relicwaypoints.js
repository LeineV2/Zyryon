/// <reference types="../../../CTAutocomplete" />

import config from "../../config"
import { Itemutils } from "../../utils/utils"
import RenderLibV2 from "../../../RenderLibV2"

register("renderWorld", () => {
    if(!config().relicwaypoints) return
    const red = Itemutils.InvCheck("Corrupted Red Relic")
    const blue = Itemutils.InvCheck("Corrupted Blue Relic")
    const green = Itemutils.InvCheck("Corrupted Green Relic")
    const orange = Itemutils.InvCheck("Corrupted Orange Relic")
    const purple = Itemutils.InvCheck("Corrupted Purple Relic")
    const test = Itemutils.HeldItemCheck("Astraeaa")
    if(red) {
        RenderLibV2.drawInnerEspBoxV2(51.5, 7, 42.5, 1, 1, 1, 1, 0, 0, 0.15, true)
        RenderLibV2.drawEspBoxV2(51.5, 7, 42.5, 1, 1, 1, 1, 0, 0, 1, true)
    }
    if(blue) {
        RenderLibV2.drawInnerEspBoxV2(59.5, 7, 44.5, 1, 1, 1, 0, 1, 0.545, 0.15, true)
        RenderLibV2.drawEspBoxV2(59.5, 7, 44.5, 1, 1, 1, 0, 0, 1, 0.545, true)
    }
    if(green) {
        RenderLibV2.drawInnerEspBoxV2(49.5, 7, 44.5, 1, 1, 1, 0, 1, 0, 0.15, true)
        RenderLibV2.drawEspBoxV2(49.5, 7, 44.5, 1, 1, 1, 0, 1, 0, 1, true)
    }
    if(orange) {
        RenderLibV2.drawInnerEspBoxV2(57.5, 7, 42.5, 1, 1, 1, 1, 0.647, 0, 0.15, true)
        RenderLibV2.drawEspBoxV2(57.5, 7, 42.5, 1, 1, 1, 1, 0.647, 0, 1, true)
    }
    if(purple) {
        RenderLibV2.drawInnerEspBoxV2(54.5, 7, 41.5, 1, 1, 1, 0.502, 0, 0.502, 0.15, true)
        RenderLibV2.drawEspBoxV2(54.5, 7, 41.5, 1, 1, 1, 0.502, 0, 0.502, 1, true)
    }
})