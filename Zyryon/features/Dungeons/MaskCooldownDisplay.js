import config from "../../config";
import { onTick } from "../../../ServerTick";
import data from "../../data_";
import { prefix, title } from "../../utils/utils";
import ButtonElement from "../../../DocGuiLib/elements/Button";
import HandleGui from "../../../DocGuiLib/core/Gui";
import { UIBlock, PixelConstraint } from "../../../Elementa"
import ElementUtils from "../../../DocGuiLib/core/Element"

let p3 = false
let bonzoCooldown = false
let bonzoMaskCooldown = 0
let spiritCooldown = false
let spiritMaskCooldown = 0
let pheonixOnCooldown = false
let phoenixCooldown = 0
let bonzoText = ""
let spiritText = ""
let phoenixText = ""
register("renderOverlay", () => {
    if(!config().MaskCooldownTimer || moveGui.ctGui.isOpen()) return
    if(config().MaskCooldownMode == 0) {
        bonzoText = bonzoCooldown ? `§bBonzo: ${bonzoMaskCooldown > 90000 ? "§c" : "§e"}${(bonzoMaskCooldown/1000).toFixed(config().MaskCooldownDigits)}` : "§bBonzo: §aReady";
    } else {
        bonzoText = bonzoCooldown ? `§bBonzo: ${bonzoMaskCooldown > 90000 ? "§c" : "§e"}${(100 - (bonzoMaskCooldown / (360000 - (data.catalvl * 3600))) * 100).toFixed(config().MaskCooldownDigits)}%` : "§bBonzo: §aReady";
    }
    if(config().MaskCooldownMode == 0) {
        spiritText = spiritCooldown ? `§5Spirit: ${spiritMaskCooldown > 15000 ? "§c" : "§e"}${(spiritMaskCooldown/1000).toFixed(2)}` : "§5Spirit: §aReady";
    } else {
        spiritText = spiritCooldown ? `§5Spirit: ${spiritMaskCooldown > 15000 ? "§c" : "§e"}${(100 - (spiritMaskCooldown / 30000) * 100).toFixed(config().MaskCooldownDigits)}%` : "§5Spirit: §aReady";
    }
    if(config().MaskCooldownMode == 0) {
        phoenixText = pheonixOnCooldown ? `§cPhoenix: ${phoenixCooldown > 30000 ? "§c" : "§e"}${(phoenixCooldown/1000).toFixed(2)}` : "§cPhoenix: §aReady";
    } else {
        phoenixText = pheonixOnCooldown ? `§cPhoenix: ${phoenixCooldown > 30000 ? "§c" : "§e"}${(100 - (phoenixCooldown / 60000) * 100).toFixed(config().MaskCooldownDigits)}%` : "§cPhoenix: §aReady";
    }
    if(config().MaskCooldownTimerOnlyP3 && !p3) return
    const text = new Text(`${bonzoText} \n${spiritText} \n${phoenixText}`).setScale(data.maskcooldown.scale).setShadow(data.maskcooldown.shadow);
    Renderer.translate(data.maskcooldown.x, data.maskcooldown.y)

    if (config().MaskCooldownBackground) {
        Renderer.drawRect(
            Renderer.color(0, 0, 0, 255 * 0.25),
            -10, -10, 
            text.getWidth() + 20, 
            text.getHeight() + 20
        )
        text.draw(data.maskcooldown.x, data.maskcooldown.y)
    }
})

register("chat", (event) => {
    const message = ChatLib.getChatMessage(event)
    if(message == "Your Bonzo's Mask saved your life!") {
        if(data.catalvl === null) return prefix(`Please goto your Catacombs Skill to get your mask cooldown time!`)
        bonzoCooldown = true
        bonzoMaskCooldown = 360000 - (data.catalvl * 3600)
        title(" ", "&bBonzo Protected!", 2500, Renderer.screen.getHeight() / 20, 3, true)
    }
    if(message == "Your Phoenix Pet saved you from certain death!") {
        pheonixOnCooldown = true
        phoenixCooldown = 60000
    }
    if(message == "Second Wind Activated! Your Spirit Mask saved your life!") {
        spiritCooldown = true
        spiritMaskCooldown = 30000
    }
})

onTick(() => {
    if(bonzoCooldown && bonzoMaskCooldown >= 0) bonzoMaskCooldown -= 50
    else if (bonzoCooldown) {
        bonzoCooldown = false
        title(" ", "&bBonzo is back!", 2500, Renderer.screen.getHeight() / 20, 3, true)
    }
    if(spiritCooldown && spiritMaskCooldown >= 0) spiritMaskCooldown -= 50
    else if (spiritCooldown) {
        spiritCooldown = false  
        title(" ", "&5Spirit is back!", 2500, Renderer.screen.getHeight() / 20, 3, true)
    }
    if(pheonixOnCooldown && phoenixCooldown >= 0) phoenixCooldown -= 50
    else if (pheonixOnCooldown) {
        pheonixOnCooldown = false
        title(" ", "&cPhoenix is back!", 2500, Renderer.screen.getHeight() / 20, 3, true)
    }
})

