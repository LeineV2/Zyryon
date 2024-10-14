import config from "../../config";
import { Soundutils, title } from "../../utils/utils";
import data from "../../data_";
import { onTick } from "../../../ServerTick";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"
const CustomStormLightningTimerMoveGUI = new HandleGui("data/DefaultColors.json", "Zyryon")
let list = [];

let timer = null;
let show = false;
let timer2 = 0;
let startlistining = false;


onTick(() => {
    if(!startlistining) return;
    timer2 += 50;
})

onTick(() => {
    if (!config().customstormlightningtimer) return;
    if (timer <= 0) return (timer = null, show = false);
    timer -= 50;

    if (timer <= 1 && !show) {
        show = true;
        title(`&a&lStorm Lightning Ended!`, ` `, 2000, Renderer.screen.getHeight() / 6.5, 2.5, true);
        Soundutils.ping()
        setTimeout(() => {
            show = false;
        }, 1500);
    }
});
register("renderTitle", (t, subtitle, event) => {
    if(!config().customstormlightningtimer) return;
    if(t.removeFormatting() == "6") {
        cancel(event);
        startlistining = true;
        if(timer) return;
        timer = 7350;
        Soundutils.ping()
        title(`&c&lStorm Lightning Incoming!`, ` `, 2000, Renderer.screen.getHeight() / 6.5, 2.5, true)
    } else if(t.removeFormatting() == "5") {
        cancel(event);
    } else if(t.removeFormatting() == "4") {
        cancel(event);
        startlistining = true;
        if(timer) return;
        timer = 5350;
        Soundutils.ping()
        title(`&c&lStorm Lightning Incoming!`, ` `, 2000, Renderer.screen.getHeight() / 6.5, 2.5, true)
    } else if(t.removeFormatting() == "3") {
        cancel(event);
    } else if(t.removeFormatting() == "2") {
        cancel(event);
    } else if(t.removeFormatting() == "1") {
        cancel(event);
    }
})

register("renderOverlay", () => {
    if(!config().customstormlightningtimer) return;
    if(!timer) return;
    const formtimer = new Text((timer / 1000).toFixed(2), data.stormtimer.x, data.stormtimer.y)
        .setAlign("CENTER")
        .setScale(data.stormtimer.scale)
        .setColor(Renderer.RED)
    formtimer.draw();
})

register("renderOverlay", () => {
    if(!CustomStormLightningTimerMoveGUI.ctGui.isOpen()) return;
    const text = new Text(`7.35`, data.stormtimer.x, data.stormtimer.y)
    .setScale(data.stormtimer.scale)
    .setAlign("CENTER")
    .setShadow(true)
    text.draw();
})

register("renderOverlay", () => {
    if(!CustomStormLightningTimerMoveGUI.ctGui.isOpen()) return;
    const text = new Text(`&b&lCurrently Editing Custom Storm Lightning Timer`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
    .setScale(3)
    .setAlign("CENTER")
    .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.stormtimer.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
    .setScale(2)
    .setAlign("CENTER")
    .setShadow(true)
    text.draw();
    text2.draw();
})

let buttonTest = new ButtonElement(`&b&lToggle Shadow ${data.stormtimer.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let transParentColor = ElementUtils.getJavaColor([0, 0, 0, 0])
let testBg = new UIBlock(transParentColor)
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(CustomStormLightningTimerMoveGUI.window)

buttonTest._create().setChildOf(testBg)
buttonTest.onMouseClickEvent(() => {
    data.stormtimer.shadow = !data.stormtimer.shadow
    data.save()
    buttonTest.text.setText(`&b&lToggle Shadow ${data.stormtimer.shadow ? "&aOn" : "&cOff"}`)
})

buttonTest.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
CustomStormLightningTimerMoveGUI.ctGui.registerMouseDragged(() => {
    data.stormtimer.x = Client.getMouseX()
    data.stormtimer.y = Client.getMouseY()
})
CustomStormLightningTimerMoveGUI.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.stormtimer.scale += 0.05
    else data.stormtimer.scale -= 0.05
    data.save()
})

register("command", () => {
    CustomStormLightningTimerMoveGUI.ctGui.open()
}).setName("openstormlightningtimermovegui")