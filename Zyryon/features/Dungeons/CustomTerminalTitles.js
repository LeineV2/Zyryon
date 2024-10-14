import config from "../../config";
import data from "../../data_";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"
const CustomTerminalTitlesMoveGUI = new HandleGui("data/DefaultColors.json", "Zyryon")

let showterm = false
let showdev = false
let showlever = false
let playername = "null"
let td = 0
let tm = 0

register("renderTitle", (title, subtitle, event) => {
    if(!config().customterminals) return
    if(subtitle.includes("activated a terminal!")){
        cancel(event)
    } else if(subtitle.includes("completed a device!")){
        cancel(event)
    } else if(subtitle.includes("activated a lever!")){
        cancel(event)
    }
})

register("chat", (name, termsdone, terms, event) => {
    const color = getColor(td, tm);
    showterm = true;
    showdev = false;
    showlever = false;
    playername = name;
    td = termsdone;
    tm = terms;
    setTimeout(() => {
        showterm = false;
    }, config().customterminalsduration * 1000);
    if(!config().customterminalmessage) return
    cancel(event)
    ChatLib.chat(`${name} &dTerminal! &7(${color}${termsdone}&7/${terms}&7)`)
}).setCriteria("${name} activated a terminal! (${termsdone}/${terms})");

register("chat", (name, termsdone, terms, event) => {
    const color = getColor(td, tm);
    showdev = true;
    showterm = false;
    showlever = false;
    playername = name;
    td = termsdone;
    tm = terms;
    setTimeout(() => {
        showdev = false;
    }, config().customterminalsduration * 1000);
    if(!config().customterminalmessage) return
    cancel(event)
    ChatLib.chat(`${name} &bDevice! &7(${color}${termsdone}&7/${terms}&7)`)
}).setCriteria("${name} completed a device! (${termsdone}/${terms})");

register("chat", (name, termsdone, terms, event) => {
    const color = getColor(td, tm);
    showlever = true;
    showterm = false;
    showdev = false;
    playername = name;
    td = termsdone;
    tm = terms;
    setTimeout(() => {
        showlever = false;
    }, config().customterminalsduration * 1000);
    if(!config().customterminalmessage) return
    cancel(event)
    ChatLib.chat(`${name} &cLever! &7(${color}${termsdone}&7/&a${terms}&7)`)
}).setCriteria("${name} activated a lever! (${termsdone}/${terms})");

function getColor(td, tm) {
    const percentage = (td / tm) * 100;
    if (percentage < 50) {
        return "§c"; // red
    } else if (percentage < 75) {
        return "§e"; // yellow
    } else if (percentage < 90) {
        return "§a"; // green
    } else if (percentage <= 100) {
        return "§a"; // green
    } else {
        return "§7"; // grey or default
    }
}

register("renderOverlay", () => {
    if(!config().customterminals) return
    const color = getColor(td, tm);

    if (showterm && config().customterminalsmode == 0) {
        const text = new Text(`${playername} &dTerminal! &7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if (showterm && config().customterminalsmode == 1) {
        const text = new Text(`&dTerminal! &7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if (showterm && config().customterminalsmode == 2) {
        const text = new Text(`&7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    }
    if (showdev && config().customterminalsmode == 0) {
        const text = new Text(`${playername} &bDevice! &7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if (showdev && config().customterminalsmode == 1) {
        const text = new Text(`&bDevice! &7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if (showdev && config().customterminalsmode == 2) {
        const text = new Text(`&7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    }
    if (showlever && config().customterminalsmode == 0) {
        const text = new Text(`${playername} &cLever! &7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if (showlever && config().customterminalsmode == 1) {
        const text = new Text(`&cLever! &7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if (showlever && config().customterminalsmode == 2) {
        const text = new Text(`&7(${color}${td}&7/&a${tm}&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    }
});

register("renderOverlay", () => {
    if(!CustomTerminalTitlesMoveGUI.ctGui.isOpen()) return
    if(config().customterminalsmode == 0){
    const text = new Text(`Name &dTerminal! &7(&a6&7/&a8&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
    text.draw();
    } else if(config().customterminalsmode == 1){
        const text = new Text(`&dTerminal! &7(&a6&7/&a8&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    } else if(config().customterminalsmode == 2){
        const text = new Text(`&7(&e4&7/&a8&7)`, data.customtermtitle.x, data.customtermtitle.y)
            .setAlign("CENTER")
            .setScale(data.customtermtitle.scale)
            .setShadow(data.customtermtitle.shadow);
        text.draw();
    }
})

register("renderOverlay", () => {
    if(!CustomTerminalTitlesMoveGUI.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing Custom Terminal Titles`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
    .setScale(3)
    .setAlign("CENTER")
    .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.customtermtitle.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
    .setScale(2)
    .setAlign("CENTER")
    .setShadow(true)
    text.draw();
    text2.draw();
});

let buttonTest = new ButtonElement(`&b&lToggle Shadow ${data.customtermtitle.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let transParentColor = ElementUtils.getJavaColor([0, 0, 0, 0])
let testBg = new UIBlock(transParentColor)
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(CustomTerminalTitlesMoveGUI.window)

buttonTest._create().setChildOf(testBg)
buttonTest.onMouseClickEvent(() => {
    data.customtermtitle.shadow = !data.customtermtitle.shadow
    data.save()
    buttonTest.text.setText(`&b&lToggle Shadow ${data.customtermtitle.shadow ? "&aOn" : "&cOff"}`)
})

buttonTest.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
CustomTerminalTitlesMoveGUI.ctGui.registerMouseDragged(() => {
    data.customtermtitle.x = Client.getMouseX()
    data.customtermtitle.y = Client.getMouseY()
})
CustomTerminalTitlesMoveGUI.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.customtermtitle.scale += 0.05
    else data.customtermtitle.scale -= 0.05
    data.save()
})

register("command", () => {
    CustomTerminalTitlesMoveGUI.ctGui.open()
}).setName("opencustomterminalsmovegui")