register("chat", () => {
    p3 = true
}).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

register("chat", () => {
    p3 = false
}).setCriteria("[BOSS] Goldor: YOU ARE FACE TO FACE WITH GOLDOR!")

const moveGui = new HandleGui()
let buttonTest = new ButtonElement(`&b&lToggle Shadow ${data.maskcooldown.shadow ? "&aOn" : "&cOff"}`, 43, 70, 15, 10)
let transParentColor = ElementUtils.getJavaColor([0, 0, 0, 0])
let testBg = new UIBlock(transParentColor)
    .setX(new PixelConstraint(0))
    .setY(new PixelConstraint(0))
    .setWidth((100).percent())
    .setHeight((100).percent())
    .setChildOf(moveGui.window)

buttonTest._create().setChildOf(testBg)
buttonTest.onMouseClickEvent(() => {
    data.maskcooldown.shadow = !data.maskcooldown.shadow
    data.save()
    buttonTest.text.setText(`&b&lToggle Shadow ${data.maskcooldown.shadow ? "&aOn" : "&cOff"}`)
})

buttonTest.text.setColor(ElementUtils.getJavaColor([255, 0, 0, 255]))
moveGui.ctGui.registerMouseDragged(() => {
    data.maskcooldown.x = Client.getMouseX() - (Renderer.getStringWidth(phoenixText) / 2) * data.maskcooldown.scale
    data.maskcooldown.y = Client.getMouseY() + 10
    data.save()
})
moveGui.ctGui.registerScrolled((mx, my, dir) => {
    if (dir == 1) data.maskcooldown.scale += 0.05
    else data.maskcooldown.scale -= 0.05
    data.save()
})

register("renderOverlay", () => {
    if(!moveGui.ctGui.isOpen()) return;
    const text = new Text(`&b&lCurrently Editing Mask Cooldown`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 6)
        .setScale(3)
        .setAlign("CENTER")
        .setShadow(true)
    const text2 = new Text(`&bClick Anywhere to adjust the Position\n&bScroll to adjust the Scale (&f${data.maskcooldown.scale.toFixed(2)}&b)`, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 4)
        .setScale(2)
        .setAlign("CENTER")
        .setShadow(true)
    text.draw();
    text2.draw();
})

register("renderOverlay", () =>{   
    if(!moveGui.ctGui.isOpen()) return;
    if(config().MaskCooldownMode == 0) {
        bonzoText = bonzoCooldown ? `§bBonzo: ${bonzoMaskCooldown > 90000 ? "§c" : "§e"}${(bonzoMaskCooldown/1000).toFixed(config().MaskCooldownDigits)}` : "§bBonzo: §aReady";
    } else {
        bonzoText = bonzoCooldown ? `§bBonzo: ${bonzoMaskCooldown > 90000 ? "§c" : "§e"}${(100 - (bonzoMaskCooldown / (360000 - (data.catalvl * 3600))) * 100).toFixed(config().MaskCooldownDigits)}%` : "§bBonzo: §aReady";
    }
    if(config().MaskCooldownMode == 0) {
        spiritText = spiritCooldown ? `§5Spirit: ${spiritMaskCooldown > 15000 ? "§c" : "§e"}${(spiritMaskCooldown/1000).toFixed(2)}` : "§5Spirit: §aReady";
    } else {
        spiritText = spiritCooldown ? `§5Spirit: ${spiritMaskCooldown > 15000 ? "§c" : "§e"}${(100 - (spiritMaskCooldown / 30000) * 100).toFixed(config().MaskCooldownDigits)}%` : "§5Spirit: §aReady";
    }
    if(config().MaskCooldownMode == 0) {
        phoenixText = pheonixOnCooldown ? `§cPhoenix: ${phoenixCooldown > 30000 ? "§c" : "§e"}${(phoenixCooldown/1000).toFixed(2)}` : "§cPhoenix: §aReady";
    } else {
        phoenixText = pheonixOnCooldown ? `§cPhoenix: ${phoenixCooldown > 30000 ? "§c" : "§e"}${(100 - (phoenixCooldown / 60000) * 100).toFixed(config().MaskCooldownDigits)}%` : "§cPhoenix: §aReady";
    }
    const text = new Text(`${bonzoText} \n${spiritText} \n${phoenixText}`).setScale(data.maskcooldown.scale).setShadow(data.maskcooldown.shadow);
    Renderer.translate(data.maskcooldown.x, data.maskcooldown.y)
    Renderer.drawRect(Renderer.color(0, 0, 0, 255 * 0.25), -10, -10, Renderer.getStringWidth(text) * 0.13, text.getHeight() + 15)
    text.draw(data.maskcooldown.x, data.maskcooldown.y)
})

register("command", () => {
    moveGui.ctGui.open()
}).setName("openmaskcooldownmovegui")

register("worldUnload", () => {
    spiritCooldown = false
    bonzoCooldown = false
    pheonixOnCooldown = false
    phoenixCooldown = 0
    bonzoMaskCooldown = 0
    spiritMaskCooldown = 0
})