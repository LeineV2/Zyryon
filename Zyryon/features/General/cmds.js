import variables from "../../utils/variables"

register("command", (fov) => {
    if(fov == undefined) return ChatLib.chat(`${variables.PREFIX}Usage: /setFOV (number)!`)
    if(isNaN(fov)) return ChatLib.chat(`${variables.PREFIX}Please use a Number!`)
    Client.settings.setFOV(fov)
    ChatLib.chat(`${variables.PREFIX}Changed FOV to &b${fov}!`)
}).setName("setFOV").setAliases("fov")

register("command", (mavol) => {
    if(mavol == undefined) return ChatLib.chat(`${variables.PREFIX}Usage: /setVolume (number)`)
    if(isNaN(mavol)) return ChatLib.chat(`${variables.PREFIX}Use a Number Between &b1-100 &7Instad!`)
    if(mavol > 100 || mavol < 0 ) return ChatLib.chat(`${variables.PREFIX}Use a Number Between &b1-100 &7Instad!`)
    Client.settings.sound.setMasterVolume(mavol / 100)
    ChatLib.chat(`${variables.PREFIX}&7Set Master Volume to &b${mavol}!`)
}).setName("setVolume").setAliases("vol")