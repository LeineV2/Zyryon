/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import { BoomSound, catsounds } from "../../utils/utils";
import variables from "../../utils/variables"

let startTimer = null

register("chat", () => {
    startTimer = Date.now()
}).setCriteria("[BOSS] Scarf: Did you forget? I was taught by the best! Let's dance.")

register("renderOverlay",  () => {
    if (!startTimer) return
    const displayTimer = 3000 - (Date.now() - startTimer)
    const timerCheck = displayTimer >= 0 ? true : false
    if (!timerCheck) return startTimer = null
    const text = new Text(displayTimer / 1000, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - 15).setAlign("CENTER").setColor(Renderer.GREEN)
    if(displayTimer <= 2000) text.setColor(Renderer.YELLOW)
    if(displayTimer <= 750) text.setColor(Renderer.RED)
    text.draw()
})