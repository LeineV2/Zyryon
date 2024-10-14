import config from "../../config"

register("chat", (name, mf) => {
        // thx to sirence11 for permanently letting me borrow the code lov u <3
        const ShareMessage = new Message(
            new TextComponent(`&bZyryon&f&8 >&7 Do you Wanna Send your &e${name} &7with &b${mf}% Magic Find &7to `),
            new TextComponent(`&7[ALL]`).setClick(`run_command`, `/ac RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to All Chat`),
            new TextComponent(` `),
            new TextComponent(`&9[PARTY]`).setClick(`run_command`, `/pc RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Party Chat`),
            new TextComponent(` `),
            new TextComponent(`&a[GUILD]`).setClick(`run_command`, `/gc RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Guild Chat`)
        )
    if(!config().DropsChatMsg) return
    if(!config().RAREDROP) return
    ChatLib.chat(ShareMessage)
}).setCriteria("RARE DROP! ${name} (+${mf}% ✯ Magic Find)")

register("chat", (name, mf) => {
        // thx to sirence11 for permanently letting me borrow the code lov u <3
        const ShareMessage = new Message(
            new TextComponent(`&bZyryon&f&8 >&7 Do you Wanna Send your &d${name} &7with &b${mf}% Magic Find &7to `),
            new TextComponent(`&7[ALL]`).setClick(`run_command`, `/ac CRAZY RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to All Chat`),
            new TextComponent(` `),
            new TextComponent(`&9[PARTY]`).setClick(`run_command`, `/pc CRAZY RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Party Chat`),
            new TextComponent(` `),
            new TextComponent(`&a[GUILD]`).setClick(`run_command`, `/gc CRAZY RARE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Guild Chat`)
        )
    if(!config().DropsChatMsg) return
    if(!config().CRAZYRAREDROP) return
    ChatLib.chat(ShareMessage)
}).setCriteria("CRAZY RARE DROP! (${name}) (+${mf}% ✯ Magic Find)")

register("chat", (name, mf) => {
    // thx to sirence11 for permanently letting me borrow the code lov u <3
    const ShareMessage = new Message(
        new TextComponent(`&bZyryon&f&8 >&7 Do you Wanna Send your &c${name} &7with &b${mf}% Magic Find &7to `),
        new TextComponent(`&7[ALL]`).setClick(`run_command`, `/ac INSANE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to All Chat`),
        new TextComponent(` `),
        new TextComponent(`&9[PARTY]`).setClick(`run_command`, `/pc INSANE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Party Chat`),
        new TextComponent(` `),
        new TextComponent(`&a[GUILD]`).setClick(`run_command`, `/gc INSANE DROP (${name}) (+${mf}% ✯ Magic Find)`).setHoverValue(`&bShare to Guild Chat`)
    )
    if(!config().DropsChatMsg) return
    if(!config().INSANEDROP) return
    ChatLib.chat(ShareMessage)
}).setCriteria("INSANE DROP! (${name}) (+${mf}% ✯ Magic Find)")