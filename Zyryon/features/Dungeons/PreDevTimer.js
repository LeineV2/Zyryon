import config from "../../config"
import { prefix, isPlayerInArea, debugmsg, getClass } from "../../utils/utils";
import data from "../../data_";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"

export let pd = false
let pdtimeshow = false
let pdtime = 0
let lights = false
let lightsTime = 0
let align = false
let alignTime = 0

function reset(){
    pd = false
    pdtime = 0
    lights = false
    lightsTime = 0
    align = false
    alignTime = 0
}

register("chat", () => {
    if(!config().PreDevTimer && getClass() !== "Healer") return
    reset()
    pd = true;
    pdtimeshow = true;
}).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")

register("step", () => {
    if(!pd) return
    pdtime += 50
    if(!lights) lightsTime += 50
    if(!align) alignTime += 50
}).setFps(20)

register("chat", () => {
    if(config().IgnoreClassCheck && getClass() === "Healer") return
    if(config().PreDevTimer && !config().PreDevTimerIncPB && !config().PreDevTimerOnlyPB && pd && lights && align){
        ChatLib.chat(ChatLib.getChatBreak("&b-"))
        prefix(`&fLights &7Took &6${(lightsTime / 1000).toFixed(2)}s to get to! ${lightsTime < data.pbs.lights ? "&d&l(NEW PB)!" : " "}`)
        prefix(`&fAlign &7Took &6${(alignTime / 1000).toFixed(2)}s to get to! ${alignTime < data.pbs.align ? "&d&l(NEW PB)!" : " "}`)
        prefix(`&bPredev &7Took &6${(pdtime / 1000).toFixed(2)}s! ${pdtime < data.pbs.pd ? "&d&l(NEW PB)!" : " "}`)
        ChatLib.chat(ChatLib.getChatBreak("&b-"))
    }
    if(config().PreDevTimer && pd && lights && align){
        if(data.pbs.pd > pdtime) {
            data.pbs.pd = pdtime
            data.save()
        }
    }
    if(config().PreDevTimer && config().PreDevTimerIncPB && !config().PreDevTimerOnlyPB && pd && data.pbs.pd < pdtime && lights && align){
        prefix(`&fLights &6Took &6${(lightsTime / 1000).toFixed(2)}s to get to! &7(${data.pbs.lights / 1000}s PB)!`)
        prefix(`&fAlign &6Took &6${(alignTime / 1000).toFixed(2)}s to get to! &7(${data.pbs.align / 1000}s PB)!`)
        prefix(`&bPredev Took &6${(pdtime / 1000).toFixed(2)}s! &7(${data.pbs.pd / 1000}s PB)!`)
    }
    Client.scheduleTask(20, () => {
        pd = false
    })
    setTimeout(() => {
        pdtimeshow = false
        pdtime = 0
    }, 2500);
}).setCriteria("You have teleported to ${*}!")


register("tick", () => {
    if(config().IgnoreClassCheck && getClass() !== "Healer") return
    if(isPlayerInArea([56, 129, 135], [64, 136, 142])){
        if(!lights && pd){
            lights = true
            if(data.pbs.lights > lightsTime){
                data.pbs.lights = lightsTime
                data.save()
                prefix(`Lights took &6${(lightsTime / 1000).toFixed(2)}s! &d&l(NEW PB)!`)
            } else if (config().PreDevTimerIncPB){
                prefix(`Lights took &6${(lightsTime / 1000).toFixed(2)}s! &d7${data.pbs.lights / 1000}s PB)!`)
            } else if (config().PreDevTimerOnlyPB){
                prefix(`Lights took &6${(lightsTime / 1000).toFixed(2)}s!`)
            } else {
                prefix(`Lights took &6${(lightsTime / 1000).toFixed(2)}s!`)
            }
        }
    }
    if(isPlayerInArea([-3, 120, 75], [4, 124, 79])){
        if(!align && pd){
            align = true
            if(data.pbs.align > alignTime){
                data.pbs.align = alignTime
                data.save()
                prefix(`Align took &6${(alignTime / 1000).toFixed(2)}s! &d&l(NEW PB)!`)
            } else if (config().PreDevTimerIncPB){
                prefix(`Align took &6${(alignTime / 1000).toFixed(2)}s! &7(${data.pbs.align / 1000}s PB)!`)
            } else if (config().PreDevTimerOnlyPB){
                prefix(`Align took &6${(alignTime / 1000).toFixed(2)}s!`)
            } else {
                prefix(`Align took &6${(alignTime / 1000).toFixed(2)}s!`)
            }
        }
    }
})

register("renderOverlay", () => {
    if(config().PreDevTimerLive && pdtimeshow){
        if(config().IgnoreClassCheck && getClass() !== "Healer") return
        const format = (pdtime / 1000).toFixed(2)
        const str = new Text(format, data.pdtimer.x, data.pdtimer.y).setScale(data.pdtimer.scale).setColor(Renderer.RED).setAlign("CENTER").setShadow(data.pdtimer.shadow)
        str.draw()
    }
    if(PreDevTimerMoveGUI.ctGui.isOpen()) {
        const text = new Text(`&b&lCurrently Editing Predev Live Timer`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6).setScale(3).setAlign("CENTER").setShadow(true)
        const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.pdtimer.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4).setScale(2).setAlign("CENTER").setShadow(true)
        const text3 = new Text(`0.00`, data.pdtimer.x, data.pdtimer.y).setScale(data.pdtimer.scale).setAlign("CENTER").setShadow(data.pdtimer.shadow).setColor(Renderer.RED)
        text.draw();
        text2.draw();
        text3.draw();
    }
})

register("worldUnload", () => {
    reset()
})

const PreDevTimerMoveGUI = new HandleGui("data/DefaultColors.json", "Zyryon")
let buttonTest = new ButtonElement(`&b&lToggle Shadow ${data.pdtimer.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let transParentColor = ElementUtils.getJavaColor([0, 0, 0, 0])
let testBg = new UIBlock(transParentColor)
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(PreDevTimerMoveGUI.window)

buttonTest._create().setChildOf(testBg)
buttonTest.onMouseClickEvent(() => {
    data.pdtimer.shadow = !data.pdtimer.shadow
    data.save()
    buttonTest.text.setText(`&b&lToggle Shadow ${data.pdtimer.shadow ? "&aOn" : "&cOff"}`)
})

buttonTest.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
PreDevTimerMoveGUI.ctGui.registerMouseDragged(() => {
    data.pdtimer.x = Client.getMouseX()
    data.pdtimer.y = Client.getMouseY()
})
PreDevTimerMoveGUI.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.pdtimer.scale += 0.05
    else data.pdtimer.scale -= 0.05
    data.save()
})

register("command", () => {
    PreDevTimerMoveGUI.ctGui.open()
}).setName("openpredevtimermovegui")