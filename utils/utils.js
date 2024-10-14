import { matchAllLines } from "../../BloomCore/utils/Utils"
import { onTick } from "../../ServerTick"

/**
 * Used to send a message to the chat with the prefix
 * @param {string} msg
 */
export function prefix(msg) {
    ChatLib.chat("&bZyryon&8 >> &6" + msg)
}

/**
 * Used to send a message to the chat with the debug prefix
 * @param {string} msg
 */
export function debugmsg(msg) {
    ChatLib.chat("&eZyryon&8 >> &6" + msg)
}

export class Itemutils {
    
    /**
     * Used to find the index of a certain item
     * @param {string} name
     * @returns {number}
     */
    static GetIndexOf(name) {
        return Player.getInventory().getItems().findIndex(a => a?.getName()?.removeFormatting()?.includes(name))
    }

    /**
     * Used to get the stack size of a certain item
     * @param {string} name
     * @returns {number}
     */
    static GetStackSizeOf(name) {
        return Player.getInventory().getItems().find(a => a?.getName()?.removeFormatting() == name)?.getStackSize() ?? 0
    }

    /**
     * Used to check if the held item is a certain name
     * @param {string} name
     * @return {boolean}
     */
    static HeldItemCheck(name) {
        return Player.getHeldItem()?.getName()?.includes(name)
    }

    /**
     * Used to check if the inventory contains a certain item
     * @param {string} name
     * @return {boolean}
     */
    static InvCheck(name) {
        return Player.getInventory().getItems().find(a => a?.getName()?.includes(name))
    }

    /**
     * Used to check if the lore of a certain item contains a certain string
     * @param {string} name
     * @param {string} lorestring
     * @return {boolean}
     */
    static IsInLore(name, lorestring) {
        const lore = Player.getInventory().getItems().find(a => a?.getName()?.removeFormatting()?.includes(name))?.getLore()
        lore.forEach(line => {
            if(line.includes(lorestring)) return true
        })
        return false
    }

    /**
     * Used to check if the helmet is a certain name
     * @param {string} name
     * @return {boolean}
     */
    static helmetCheck(name) {
        return Player.armor.getHelmet()?.getName()?.includes(name)
    }

    /**
     * Used to check if the chestplate is a certain name
     * @param {string} name
     * @return {boolean}
     */
    static chestCheck(name) {
        return Player.armor.getChestplate()?.getName()?.includes(name)
    }

    /**
     * Used to check if the leggings are a certain name
     * @param {string} name
     * @return {boolean}
     */
    static legginsCheck(name) {
        return Player.armor.getLeggings()?.getName()?.includes(name)
    }   

    /**
     * Used to check if the boots are a certain name
     * @param {string} name
     * @return {boolean}
     */
    static bootsCheck(name) {
        return Player.armor.getBoots()?.getName()?.includes(name)
    }
}

export class Soundutils {
    static meow() {
        World.playSound("mob.cat.meow", 1, 1)
    }

    static ping() {
        World.playSound("random.levelup", 1, 1)
    }
    
    static note() {
        World.playSound("note.pling", 1, 2)
    }
}

export class Timerutils {

    /**
     * Used to create a timer
     * @param {number} Duration
     * @param {number} digits
     * @param {number} scale
     * @param {number} CrosshairOffset
     * + positive = down 
     * - negative = up
     */
static Timer(Duration, scale, CrosshairOffset) {
    let startTimer = null
    startTimer = Date.now()
    register("renderOverlay", () => {
    if (!startTimer) return;
    const displayTimer = Math.max(0, Duration - (Date.now() - startTimer));
    const timerCheck = displayTimer > 0;
    if (!timerCheck) return startTimer = null
    const formattedTime = (displayTimer / 1000).toFixed(2)
    const text = new Text(formattedTime, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + CrosshairOffset).setAlign("CENTER").setColor(Renderer.GREEN).setScale(scale)
    if (displayTimer <= Duration * 0.4) text.setColor(Renderer.YELLOW);
    if (displayTimer <= Duration * 0.25) text.setColor(Renderer.RED);
    text.draw();
    });
}

/**
 * Used to create a tick timer
 * @param {number} Duration
 * @param {number} scale
 * @param {number} CrosshairOffset
 * + positive = down 
 * - negative = up
 */
static TickTimer(Duration, scale, CrosshairOffset) {

function h() {
    start = false
    timer = null
}

let start = false
let timer = null
timer = Duration
start = true

register("renderOverlay", () => {
    if (!start) return;
    const text = new Text((timer/1000).toFixed(2), Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + CrosshairOffset).setAlign("CENTER").setColor(Renderer.GREEN).setScale(scale)
    if (timer <= Duration * 0.4) text.setColor(Renderer.YELLOW);
    if (timer <= Duration * 0.25) text.setColor(Renderer.RED);
    text.draw();
})

onTick(() => {
    if (!start) return;
    if(timer <= 0) return h()
    timer -= 50
})
}
}
export class F7M7utils {

    static IsInMaxor() {
        let isInMaxor = false

        register("chat", () => {
            isInMaxor = true
        }).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")

        register("chat", () => {
            isInMaxor = false
        }).setCriteria("[BOSS] Storm: Pathetic Maxor, just like expected.")

        return isInMaxor
    }

