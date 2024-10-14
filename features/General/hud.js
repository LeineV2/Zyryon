/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import data from "../../data_";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"

let p5 = false

register("renderOverlay", () => {
    if(!config().HudElementsOnScreenMainToggle) return
    if(!config().FpsOnScren) return  
    const text = new Text(`${Client.getFPS()} FPS`, data.fps.x, data.fps.y).setAlign("CENTER").setScale(data.fps.scale)
    text.setColor(Renderer.GREEN)
    text.setShadow(data.fps.shadow)
    text.draw()
})

const fpsGui = new HandleGui("data/DefaultColors.json", "Zyryon")
let fpsButton = new ButtonElement(`&b&lToggle Shadow ${data.fps.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let fpsBg = new UIBlock(ElementUtils.getJavaColor([0, 0, 0, 0]))
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(fpsGui.window)

fpsButton._create().setChildOf(fpsBg)
fpsButton.onMouseClickEvent(() => {
    data.fps.shadow = !data.fps.shadow
    data.save()
    fpsButton.text.setText(`&b&lToggle Shadow ${data.fps.shadow ? "&aOn" : "&cOff"}`)
})

fpsButton.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
fpsGui.ctGui.registerMouseDragged(() => {
    data.fps.x = Client.getMouseX()
    data.fps.y = Client.getMouseY()
})
fpsGui.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.fps.scale += 0.05
    else data.fps.scale -= 0.05
    data.save()
})

register("command", () => {
    fpsGui.ctGui.open()
}).setName("openfpsMoveGui")

register("renderOverlay", () => {
    if(!fpsGui.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing FPS`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.fps.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
})

register("renderOverlay", () => {
    if(!config().HudElementsOnScreenMainToggle) return
    if(config().ArmorAndHandOnScreen){
    let helmet = Player.armor.getHelmet()?.getName()
    let chestplate = Player.armor.getChestplate()?.getName()
    let leggings = Player.armor.getLeggings()?.getName()
    let boots = Player.armor.getBoots()?.getName()
    let hand = Player.getHeldItem()?.getName()
    if(helmet == null){helmet = ` `} else helmet = `${Player.armor.getHelmet().getName()}`
    if(chestplate == null){chestplate =  ` `} else chestplate = `${Player.armor.getChestplate().getName()}`
    if(leggings == null){leggings = ` `} else leggings = `${Player.armor.getLeggings().getName()}`
    if(boots == null){boots = ` `} else boots = `${Player.armor.getBoots().getName()}`
    if(hand == null){hand = ` `} else hand = `${Player.getHeldItem().getName()}`
    let str = `${helmet}\n${chestplate}\n${leggings}\n${boots}`
    if(config().Hand){str = `${helmet}\n${chestplate}\n${leggings}\n${boots}\n${hand}`
    Renderer.drawStringWithShadow(str, data.armorhud.x, data.armorhud.y)
}}})

const armorGui = new HandleGui("data/DefaultColors.json", "Zyryon")
let armorButton = new ButtonElement(`&b&lToggle Shadow ${data.armorhud.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let armorBg = new UIBlock(ElementUtils.getJavaColor([0, 0, 0, 0]))
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(armorGui.window)

armorButton._create().setChildOf(armorBg)
armorButton.onMouseClickEvent(() => {
    data.armorhud.shadow = !data.armorhud.shadow
    data.save()
    armorButton.text.setText(`&b&lToggle Shadow ${data.armorhud.shadow ? "&aOn" : "&cOff"}`)
})

armorButton.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
armorGui.ctGui.registerMouseDragged(() => {
    data.armorhud.x = Client.getMouseX()
    data.armorhud.y = Client.getMouseY()
})
armorGui.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.armorhud.scale += 0.05
    else data.armorhud.scale -= 0.05
    data.save()
})

register("command", () => {
    armorGui.ctGui.open()
}).setName("openarmorMoveGui")

register("renderOverlay", () => {   
    if(!armorGui.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing Armor and Hand`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.armorhud.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
})

register("renderOverlay", () => {
    if(!config().DebuffDisplay) return 
    if(config().DebuffDisplayOnlyP5 && !p5) return
    const toxicArrowPoison = Player.getInventory().getItems().find(a => a?.getName() == "§aToxic Arrow Poison")?.getStackSize() ?? 0
    const twilightArrowPoison = Player.getInventory().getItems().find(a => a?.getName() == "§aTwilight Arrow Poison")?.getStackSize() ?? 0
    const str = new Text(`&0&kK&r &2&lDebuff Display &0&kK&r\n &aToxic Arrow Poison&f: &b${toxicArrowPoison}\n &5Twilight Arrow Poison&f: &b${twilightArrowPoison}`, data.debuffhud.x, data.debuffhud.y).setScale(data.debuffhud.scale).setAlign("CENTER").setShadow(data.debuffhud.shadow)
    str.draw()
})

