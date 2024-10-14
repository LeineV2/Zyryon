import config from "../../config";

let coldreset = false;
register("chat", () => {
if(!config().resetcold) return
setTimeout(() => {
    coldreset = false
}, 1500)
    coldreset = true
}).setCriteria("The warmth of the campfire reduced your ❄ Cold to 0!")

register("renderOverlay", () => {
    if(!coldreset) return;
    const text = new Text("&a&lBack at 0 Cold!", Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - 25).setColor(Renderer.GREEN).setScale(2.5).setShadow(true).setAlign("CENTER")
    text.draw()
})

register("command", () => {
    ChatLib.chat(config().resetcold ? "&aCold Resetter &aEnabled!" : "&cCold Resetter &cDisabled!")
}).setName("ResetColdtest")