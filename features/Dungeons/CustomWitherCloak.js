/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import data from "../../data_";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"

const CustomWitherCloakMoveGUI = new HandleGui("data/DefaultColors.json", "Zyryon")
let cloak = false 
let cloaktext = false

register("renderEntity", (entity, pos, pticks, event) => {
    if(!config().CustomWitherCloak) return;
    if(!cloak) return
    cancel(event);
}).setFilteredClass(net.minecraft.entity.monster.EntityCreeper);

register("spawnParticle", (particle, type, event) => {
    if(!config().CustomWitherCloak) return;
    if(!cloak) return
    if(particle.toString().includes("EntityCrit2FX")){
        cancel(event);
    }
})

register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if(!config().CustomWitherCloak) return;
    if(!Player?.getHeldItem()?.getName()?.includes("Wither Cloak Sword")) return
    if(!cloak) return
    cancel(event);
}).setCriteria("mob.creeper.say")

register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if(!config().CustomWitherCloak) return;
    if(!cloak) return
    cancel(event);
}).setCriteria("mob.skeleton.hurt")

register("chat", () => {
    cloak = true;
    cloaktext = true
}).setCriteria("Creeper Veil Activated!")

register("chat", () => {
    setTimeout(() => {
        cloak = false;
    }, 500);
    cloaktext = false
}).setCriteria("Creeper Veil De-activated!")

register("chat", () => {
    setTimeout(() => {
        cloak = false;
    }, 500);
    cloaktext = false
}).setCriteria("Creeper Veil De-activated! (Expired)")

register("chat", () => {
    setTimeout(() => {
        cloak = false;
    }, 500);
    cloaktext = false
}).setCriteria("Not enough mana! Creeper Veil De-activated!")

register("renderOverlay", () =>{
    if(!cloaktext) return;
    const text = new Text(`Cloak Active!`, data.withercloak.x, data.withercloak.y)
        .setAlign("CENTER")
        .setColor(Renderer.GREEN)
        .setShadow(true)
        .setScale(data.withercloak.scale)
    text.draw();
})

let buttonTest = new ButtonElement(`&b&lToggle Shadow ${data.withercloak.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let transParentColor = ElementUtils.getJavaColor([0, 0, 0, 0])
let testBg = new UIBlock(transParentColor)
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(CustomWitherCloakMoveGUI.window)

buttonTest._create().setChildOf(testBg)
buttonTest.onMouseClickEvent(() => {
    data.withercloak.shadow = !data.withercloak.shadow
    data.save()
    buttonTest.text.setText(`&b&lToggle Shadow ${data.withercloak.shadow ? "&aOn" : "&cOff"}`)
})

buttonTest.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
CustomWitherCloakMoveGUI.ctGui.registerMouseDragged(() => {
    data.withercloak.x = Client.getMouseX()
    data.withercloak.y = Client.getMouseY()
})
CustomWitherCloakMoveGUI.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.withercloak.scale += 0.05
    else data.withercloak.scale -= 0.05
    data.save()
})

register("renderOverlay", () => {
    if(!CustomWitherCloakMoveGUI.ctGui.isOpen()) return;
    const text = new Text(`&b&lCurrently Editing Wither Cloak`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.withercloak.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
})

register("renderOverlay", () =>{    
    if(!CustomWitherCloakMoveGUI.ctGui.isOpen()) return;
    const text = new Text(`Cloak Active!`, data.withercloak.x, data.withercloak.y)
        .setAlign("CENTER")
        .setColor(Renderer.GREEN)
        .setShadow(true)
        .setScale(data.withercloak.scale)
    text.draw();
})

register("command", () => {
    CustomWitherCloakMoveGUI.ctGui.open()
}).setName("openwithercloakmovegui")