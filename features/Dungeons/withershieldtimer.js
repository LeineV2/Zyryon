/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import { Soundutils } from "../../utils/utils";
import data from "../../data_";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"

let startTimer = null
let a = false
let b = false

register("renderOverlay", () => {
    if (!startTimer) return;
    const displayTimer = Math.max(0, 5000 - (Date.now() - startTimer));
    const timerCheck = displayTimer > 0;
    if (!timerCheck) return startTimer = null
    const formattedTime = (displayTimer / 1000).toFixed(1)
    const text = new Text(formattedTime, data.withershieldx, data.withershieldy).setAlign("CENTER").setColor(Renderer.GREEN).setScale(1).setShadow(true)
    if (displayTimer <= 2500) text.setColor(Renderer.YELLOW);
    if (displayTimer <= 1250) text.setColor(Renderer.RED);
    text.draw();
});

register("soundPlay", (pos, name, vol, pitch, cate) => {
    if(!config().withershieldtimer) return
    a = true
    if(a) {
        if(b) return
        b = true
        startTimer = Date.now()
    }
    setTimeout(() => {
        a = false
        b = false
        Soundutils.ping()
    }, (5000));
}).setCriteria("mob.zombie.remedy")

const WitherShieldTimerMoveGUI = new HandleGui("data/DefaultColors.json", "Zyryon")
let buttonTest = new ButtonElement(`&b&lToggle Shadow ${data.withershield.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let transParentColor = ElementUtils.getJavaColor([0, 0, 0, 0])
let testBg = new UIBlock(transParentColor)
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(WitherShieldTimerMoveGUI.window)

buttonTest._create().setChildOf(testBg)
buttonTest.onMouseClickEvent(() => {
    data.withershield.shadow = !data.withershield.shadow
    data.save()
    buttonTest.text.setText(`&b&lToggle Shadow ${data.withershield.shadow ? "&aOn" : "&cOff"}`)
})

buttonTest.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
WitherShieldTimerMoveGUI.ctGui.registerMouseDragged(() => {
    data.withershield.x = Client.getMouseX()
    data.withershield.y = Client.getMouseY()
})
WitherShieldTimerMoveGUI.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.withershield.scale += 0.05
    else data.withershield.scale -= 0.05
    data.save()
})

register("renderOverlay", () => {
    if(!WitherShieldTimerMoveGUI.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing Wither Shield Timer`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.withershield.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
    const text3 = new Text(`5.0`, data.withershieldx, data.withershieldy)
    .setAlign("CENTER")
    .setColor(Renderer.GREEN)
    .setShadow(true)
    text3.draw()
})

register("command", () => {
    WitherShieldTimerMoveGUI.ctGui.open()
}).setName("openwithershieldtimermovegui")