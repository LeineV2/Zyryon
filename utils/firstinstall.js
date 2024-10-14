/// <reference types="../../CTAutocomplete" />
import data from "../data_"

register("step", () => {
    if(!data.firstinstall) return
    data.firstinstall = false
    data.save()
    ChatLib.chat(ChatLib.getChatBreak("&b-"))    
    ChatLib.chat("&b&lThanks for Installing Zyryon")
    ChatLib.chat(" ")
    ChatLib.chat("&bTo Open the Config use /Zyryon")
    ChatLib.chat(ChatLib.getChatBreak("&b-"))    
}).setFps(1)