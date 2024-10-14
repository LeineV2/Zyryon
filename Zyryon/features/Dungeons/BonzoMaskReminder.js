import config from "../../config"
import { Soundutils, Itemutils } from "../../utils/utils"
import { onTick } from "../../../ServerTick"

let p3 = false
let timer = null

function p3disabler() {
    p3 = false
    timer = null
}

register("chat", () => {
    if(!config().BonzoMaskReminder) return
    p3 = true
}).setCriteria("[BOSS] Storm: I should have known that I stood no chance.")

onTick(() => {
    if(!p3) return
    timer += 50
})

register("Renderoverlay", () => {
    if(!p3) return
    if(timer > 2500) return p3disabler()
    const text = new Text("⚠ BONZO NOT EQUIPPED ⚠", Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - 25).setAlign("CENTER").setScale(2.5).setShadow(true).setColor(Renderer.BLUE)
    if(Itemutils.helmetCheck("Bonzo's mask")) return
    text.draw()
    Soundutils.ping()
})