    static IsInStorm() {
        let isInInStorm = false

        register("chat", () => {
            isInInStorm = true
        }).setCriteria("[BOSS] Storm: Pathetic Maxor, just like expected.")

        register("chat", () => {
            isInInStorm = false
        }).setCriteria("[BOSS] Storm: At least my son died by your hands.")

        return isInInStorm
    }
    
    static IsInGoldor() {
        let isInGoldor = false

        register("chat", () => {
            isInGoldor = true
        }).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")

        register("chat", () => {
            isInGoldor = false
        }).setCriteria("[BOSS] Goldor: YOU ARE FACE TO FACE WITH GOLDOR!")

        return isInGoldor
    }

    static IsInNecron() {
        let isInNecron = false

        register("chat", () => {
            isInNecron = true
        }).setCriteria("[BOSS] Necron: You went further than any human before, congratulations.")

        register("chat", () => {
            isInNecron = false
        }).setCriteria("[BOSS] Necron: All this, for nothing...")

        return isInNecron
    }

    static IsInP5() {
        let isInP5 = false

        register("chat", () => {
            isInP5 = true
        }).setCriteria("[BOSS] Wither King: You... again?")

        register("worldUnload", () => {
            isInP5 = false
        })

        return isInP5
    }

    static IsInBoss() {
        let inBoss = false
        
        register("chat", () => {
            inBoss = true
        }).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!")

        register("chat", () => {
            inBoss = false
        }).setCriteria("                             > EXTRA STATS <").setContains()

        return inBoss
    }
}

export function getClass() {
    let index = TabList?.getNames()?.findIndex(line => line?.includes(Player.getName()))
    if (index == -1) return
    let match = TabList?.getNames()[index]?.removeFormatting().match(/.+ \((.+) .+\)/)
    if (!match) return "EMPTY"
    return match[1];
}

/**
 * Used to send a title
 * @param {string} title
 * @param {string} subtitle
 * @param {number} Duration
 * in Milliseconds
 * @param {number} CrosshairOffset
 * + positive = down 
 * - negative = up
 * @param {number} Scale
 * @param {number} Color
 * renderer.(color)
 * @param {boolean} Shadow
 * Text Shadow
 */
let showTitle = false
let currentTitle, currentSubtitle, titleTimeout

export function title(title, subtitle, Duration, CrosshairOffset, Scale, Shadow) {
    if (showTitle) {
        titleTimeout.interrupt() // Interrupt the previous timeout
        currentTitle = null
        currentSubtitle = null
    }

    showTitle = true
    currentTitle = new Text(title, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 - CrosshairOffset).setAlign("CENTER").setScale(Scale).setShadow(Shadow)
    currentSubtitle = new Text(subtitle, Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + CrosshairOffset).setAlign("CENTER").setScale(Scale - 0.5).setShadow(Shadow)

    titleTimeout = new java.lang.Thread(() => {
        java.lang.Thread.sleep(Duration)
        showTitle = false
        currentTitle = null
        currentSubtitle = null
    })
    titleTimeout.start()

    register("renderOverlay", () => {
        if (!showTitle) return
        if (currentTitle) currentTitle.draw()
        if (currentSubtitle) currentSubtitle.draw()
    })
}

/**
 * smol coords first
 * @returns 
 */
export function isPlayerInArea(pos1, pos2) {
    return Player.getX() > pos1[0] && Player.getX() < pos2[0] && Player.getY() > pos1[1] && Player.getY() < pos2[1] && Player.getZ() > pos1[2] && Player.getZ() < pos2[2]
}

/**
 * 
 * @param {number} number 
 * @returns 
 */
export function formatNumber(number) {
    let formattedNumber;
    number = parseFloat(number.toString().replace(/,/g, ''));

    if (number >= 1000000000) {
        formattedNumber = (number / 1000000000).toFixed(0) + "B";
    } else if (number >= 10000000) {
        formattedNumber = (number / 1000000).toFixed(0) + "M";
    } else if (number >= 1000000) {
        formattedNumber = (number / 1000000).toFixed(1) + "M";
    } else if (number >= 100000) {
        formattedNumber = (number / 1000).toFixed(0) + "K";
    } else if (number >= 1000) {
        formattedNumber = (number / 1000).toFixed(1) + "K";
    }

    return formattedNumber;
}

export function getCryptCount() {
    const tabList = TabList.getNames();
    if (!tabList) return 0;       
    for (let line of tabList) {
        line = ChatLib.removeFormatting(line);
        if (line.includes("Crypts: ")) {
            const count = parseInt(line.split("Crypts: ")[1]);
            return isNaN(count) ? 0 : count;
        }
    }
}

export function getPuzzleCount() {
    const tabList = TabList.getNames();
    if (!tabList) return 0;       
    for (let line of tabList) {
        line = ChatLib.removeFormatting(line);
        if (line.includes("Puzzles: (")) {
            const number = parseInt(line.split("Puzzles: (")[1]);
            return isNaN(number) ? 0 : number;
        }
    }
}