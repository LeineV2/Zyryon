import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from "../Vigilance/index";

@Vigilant("Zyryon", "Zyryon", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["Dungeons", "Chat", "Random", "Messages", "Mining", "HUD", "About"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },    
    getSubcategoryComparator: () => (a, b) => {
        const subcategories = ["Colors", "UAYOR", "Show Armor and Hand HUD"];
        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) - subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    }
})

class config {

    @SwitchProperty({
        name: "Leap to Healer Message",
        description: "Announces to Leap to the Healer.",
        subcategory: "Leaping",
        category: "Dungeons"
    })
    leapToHealer = false;

    @SwitchProperty({
        name: "Show Title Instad of Message",
        description: "Shows a Title instad of Sending the Message",
        subcategory: "Leaping",
        category: "Dungeons"
    })
    TitleInstadofMsgLTH = false;

    @SwitchProperty({
        name: "Party Commands",
        description: "Commands for the Party using =",
        subcategory: "Party Commands",
        category: "Chat"
    })
    PartyCommands = false;

    @SwitchProperty({
        name: "Anti-Monkey",
        description: "AutoKicks Redshotz.",
        subcategory: "Anti-Monkey",
        category: "Random"
    })
    AntiMonkey = 0;

    @SelectorProperty({
        name: "Selection of Terminal",
        description: "Select your Terminal that you are gonna do.",
        subcategory: "F7",
        category: "Dungeons",
        options: [`Disabled`, `dev`, `1`, `2`, `3`, `4`],
    })
    F7Calls = 0;

    @SwitchProperty({
        name: "Leap Announcement",
        description: "Announces who you leap to.",
        subcategory: "Leaping",
        category: "Dungeons"
    })
    leapAnnounce = false;

    @SelectorProperty({
        name: "Hide Leap Messages",
        description: "What Leap Messages would you like to hide?",
        subcategory: "Leaping",
        category: "Dungeons",
        options: [`None`, `Your Own`, `Everyones`]
    })
    HideLeapMsgLevel = 0;

    @SwitchProperty({
        name: "Autorefill",
        description: "Autometicly Refills your Enderpearls on the Start of a new run.",
        subcategory: "UAYOR",
        category: "Dungeons"
    })
    AutoGFS = false;

    @SwitchProperty({
        name: "Manualrefill",
        description: "Gives you can option in Chat to Click to Refill.",
        subcategory: "UAYOR",
        category: "Dungeons"
    })
    ManualGFS = false;

    @SwitchProperty({
        name: "Wishing Messages",
        description: "Sends a Wishing Message.",
        subcategory: "F7",
        category: "Dungeons"
    })
    AutoWishMessage = false;

    @TextProperty({
        name: "Message for Wishing",
        description: "Message Send for Wishing.",
        subcategory: "F7",
        category: "Dungeons",
        placeholder: "Wish or Gay"
    })
    MessageForWishing = "";

    @SwitchProperty({
        name: "Anti Escrow",
        description: "Autometicly reopens the Auctionhouse when Escrow Strucks.",
        subcategory: "UAYOR",
        category: "Chat"
    })
    AntiEscrow = false;

    @SwitchProperty({
        name: "Drops to Chat Message",
        description: "Sends a Message in Serten Chats",
        subcategory: "Drops",
        category: "Chat"
    })
    DropsChatMsg = false;

    @SwitchProperty({
        name: "Send Message to Confirm Where its Send (&4Will disable Sending Location!&r)",
        description: "&7Do you Want to Send your &c(name) &7with &b(magic find) Magic Find &7to &r&r&7[ALL]&r &r&9[PARTY]&r &r&a[GUILD]",
        subcategory: "Drops",
        category: "Chat"
    })
    ChatMessageInstad = false

    @SelectorProperty({
        name: "Sending Location",
        description: "Where should it be send",
        subcategory: "Drops",
        category: "Chat",
        options: ["All Chat","Party Chat", "Guild Chat", "Party Chat + Guild Chat", "All Chat + Party Chat + Guild Chat"]
    })
    sendingloc = 0;

    @SwitchProperty({
        name: "Should it send &eRARE DROPS&r?",
        subcategory: "Drops",
        category: "Chat"
    })
    RAREDROP = false;

    @SwitchProperty({
        name: "Should it send &dCRAZY RARE DROPS&r?",
        subcategory: "Drops",
        category: "Chat"
    })
    CRAZYRAREDROP = false;

    @SwitchProperty({
        name: "Should it send &cINSANE DROPS&r?",
        subcategory: "Drops",
        category: "Chat"
    })
    INSANEDROP = false;

    @SwitchProperty({
        name: "Hide Useless Messages Main",
        description: "Main Toggle for Hides Useless Messages!",
        subcategory: "Hide Useless Messages",
        category: "Messages"
    })
    HideUselessMessagesMain = false;

