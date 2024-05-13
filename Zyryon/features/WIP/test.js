/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import variables from "../../utils/variables"
//let start = Date.now()

//register("renderOverlay", () => {
//    const now = Date.now()
//    const secsPassed = 3000
//
//    const x = 10
//    const y = 10
//    Renderer.translate(x, y)
//    Renderer.drawString(`Timer: ${secsPassed}`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - 15 ).setColor(Renderer.RED).setAlign("CENTER");
//})

register("chat", () => {
    ChatLib.command("l")
}).setCriteria("You were kicked while joining that server!")