const debuffGui = new HandleGui("data/DefaultColors.json", "Zyryon")
let debuffButton = new ButtonElement(`&b&lToggle Shadow ${data.debuffhud.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let debuffBg = new UIBlock(ElementUtils.getJavaColor([0, 0, 0, 0]))
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(debuffGui.window)

debuffButton._create().setChildOf(debuffBg)
debuffButton.onMouseClickEvent(() => {
    data.debuffhud.shadow = !data.debuffhud.shadow
    data.save()
    debuffButton.text.setText(`&b&lToggle Shadow ${data.debuffhud.shadow ? "&aOn" : "&cOff"}`)
})

debuffButton.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
debuffGui.ctGui.registerMouseDragged(() => {
    data.debuffhud.x = Client.getMouseX()
    data.debuffhud.y = Client.getMouseY()
})
debuffGui.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.debuffhud.scale += 0.05
    else data.debuffhud.scale -= 0.05
    data.save()
})

register("command", () => {
    debuffGui.ctGui.open()
}).setName("opendebuffdisplaymovegui")

register("renderOverlay", () => {
    if(!debuffGui.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing Debuff Display`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.debuffhud.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
    const toxicArrowPoison = Player.getInventory().getItems().find(a => a?.getName() == "§aToxic Arrow Poison")?.getStackSize() ?? 0
    const twilightArrowPoison = Player.getInventory().getItems().find(a => a?.getName() == "§aTwilight Arrow Poison")?.getStackSize() ?? 0
    const text3 = new Text(`&0&kK&r &2&lDebuff Display &0&kK&r\n &aToxic Arrow Poison&f: &b${toxicArrowPoison}\n &5Twilight Arrow Poison&f: &b${twilightArrowPoison}`, data.debuffhud.x, data.debuffhud.y)
        .setScale(data.debuffhud.scale)
        .setAlign("CENTER")
        .setShadow(data.debuffhud.shadow);
    text3.draw();
})

register("renderOverlay", () => {
    if(!config().HudElementsOnScreenMainToggle) return
    if(!config().PitchYawHud) return
    const pitch = Player.getPitch().toFixed(2)
    const yaw = Player.getYaw().toFixed(2)
    const pitchtext = new Text(pitch, data.pitch.x, data.pitch.y).setColor(Renderer.GRAY).setShadow(data.pitch.shadow).setAlign("CENTER").setScale(data.pitch.scale)
    const yawtext = new Text(yaw, data.yaw.x, data.yaw.y).setColor(Renderer.GRAY).setShadow(data.yaw.shadow).setAlign("CENTER").setScale(data.yaw.scale)
    pitchtext.draw()
    yawtext.draw()
})

const pitchGui = new HandleGui("data/DefaultColors.json", "Zyryon")
let pitchButton = new ButtonElement(`&b&lToggle Shadow ${data.pitch.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let pitchBg = new UIBlock(ElementUtils.getJavaColor([0, 0, 0, 0]))
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(pitchGui.window)

pitchButton._create().setChildOf(pitchBg)
pitchButton.onMouseClickEvent(() => {
    data.pitch.shadow = !data.pitch.shadow
    data.save()
    pitchButton.text.setText(`&b&lToggle Shadow ${data.pitch.shadow ? "&aOn" : "&cOff"}`)
})

pitchButton.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
pitchGui.ctGui.registerMouseDragged(() => {
    data.pitch.x = Client.getMouseX()
    data.pitch.y = Client.getMouseY()
})
pitchGui.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.pitch.scale += 0.05
    else data.pitch.scale -= 0.05
    data.save()
})

register("command", () => {
    pitchGui.ctGui.open()
}).setName("openpitchMoveGui")

const yawGui = new HandleGui("data/DefaultColors.json", "Zyryon")

register("renderOverlay", () => {
    if(!yawGui.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing Yaw`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.yaw.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
})

let yawButton = new ButtonElement(`&b&lToggle Shadow ${data.yaw.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let yawBg = new UIBlock(ElementUtils.getJavaColor([0, 0, 0, 0]))
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(yawGui.window)

yawButton._create().setChildOf(yawBg)
yawButton.onMouseClickEvent(() => {
    data.yaw.shadow = !data.yaw.shadow
    data.save()
    yawButton.text.setText(`&b&lToggle Shadow ${data.yaw.shadow ? "&aOn" : "&cOff"}`)
})

yawButton.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
yawGui.ctGui.registerMouseDragged(() => {
    data.yaw.x = Client.getMouseX()
    data.yaw.y = Client.getMouseY()
})
yawGui.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.yaw.scale += 0.05
    else data.yaw.scale -= 0.05
    data.save()
})

register("command", () => {
    yawGui.ctGui.open()
}).setName("openyawMoveGui")

register("renderOverlay", () => {
    if(!pitchGui.ctGui.isOpen()) return
    const text = new Text(`&b&lCurrently Editing Pitch`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.pitch.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
})

const pitchGui2 = new HandleGui("data/DefaultColors.json", "Zyryon")
let pitchButton2 = new ButtonElement(`&b&lToggle Shadow ${data.pitch.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let pitchBg2 = new UIBlock(ElementUtils.getJavaColor([0, 0, 0, 0]))
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(pitchGui2.window)

pitchButton2._create().setChildOf(pitchBg2)
pitchButton2.onMouseClickEvent(() => {
    data.pitch.shadow = !data.pitch.shadow
    data.save()
    pitchButton2.text.setText(`&b&lToggle Shadow ${data.pitch.shadow ? "&aOn" : "&cOff"}`)
})

pitchButton2.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
pitchGui2.ctGui.registerMouseDragged(() => {
    data.pitch.x = Client.getMouseX()
    data.pitch.y = Client.getMouseY()
})
pitchGui2.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.pitch.scale += 0.05
    else data.pitch.scale -= 0.05
    data.save()
})

register("command", () => {
    pitchGui2.ctGui.open()
}).setName("openpitch2MoveGui")

register("chat", () => {
    p5 = true
}).setCriteria("[BOSS] Wither King: You... again?")

register("worldUnload", () => {
    p5 = false
})