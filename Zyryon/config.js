import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"
const schemes = ["data/ColorScheme.json", "data/scheme-vigil.json", "data/scheme-nwjn.json"]
const version = JSON.parse(FileLib.read("Zyryon", "metadata.json")).version
const CHANGELOG = `# §bZyryon v${version}\n ${FileLib.read("Zyryon", "changelog.md")}`
const defaultConf = new DefaultConfig("Zyryon", "data/settings.json")

.addSwitch({
    category: "Dungeons",
    configName: "leapAnnounce",
    title: "Leap Announcement",
    description: "Announces who you leap to.",
    subcategory: "Leaping"
})
.addDropDown({
    category: "Dungeons",
    configName: "HideLeapMsgLevel",
    title: "Hide Leap Messages",
    description: "What Leap Messages would you like to hide?",
    options: ["None","Your Own","Everyones"],
    value: 0,
    subcategory: "Leaping",
    shouldShow(data) {
        return data.leapAnnounce
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "AutoGFS",
    title: "Autorefill",
    description: "Automatically Refills your Enderpearls on the Start of a new run.",
    subcategory: "UAYOR"
})
.addSwitch({
    category: "Dungeons",
    configName: "ManualGFS",
    title: "Manualrefill",
    description: "Gives you an option in Chat to Click to Refill.",
    subcategory: "UAYOR",
    shouldShow(data) {
        return data.AutoGFS
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "PreDevTimer",
    title: "Predev Timer",
    description: "Lets you know how fast your Predev is! (reacts on Leaping)",
    subcategory: "Predev"
})
.addSwitch({
    category: "Dungeons",
    configName: "IgnoreClassCheck",
    title: "Ignore Class Check",
    description: "Ignores the Class Check for the Predev Timer",
    subcategory: "Predev",
    shouldShow(data) {
        return data.PreDevTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "PreDevTimerLive",
    title: "Predev Live Timer",
    description: "Shows you a Live Timer for Predev",
    subcategory: "Predev",
    shouldShow(data) {
        return data.PreDevTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "PreDevTimerOnlyPB",
    title: "Only Show PB Time",
    description: "",
    subcategory: "Predev",
    shouldShow(data) {
        return data.PreDevTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "PreDevTimerIncPB",
    title: "Include PB in Message",
    description: "",
    subcategory: "Predev",
    shouldShow(data) {
        return data.PreDevTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "MaskCooldownTimer",
    title: "Mask Cooldown Timer",
    description: "Shows you the cooldown time for your masks",
    subcategory: "Mask Cooldown Timer"
})
.addDropDown({
    category: "Dungeons", 
    configName: "MaskCooldownMode",
    title: "Mask Cooldown Mode",
    description: "Choose how you want to see the Mask Cooldown",
    options: ["Number", "Percentage"],
    value: 0,
    subcategory: "Mask Cooldown Timer",
    shouldShow(data) {
        return data.MaskCooldownTimer
    }
})
.addSlider({
    category: "Dungeons",
    configName: "MaskCooldownDigits",
    title: "Mask Cooldown Digits",
    description: "Choose how many digits you want to see for the Mask Cooldown",
    options: [0, 4],
    value: 0,
    subcategory: "Mask Cooldown Timer",
    shouldShow(data) {
        return data.MaskCooldownTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "MaskCooldownTimerOnlyP3",
    title: "Only Show In P3",
    description: "",
    subcategory: "Mask Cooldown Timer",
    shouldShow(data) {
        return data.MaskCooldownTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "DungeonTitleMainToggle",
    title: "Dungeon Title Toggle",
    description: "Main Toggle for Dungeon Titles",
    subcategory: "Titles"
})
.addSwitch({
    category: "Dungeons",
    configName: "DungeonKeyDoorTitle",
    title: "Dungeon Key/Door Title",
    description: "Displays a Title when the Key is Picked up/Door Opens and who did it",
    subcategory: "Titles",
    shouldShow(data) {
        return data.DungeonTitleMainToggle
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "BloodReadyDoneTitle",
    title: "Blood Ready/Done Title",
    description: "Displays a Title When Blood is Ready or Done",
    subcategory: "Titles",
    shouldShow(data) {
        return data.DungeonTitleMainToggle
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "ChestLockedTitle",
    title: "Chest Locked Title",
    description: "Displays a Title When Blood is Ready or Done",
    subcategory: "Titles",
    shouldShow(data) {
        return data.DungeonTitleMainToggle
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "ThunderBottleNotifier",
    title: "Thunder Bottle Notifier",
    description: "Displays a Title or/and Message when Thunder Bottle is full and you don't have any more Empty Thunder Bottles in your Inventory",
    subcategory: "Titles",
    shouldShow(data) {
        return data.DungeonTitleMainToggle
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "ThunderBottleNotifierMessage",
    title: "Thunder Bottle Message",
    description: "Message: !dt Thunder Bottles",
    subcategory: "Titles",
    shouldShow(data) {
        return data.ThunderBottleNotifier
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "DungeonStartTimer",
    title: "Dungeon Start Timer",
    description: "Displays a Dungeon Start Timer",
    subcategory: "Dungeons"
})
.addSwitch({
    category: "Dungeons",
    configName: "PoisonReminder",
    title: "&5Twilight Arrow Poison &rReminder",
    description: "Reminds you when you don't have &5Twilight Arrow Poison &rin your Inventory",
    subcategory: "M7"
})
.addSwitch({
    category: "Dungeons",
    configName: "DebuffDisplay",
    title: "Debuff Display",
    description: "Shows you how much &aToxic Arrow Poison &rand &5Twilight Arrow Poison &ryou have",
    subcategory: "M7"
})
.addSwitch({
    category: "Dungeons",
    configName: "DebuffDisplayOnlyP5",
    title: "Debuff Display only in P5",
    description: "",
    subcategory: "M7",
    shouldShow(data) {
        return data.DebuffDisplay
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "CrystalTimer",
    title: "Crystal Timer",
    description: "might break sometimes",
    subcategory: "Crystal Timer"
})
.addDropDown({
    category: "Dungeons",
    configName: "CrystalTimerPB",
    title: "Crystal Timer PB",
    description: "Choose what you want to see in the PB",
    options: ["Off","In Crystal Message","In Summary","In Both"],
    value: 0,
    subcategory: "Crystal Timer",
    shouldShow(data) {
        return data.CrystalTimer
    }
})
.addDropDown({
    category: "Dungeons",
    configName: "CrystalTimerSum",
    title: "Crystal Timer Summary",
    description: "Gives you a little summary about Crystal Times",
    options: ["Off","Post Maxor Death","Post Run","Both"],
    value: 0,
    subcategory: "Crystal Timer",
    shouldShow(data) {
        return data.CrystalTimer
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "MaxorSpawnTimer",
    title: "Maxor Spawn Timer",
    description: "",
    subcategory: "F7"
})
.addSwitch({
    category: "Dungeons",
    configName: "EnergyCrystalAlert",
    title: "Place Energy Crystal Alert",
    description: "",
    subcategory: "F7"
})
.addSwitch({
    category: "Dungeons",
    configName: "WishTitle",
    title: "Wish Title",
    description: "Shows a Title when you to Wish",
    subcategory: "Wish"
})
.addSwitch({
    category: "Dungeons",
    configName: "BonzoMaskReminder",
    title: "Bonzo Mask Reminder",
    description: "",
    subcategory: "M7"
})
.addSwitch({
    category: "Dungeons",
    configName: "customterminals",
    title: "Custom Terminals Title",
    description: "",
    subcategory: "Custom Terminals"
})
.addSlider({
    category: "Dungeons",
    configName: "customterminalsduration",
    title: "Custom Terminals Title Duration",
    description: "Duration for the Custom Terminals Titles",
    options: [0.5, 6],
    value: 0.5,
    subcategory: "Custom Terminals",
    shouldShow(data) {
        return data.customterminals
    }
})
.addDropDown({
    category: "Dungeons",
    configName: "customterminalsmode",
    title: "Custom Titles Mode",
    description: "Choose what you want to see in the Custom Terminal Titles",
    options: ["name + term + number","term + number","number"],
    value: 0,
    subcategory: "Custom Terminals",
    shouldShow(data) {
        return data.customterminals
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "customterminalmessage",
    title: "Custom Terminal Chat Message",
    description: "",
    subcategory: "Custom Terminals",
    shouldShow(data) {
        return data.customterminals
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "ragaxetimer",
    title: "Ragnarock Axe Timer",
    description: "Timer for the Ragnarock Axe",
    subcategory: "Ragnarock Axe"
})
.addSwitch({
    category: "Dungeons",
    configName: "withershieldtimer",
    title: "Wither Shield Timer",
    description: "Timer for the Wither Shield",
    subcategory: "Wither Shield"
})
.addSwitch({
    category: "Dungeons",
    configName: "CustomWitherCloak",
    title: "Custom Wither Cloak",
    description: "Hides Creepers, Particles, Sounds and Titles when it's on",
    subcategory: "Custom Wither Cloak"
})
.addSwitch({
    category: "Dungeons",
    configName: "relicwaypoints",
    title: "Relic Waypoints",
    description: "Shows you the waypoints for Your Relics",
    subcategory: "Relic Waypoints"
})
.addSwitch({
    category: "Dungeons",
    configName: "customstormlightningtimer",
    title: "Custom Storm Lightning Timer",
    description: "Shows a lightning timer (ticks)",
    subcategory: "M7",
})
.addSwitch({
    category: "Dungeons",
    configName: "PredevRoutes",
    title: "Predev Routes (WIP not finished)",
    description: "Shows you the routes for Predev",
    subcategory: "Predev",
    shouldShow(data) {
        return data.PreDevTimer
    }
})
.addSwitch({
    category: "Chat",
    configName: "PartyCommands",
    title: "Party Commands",
    description: "Commands for the Party using =",
    subcategory: "Party Commands"
})
.addSwitch({
    category: "Chat",
    configName: "AntiEscrow",
    title: "Anti Escrow",
    description: "Automatically reopens the Auctionhouse when Escrow Strikes.",
    subcategory: "!UAYOR!"
})
.addSwitch({
    category: "Chat",
    configName: "partyinviteping",
    title: "Party Invite Ping",
    description: "Plays ping sound when someone invites you to their party",
    subcategory: "Party"
})
.addSwitch({
    category: "Chat",
    configName: "partykicknotif",
    title: "Party Kick Notification",
    description: "Notifies you when someone kicks you from their party",
    subcategory: "Party"
})
.addSwitch({
    category: "Chat",
    configName: "DropsChatMsg",
    title: "Drops to Chat Message",
    description: "Sends a Message in Certain Chats",
    subcategory: "Drops"
})
.addSwitch({
    category: "Chat",
    configName: "RAREDROP",
    title: "Toggle &eRARE DROPS&r?",
    description: "",
    subcategory: "Drops",
    shouldShow(data) {
        return data.DropsChatMsg
    }
})
.addSwitch({
    category: "Chat",
    configName: "CRAZYRAREDROP",
    title: "Toggle &dCRAZY RARE DROPS&r?",
    description: "",
    subcategory: "Drops",
    shouldShow(data) {
        return data.DropsChatMsg
    }
})
.addSwitch({
    category: "Chat",
    configName: "INSANEDROP",
    title: "Toggle &cINSANE DROPS&r?",
    description: "",
    subcategory: "Drops",
    shouldShow(data) {
        return data.DropsChatMsg
    }
})
.addSwitch({
    category: "General",
    configName: "petkeybinds",
    title: "Pet Keybinds",
    description: "Keybinds for pets (1-9)",
    subcategory: "Pet Keybinds"
})
.addSwitch({
    category: "General",
    configName: "antikick",
    title: "Anti-Kick Protection",
    description: "Protects against kicking from the server",
    subcategory: "Anti Kick"
})
.addSwitch({
    category: "General",
    configName: "hideaotvparticles",
    title: "Hide AOTV Particles",
    description: "Hides the AOTV Particles",
    subcategory: "Particles"
})
.addSwitch({
    category: "General",
    configName: "hidewithershieldparticles",
    title: "Hide Wither Shield Particles",
    description: "Hides the Wither Shield Particles",
    subcategory: "Particles"
})
.addSwitch({
    category: "Mining",
    configName: "MiningSpeedBoostNotifier",
    title: "Mining Speed Boost Notifier",
    description: "",
    subcategory: "Mining Speed Boost"
})
.addSwitch({
    category: "Mining",
    configName: "MiningSpeedBoostTimer",
    title: "Mining Speed Boost Timer",
    description: "",
    subcategory: "Mining Speed Boost"
})
.addSwitch({
    category: "Mining",
    configName: "ComDoneTitle",
    title: "Commission Done Title",
    description: "",
    subcategory: "Commission"
})
.addSwitch({
    category: "Mining",
    configName: "resetcold",
    title: "Reset &bCold &rAlert",
    description: "",
    subcategory: "Glacial Cave"
})
.addSwitch({
    category: "Messages",
    configName: "HideAllUselessBazzarMessages",
    title: "Hide all Useless Bazaar & Auction House Messages!",
    description: "",
    subcategory: "Hide Useless Messages"
})
.addSwitch({
    category: "Messages",
    configName: "HideCustomMessages",
    title: "Hide Custom Messages",
    description: "Use /chm (add/remove/list) to manage your hidden messages",
    subcategory: "Hide Useless Messages"
})
.addSwitch({
    category: "Random",
    configName: "AntiMonkey",
    title: "Anti-Monkey",
    description: "AutoKicks Redshotz.",
    subcategory: "Anti-Monkey"
})
.addSwitch({
    category: "Random",
    configName: "AntiYap",
    title: "Shut up Redshotz",
    description: "Hides Any Message Containing RedShotz",
    subcategory: "Random"
})
.addSwitch({
    category: "Random",
    configName: "ahbuyping",
    title: "Ah Bought Ping",
    description: "Plays ping sound when an Item on your Ah sells",
    subcategory: "Ping"
})
.addSwitch({
    category: "HUD",
    configName: "HudElementsOnScreenMainToggle",
    title: "HUD Element Main Toggle",
    description: "Main Toggle for all HUD Elements",
    subcategory: "HUD"
})
.addSwitch({
    category: "HUD",
    configName: "FpsOnScren",
    title: "Show FPS on Screen",
    description: "Shows your FPS on screen",
    subcategory: "HUD",
    shouldShow(data) {
        return data.HudElementsOnScreenMainToggle
    }
})
.addSwitch({
    category: "HUD",
    configName: "PitchYawHud",
    title: "Pitch & Yaw besides the Crosshair",
    description: "",
    subcategory: "HUD",
    shouldShow(data) {
        return data.HudElementsOnScreenMainToggle
    }
})
.addSwitch({
    category: "HUD",
    configName: "ArmorAndHandOnScreen",
    title: "Show Armor and Hand HUD",
    description: "Displays the Armor and Hand on Screen",
    subcategory: "HUD",
    shouldShow(data) {
        return data.HudElementsOnScreenMainToggle
    }
})
.addSwitch({
    category: "HUD",
    configName: "Hand",
    title: "Show Hand",
    description: "",
    subcategory: "HUD",
    shouldShow(data) {
        return data.ArmorAndHandOnScreen
    }
})
.addButton({
    category: "Move Elements",
    configName: "maskcooldownmove",
    title: "Move Mask Cooldown",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openmaskcooldownmovegui", true)
    },
    shouldShow(data) {
        return data.MaskCooldownTimer
    }
})
.addButton({
    category: "Move Elements",
    configName: "movepredevtimer",
    title: "Move PreDev Timer",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openpredevtimermovegui", true)
    },
    shouldShow(data) {
        return data.PreDevTimer
    }
})
.addButton({
    category: "Move Elements",
    configName: "movefps",
    title: "Move FPS",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openfpsMoveGui", true)
    },
    shouldShow(data) {
        return data.FpsOnScren
    }
})
.addButton({
    category: "Move Elements",
    configName: "movepitchhud",
    title: "Move Pitch HUD",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openpitchMoveGui", true)
    },
    shouldShow(data) {
        return data.PitchYawHud
    }
})
.addButton({
    category: "Move Elements",
    configName: "moveyawhud",
    title: "Move Yaw HUD",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openyawMoveGui", true)
    },
    shouldShow(data) {
        return data.PitchYawHud
    }
})
.addButton({
    category: "Move Elements",
    configName: "movearmorhud",
    title: "Move Armor HUD",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openarmorMoveGui", true)
    },
    shouldShow(data) {
        return data.ArmorAndHandOnScreen
    }
})
.addButton({
    category: "Move Elements",
    configName: "movedebuffdisplayhud",
    title: "Move Debuff Display",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("opendebuffdisplaymovegui", true)
    },
    shouldShow(data) {
        return data.DebuffDisplay
    }
})
.addButton({
    category: "Move Elements",
    configName: "movecustomterminals",
    title: "Move Custom Terminals Title",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("opencustomterminalsmovegui", true)
    },
    shouldShow(data) {
        return data.customterminals
    }
})
.addButton({
    category: "Move Elements",
    configName: "button",
    title: "Move Wither Shield Timer",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openwithershieldtimermovegui", true)
    },
    shouldShow(data) {
        return data.withershieldtimer
    }
})
.addButton({
    category: "Move Elements",
    configName: "movecustomwithercloak",
    title: "Move Custom Wither Cloak",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openwithercloakmovegui", true)
    },
    shouldShow(data) {
        return data.CustomWitherCloak
    }
})
.addButton({
    category: "Move Elements",
    configName: "movecustomstormlightningtimer",
    title: "Move Custom Storm Lightning Timer",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openstormlightningtimermovegui", true)
    },
    shouldShow(data) {
        return data.customstormlightningtimer
    }
})
.addButton({
    category: "Move Elements",
    configName: "movemaskcooldown",
    title: "Move Mask Cooldown",
    description: "",
    subcategory: "HUD",
    onClick() {
        ChatLib.command("openmaskcooldownmovegui", true)
    },
    shouldShow(data) {
        return data.MaskCooldownTimer
    }
})

const config = new Settings("Zyryon", defaultConf, "data/ColorScheme.json").setCommand("Zy")
.addMarkdown("Changelog", CHANGELOG)
const currentScheme = schemes["Default"]
const scheme = JSON.parse(FileLib.read("Zyryon", currentScheme))
FileLib.write("Zyryon", currentScheme, JSON.stringify(scheme, null, 4))
config
    .setPos(20, 6)
    .setSize(60, 89)
    .setScheme(currentScheme)
    .apply()
export default () => config.settings