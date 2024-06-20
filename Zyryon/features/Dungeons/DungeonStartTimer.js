/// <reference types="../../../CTAutocomplete" />
import config from "../../config";
let startTimer = null

register("chat", () => {
    if(!config.DungeonStartTimer) return
    startTimer = Date.now()
}).setChatCriteria("Starting in 4 seconds.")

register("renderOverlay",  () => {
    if (!startTimer) return
    const displayTimer = 4000 - (Date.now() - startTimer)
    const timerCheck = displayTimer >= 0 ? true : false
    if (!timerCheck) return startTimer = null
    const text = new Text(displayTimer / 1000, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - 15).setAlign("CENTER").setColor(Renderer.GREEN).setScale(1.5)
    if(displayTimer <= 2500) text.setColor(Renderer.YELLOW)
    if(displayTimer <= 1250) text.setColor(Renderer.RED)    
    text.draw()
})