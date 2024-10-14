/// <reference types="../../../CTAutocomplete" />
import config from "../../config"
let startTimer = null

register("chat", () => {
    if(!config().MiningSpeedBoostTimer) return
    startTimer = Date.now()
}).setChatCriteria("You used your Mining Speed Boost Pickaxe Ability!")

register("renderOverlay",  () => {
    if (!startTimer) return
    const displayTimer = 20000 - (Date.now() - startTimer)
    const timerCheck = displayTimer >= 0 ? true : false
    if (!timerCheck) return startTimer = null
    const formattime = (displayTimer / 1000).toFixed(2)
    const text = new Text(`${formattime}s` , Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + 15).setAlign("CENTER").setColor(Renderer.GREEN).setShadow(true)//.setScale(1.5)
    if(displayTimer <= 7500) text.setColor(Renderer.YELLOW)
    if(displayTimer <= 2550) text.setColor(Renderer.RED)    
    text.draw()
})