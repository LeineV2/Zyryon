import config from "../../config"
import variables from "../../utils/variables"

register("chat", (name, mf) => {
        // thx to sirence11 for permanently letting me borrow the code lov u <3
        const ShareMessage = new Message(
            new TextComponent(`${variables.PREFIX}Do you Wanna Send your &e${name} &7with &b${mf}% Magic Find &7to `),
            new TextComponent(`&7[ALL]`).setClick(`run_command`, `/ac RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to All Chat`),
            new TextComponent(` `),
            new TextComponent(`&9[PARTY]`).setClick(`run_command`, `/pc RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Party Chat`),
            new TextComponent(` `),
            new TextComponent(`&a[GUILD]`).setClick(`run_command`, `/gc RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Guild Chat`)
        )
    if(!config.DropsChatMsg) return
    if(!config.RAREDROP) return
    if(config.ChatMessageInstad) return ChatLib.chat(ShareMessage)
    if(config.sendingloc == 0){
        ChatLib.command(`ac RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 1){
        ChatLib.command(`pc RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 2){
        ChatLib.command(`gc RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 3){
        ChatLib.command(`gc RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`pc RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 4){
        ChatLib.command(`ac RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`gc RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`pc RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
}).setCriteria("RARE DROP! ${name} (+${mf}% ✯ Magic Find)")

register("chat", (name, mf) => {
        // thx to sirence11 for permanently letting me borrow the code lov u <3
        const ShareMessage = new Message(
            new TextComponent(`${variables.PREFIX}Do you Wanna Send your &d${name} &7with &b${mf}% Magic Find &7to `),
            new TextComponent(`&7[ALL]`).setClick(`run_command`, `/ac CRAZY RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to All Chat`),
            new TextComponent(` `),
            new TextComponent(`&9[PARTY]`).setClick(`run_command`, `/pc CRAZY RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Party Chat`),
            new TextComponent(` `),
            new TextComponent(`&a[GUILD]`).setClick(`run_command`, `/gc CRAZY RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Guild Chat`)
        )
    if(!config.DropsChatMsg) return
    if(!config.CRAZYRAREDROP) return
    if(config.ChatMessageInstad) return ChatLib.chat(ShareMessage)
    if(config.sendingloc == 0){
        ChatLib.command(`ac CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 1){
        ChatLib.command(`pc CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 2){
        ChatLib.command(`gc CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 3){
        ChatLib.command(`gc CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`pc CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 4){
        ChatLib.command(`ac CRAZY RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`gc CRAZY RARE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`pc RARE CRAZY DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
}).setCriteria("CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)")

register("chat", (name, mf) => {
    // thx to sirence11 for permanently letting me borrow the code lov u <3
    const ShareMessage = new Message(
        new TextComponent(`${variables.PREFIX}Do you Wanna Send your &c${name} &7with &b${mf}% Magic Find &7to `),
        new TextComponent(`&7[ALL]`).setClick(`run_command`, `/ac INSANE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to All Chat`),
        new TextComponent(` `),
        new TextComponent(`&9[PARTY]`).setClick(`run_command`, `/pc INSANE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Party Chat`),
        new TextComponent(` `),
        new TextComponent(`&a[GUILD]`).setClick(`run_command`, `/gc INSANE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Guild Chat`)
    )
    if(!config.DropsChatMsg) return
    if(!config.INSANEDROP) return
    if(config.ChatMessageInstad) return ChatLib.chat(ShareMessage)
    if(config.sendingloc == 0){
        ChatLib.command(`ac INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 1){
        ChatLib.command(`pc INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 2){
        ChatLib.command(`gc INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 3){
        ChatLib.command(`gc INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`pc INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)`)
        return
    }
    if(config.sendingloc == 4){
        ChatLib.command(`ac INSANE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`gc INSANE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        ChatLib.command(`pc INSANE DROP! ${name} (+${mf}% ✯ Magic Find)`)
        return
    }
}).setCriteria("INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)")