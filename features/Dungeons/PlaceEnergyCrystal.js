/// <reference types="../../../CTAutocomplete" />

import config from "../../config"
import { Itemutils, title } from "../../utils/utils";

register("renderOverlay", () => {
    if(!config().EnergyCrystalAlert) return;
    if(Itemutils.InvCheck("Energy Crystal")){
        title("&cPlace Energy Crystal", 1000, 3, Renderer.screen.getHeight() / 2 - 25)
    }
})