    @SwitchProperty({
        name: "Show all Useless Bazaar Messages!",
        description: "Shows all Useless Bazaar Messages!",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    ShowAllUselessBazzarMessages = false;

    @SwitchProperty({
        name: "Show all Useless Auction House Messages!",
        description: "Shows Useless Auction House Messages!",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    ShowAllUselessAuctionHouseMessages = false;

    @SwitchProperty({
        name: "Bazaar: Insta Sell Message",
        description: "Hides the Bazaar Instant Sell Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzInstaSellMsg = false;

    @SwitchProperty({
        name: "Bazaar: Insta Buy Message",
        description: "Hides the Bazaar Instant Buy Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzInstaBuyMsg = false;

    @SwitchProperty({
        name: "Bazaar: Too much Message",
        description: "Hides the Bazaar Too much Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzTooMuchMsg = false;

    @SwitchProperty({
        name: "Bazaar: No Buyer Message",
        description: "Hides the Bazaar Couldn´t find Buyer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzNoBuyerMsg = false;

    @SwitchProperty({
        name: "Bazaar: Goods in Escrow Message",
        description: "Hides the Bazaar Goods in Escrow Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzGoodsInEscrowMsg = false;

    @SwitchProperty({
        name: "Bazaar: Sell offer Message",
        description: "Hides the Submitting Sell Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzSubmitSellOfferMsg = false;

    @SwitchProperty({
        name: "Bazaar: Buy offer Message",
        description: "Hides the Submitting Buy Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzSubmitBuyOfferMsg = false;

    @SwitchProperty({
        name: "Bazaar: Claim offer Message",
        description: "Hides the Claiming Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzClaimOfferMsg = false;

    @SwitchProperty({
        name: "Bazaar: Cancel offer Message",
        description: "Hides the Cancel Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzCancelOfferMsg = false;

    @SwitchProperty({
        name: "Auction House: Escrow Coin Message",
        description: "Hides the Escrow Coins Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    AhEscrowCoinMsg = false;

    @SwitchProperty({
        name: "Auction House: Processing Purchase Message",
        description: "Hides the Processing Purchase Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    AhProcessingPurchaseMessage = false;

    @SwitchProperty({
        name: "Auction House: Claiming BIN Message",
        description: "Hides the Claiming BIN Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    AhClaimBINMessage = false;

    @SwitchProperty({
        name: "Hide Debug Messages",
        description: "Hides all Debug Messages",
        subcategory: "Debug",
        category: "Messages"
    })
    HideAllDebugMessages = false;

    @SwitchProperty({
        name: "Auto Open Potion Bag",
        description: "Autometicly Opens Potion Bag at The Start of a Run",
        subcategory: "UAYOR",
        category: "Dungeons"
    })
    PBOnStartOfRun = false;

    @SwitchProperty({
        name: "Show all Party Command Messages!",
        description: "Shows all Party Command Messages!",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaShowAllMessagesMain = false;

    @SwitchProperty({
        name: "Party Commands: Party Warp Message",
        description: "Hides the Party Warp Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaWarpMessage = false;

    @SwitchProperty({
        name: "Party Commands: Party Help Message",
        description: "Hides the Party Help Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaHelpMessage = false;

    @SwitchProperty({
        name: "Party Commands: Party AllInvite Message",
        description: "Hides the Party AllInvite Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaAllInviteMessage = false;

    @SwitchProperty({
        name: "Party Commands: Party Pearls Message",
        description: "Hides the Party Pearls Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaPearlsMessage = false;

    @SwitchProperty({
        name: "Shut up Redshotz",
        description: "Hides Any Message Containing RedShotz",
        subcategory: "Random",
        category: "Random"
    })
    AntiYap = false;

    @SwitchProperty({
        name: "Dungeon Title Toggle",
        description: "Main Toggle for Dungeon Titles",
        subcategory: "Titles",
        category: "Dungeons"
    })
    DungeonTitleMainToggle = false;

    @SwitchProperty({
        name: "Bonzo Mask/Phoenix/Spirit Mask Cooldown",
        description: "Tells you how long it is until your &9Bonzo Mask&7/&cPhoenix&7/&5Spirit Mask &ris Ready!",
        subcategory: "Titles",
        category: "Dungeons"
    })
    BonzoMaskCDTitle = false;

    @SwitchProperty({
        name: "Dungeon Key/Door Title",
        description: "Displays a Title when the Key is Picked up/Door Opens and who did it",
        subcategory: "Titles",
        category: "Dungeons"
    })
    DungeonKeyDoorTitle = false;

    @SwitchProperty({
        name: "Blood Ready/Done Title",
        description: "Displayes a Title When Blood is Ready or Done",
        subcategory: "Titles",
        category: "Dungeons"
    })
    BloodReadyDoneTitle = false;

    @SwitchProperty({
        name: "Chest Locked Title",
        description: "Displayes a Title When Blood is Ready or Done",
        subcategory: "Titles",
        category: "Dungeons"
    })
    ChestLockedTitle = false;

    @SwitchProperty({
        name: "Thunder Bottle Notifier",
        description: "Displays a Title or/and Message when Thunder Bottle is full and you dont have anymore Emtpy Thunder Bottles in your Inventory",
        subcategory: "Titles",
        category: "Dungeons"
    })
    ThunderBottleNotifier = false;

    @SwitchProperty({
        name: "Thunder Bottle Message",
        description: "Message: !dt Thunder Bottles",
        subcategory: "Titles",
        category: "Dungeons"
    })
    ThunderBottleNotifierMessage = false;

    @SwitchProperty({
        name: "HUD Element Main Toggle",
        description: "Main Toggle for all HUD Elements",
        subcategory: "HUD",
        category: "HUD"
    })
    HudElementsOnScreenMainToggle = false;

    @SwitchProperty({
        name: "Show Coordinates on Screen",
        description: "Shows your Current Coordinates on screen",
        subcategory: "HUD",
        category: "HUD"
    })
    CoorsOnScreen = false;

    @ColorProperty({
        name: "Choose a Color! (Coords)",
        subcategory: "Colors",
        category: "HUD"
    })
    CoordsHudColor = new Color(1, 0, 0, 1)

    @SwitchProperty({
        name: "Show FPS on Screen",
        description: "Shows your FPS on screen",
        subcategory: "HUD",
        category: "HUD"
    })
    FpsOnScren = false;

    @ColorProperty({
        name: "Choose a Color! (FPS)",
        subcategory: "Colors",
        category: "HUD"
    })
    FpsHudColor = new Color(0, 1, 0, 1)

    @SwitchProperty({
        name: "Mouse Posotion on Screen",
        subcategory: "HUD",
        category: "HUD"
    })
    MousePosOnScreen = false;

    @SwitchProperty({
        name: "Pitch & Yaw besides the Crosshair",
        subcategory: "HUD",
        category: "HUD"
    })
    PitchYawHud = false;

    @SwitchProperty({
        name: "Show Armor and Hand HUD",
        description: "Displays the Armor and Hand on Screen",
        subcategory: "HUD",
        category: "HUD"
    })
    ArmorAndHandOnScreen = false;

    @SwitchProperty({
        name: "Show Hand",
        subcategory: "Armor & Hand HUD",
        category: "HUD"
    })
    Hand = true;

    @SwitchProperty({
        name: "Show Helmet",
        subcategory: "Armor & Hand HUD",
        category: "HUD"
    })
    Helmet = true;

    @SwitchProperty({
        name: "Show Chestplate",
        subcategory: "Armor & Hand HUD",
        category: "HUD"
    })
    Chestplate = true;
    
    @SwitchProperty({
        name: "Show Leggings",
        subcategory: "Armor & Hand HUD",
        category: "HUD"
    })
    Leggings = true;

    @SwitchProperty({
        name: "Show Boots",
        subcategory: "Armor & Hand HUD",
        category: "HUD"
    })
    Boobs = true;

    @SwitchProperty({
        name: "Dungeon Start Timer",
        description: "Displays a Dungeon Start Timer",
        subcategory: "Dungeons",
        category: "Dungeons"
    })
    DungeonStartTimer = false;

    @SwitchProperty({
        name: "&5Twilight Arrow Poison &rReminder",
        description: "Remindes you when you dont have &5Twilight Arrow Poison &rin your Inventory",
        subcategory: "M7",
        category: "Dungeons"
    })
    PoisonReminder = false;

    @SwitchProperty({
        name: "Debuff Display",
        description: "Shows you how much &aToxic Arrow Poison &rand &5Twilight Arrow Poison &ryou have",
        subcategory: "M7",
        category: "Dungeons"
    })
    DebuffDisplay = false;

    @SwitchProperty({
        name: "Mining Speed Boost Notifier",
        subcategory: "Mining Speed Boost",
        category: "Mining"
    })
    MiningSpeedBoostNotifier = false

    @SwitchProperty({
        name: "Mining Speed Boost Timer",
        subcategory: "Mining Speed Boost",
        category: "Mining"
    })
    MiningSpeedBoostTimer = false

    @ButtonProperty({
        name: "Zyryon Commands",
        description: "Click to see all available Commands",
        category: "About",
        placeholder: "Click!"
    })
    MyGithub() {
        ChatLib.command("zy help", true)
    }

    constructor() {
        this.initialize(this);
        this.addDependency("Show all Useless Bazaar Messages!", "Hide Useless Messages Main")
        this.addDependency("Show all Useless Auction House Messages!", "Hide Useless Messages Main")
        this.addDependency("Show all Party Command Messages!", "Hide Useless Messages Main")
        this.addDependency("Party Commands: Party Help Message", "Show all Party Command Messages!")
        this.addDependency("Party Commands: Party Warp Message", "Show all Party Command Messages!")
        this.addDependency("Party Commands: Party AllInvite Message", "Show all Party Command Messages!")
        this.addDependency("Party Commands: Party Pearls Message", "Show all Party Command Messages!")
        this.addDependency("Auction House: Escrow Coin Message", "Show all Useless Auction House Messages!")
        this.addDependency("Auction House: Processing Purchase Message", "Show all Useless Auction House Messages!")
        this.addDependency("Auction House: Claiming BIN Message", "Show all Useless Auction House Messages!")
        this.addDependency("Bazaar: Insta Sell Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Insta Buy Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Too much Message", "Show all Useless Bazaar Messages!") 
        this.addDependency("Bazaar: No Buyer Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Goods in Escrow Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Sell offer Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Buy offer Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Claim offer Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Bazaar: Cancel offer Message", "Show all Useless Bazaar Messages!")
        this.addDependency("Hide Leap Messages", "Leap Announcement")
        this.addDependency("Manualrefill", "Autorefill")
        this.addDependency("Show Title Instad of Message", "Leap to Healer Message")
        this.addDependency("Bonzo Mask/Phoenix/Spirit Mask Cooldown", "Dungeon Title Toggle")
        this.addDependency("Dungeon Key/Door Title", "Dungeon Title Toggle")
        this.addDependency("Blood Ready/Done Title", "Dungeon Title Toggle")
        this.addDependency("Chest Locked Title", "Dungeon Title Toggle")
        this.addDependency("Thunder Bottle Notifier", "Dungeon Title Toggle")
        this.addDependency("Thunder Bottle Message", "Thunder Bottle Notifier")
        this.addDependency("Show Coordinates on Screen", "HUD Element Main Toggle")
        this.addDependency("Choose a Color! (Coords)", "Show Coordinates on Screen")
        this.addDependency("Show FPS on Screen", "HUD Element Main Toggle")
        this.addDependency("Choose a Color! (FPS)", "Show FPS on Screen")
        this.addDependency("Mouse Posotion on Screen", "HUD Element Main Toggle")
        this.addDependency("Show Armor and Hand HUD", "HUD Element Main Toggle")
        this.addDependency("Pitch & Yaw besides the Crosshair", "HUD Element Main Toggle")
        this.addDependency("Choose a Color! (FPS)", "HUD Element Main Toggle")
        this.addDependency("Choose a Color! (Coords)", "HUD Element Main Toggle")

        this.addDependency("Show Hand", "Show Armor and Hand HUD")
        this.addDependency("Show Helmet", "Show Armor and Hand HUD")
        this.addDependency("Show Chestplate", "Show Armor and Hand HUD")
        this.addDependency("Show Leggings", "Show Armor and Hand HUD")
        this.addDependency("Show Boots", "Show Armor and Hand HUD")

        this.addDependency("Show Hand", "HUD Element Main Toggle")
        this.addDependency("Show Helmet", "HUD Element Main Toggle")
        this.addDependency("Show Chestplate", "HUD Element Main Toggle")
        this.addDependency("Show Leggings", "HUD Element Main Toggle")
        this.addDependency("Show Boots", "HUD Element Main Toggle")

        this.addDependency("Send Message to Confirm Where its Send (&4Will disable Sending Location!&r)", "Drops to Chat Message")
        this.addDependency("Sending Location" ,"Drops to Chat Message")
        this.addDependency("Should it send &eRARE DROPS&r?" ,"Drops to Chat Message")
        this.addDependency("Should it send &dCRAZY RARE DROPS&r?" ,"Drops to Chat Message")
        this.addDependency("Should it send &cINSANE DROPS&r?" ,"Drops to Chat Message")

        this.setSubcategoryDescription("Dungeons", "Leaping", "&bEverything About Leaping in Dungeons")
        this.setSubcategoryDescription("Dungeons", "UAYOR", "&4Use at your own Risk")
        this.setSubcategoryDescription("Chat", "UAYOR", "&4Use at your own Risk")
        this.setCategoryDescription("Random", "&eAnything against the biggest Yapper in Hypixel Skyblock (YapShotz)")
        this.setSubcategoryDescription("Dungeons", "Titles", "&eGeneral Usage of Titles for Dungeons")
        this.setCategoryDescription("HUD", "&dGeneral HUD Elements")
    }
}

export default new config