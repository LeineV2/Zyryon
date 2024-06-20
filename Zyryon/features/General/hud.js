/// <reference types="../../../CTAutocomplete" />

import config from "../../config";

register("renderOverlay", () => {
    if(!config.HudElementsOnScreenMainToggle) return
    if(config.CoorsOnScreen){
    let text = new Text(`Coordinates: \n x: ${Player.getX().toFixed(2)}\n y: ${Player.getZ().toFixed(2)}\n z: ${Player.getZ().toFixed(2)}`, 100, 100)
    text.setColor(config.CoordsHudColor.getRGB())
    text.draw()
    }
})

register("renderOverlay", () => {
    if(!config.HudElementsOnScreenMainToggle) return
    if(!config.FpsOnScren) return  
    const text = new Text(`${Client.getFPS()} FPS`, 100, 50).setAlign("CENTER")
    text.setColor(config.FpsHudColor.getRGB())
    text.draw()
})

register("renderOverlay", () => {
if(!config.HudElementsOnScreenMainToggle) return
if(config.ArmorAndHandOnScreen){
    if(config.Helmet){
        if(Player.armor.getHelmet() !== null){
            Renderer.drawStringWithShadow(Player.armor.getHelmet()?.getName(), 25, 260)
        }
    }

    if(config.Chestplate){
        if(Player.armor.getChestplate() !== null){
            Renderer.drawStringWithShadow(Player.armor.getChestplate()?.getName(), 25,270)
        }
    }
    if(config.Leggings){
        if(Player.armor.getLeggings() !== null){
            Renderer.drawStringWithShadow(Player.armor.getLeggings()?.getName(), 25, 280)
        }
    }

    if(config.Boobs){
        if(Player.armor.getBoots() !== null){
            Renderer.drawStringWithShadow(Player.armor.getBoots()?.getName(), 25, 290)
        }
    }
        
    if(config.Hand){
        if(Player.getHeldItem() !== null){
            Renderer.drawStringWithShadow(Player.getHeldItem()?.getName(), 25, 300)
        }
    }
}})

register("renderOverlay", () => {
    if(!config.HudElementsOnScreenMainToggle) return
    if(!config.MousePosOnScreen) return
    const mousex = Client.getMouseX()
    const mousey = Client.getMouseY()
    const mousextext = new Text(mousex, 500, 100)
    const mouseytext = new Text(mousey, 500, 110)
    mousextext.draw()
    mouseytext.draw()
})

register("renderOverlay", () => {
    const toxicArrowPoison = Player.getInventory().getItems().find(a => a?.getName() == "§aToxic Arrow Poison")?.getStackSize() ?? 0
    const twilightArrowPoison = Player.getInventory().getItems().find(a => a?.getName() == "§aTwilight Arrow Poison")?.getStackSize() ?? 0
    if(!config.DebuffDisplay) return
    Renderer.drawStringWithShadow(`&0&kK&r &2&lDebuff Display &0&kK&r\n &aToxic Arrow Poison&f: &b${toxicArrowPoison}\n &5Twilight Arrow Poison&f: &b${twilightArrowPoison}`, 25, 200)
})

register("renderOverlay", () => {
    if(!config.HudElementsOnScreenMainToggle) return
    if(!config.PitchYawHud) return
    const pitch = Player.getPitch().toFixed(2)
    const yaw = Player.getYaw().toFixed(2)
    const pitchtext = new Text(pitch, Renderer.screen.getWidth() / 2 + 20 , Renderer.screen.getHeight() / 2).setColor(Renderer.GRAY).setShadow(true).setAlign("CENTER").setScale(1.1)
    const yawtext = new Text(yaw, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + 15).setColor(Renderer.GRAY).setShadow(true).setAlign("CENTER").setScale(1.1)
    pitchtext.draw()
    yawtext.draw()
})