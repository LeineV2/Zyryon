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
        const categories = ["General", "Dungeons", "Chat", "About", "Random", "Debug", "Messages"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
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
    TitleInstadofMsgLTH = false

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
    AntiMonkey = true;

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

    @SwitchProperty({
        name: "Only Send Leapmessage in Boss (F7)",
        description: "Only Sends the Leapmessage in Boss",
        subcategory: "Leaping",
        category: "Dungeons"
    })
    OnlyLeapMessageInBoss = false 

    @SelectorProperty({
        name: "Hide Leap Messages",
        description: "What Secret Messages would you like to hide?",
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
    ManualGFS = false

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
        description: "Autometicly reopens the AuctionhoUse when Escrow Strucks.",
        subcategory: "UAYOR",
        category: "Chat"
    })
    AntiEscrow = false;

    @SwitchProperty({
        name: "Leap for P2",
        description: "Send Leap to me when you are in p2 after maxor died",
        subcategory: "F7",
        category: "Dungeons"
    })
    LeapinP2 = false

    @SwitchProperty({
        name: "Name",
        description: "name",
        subcategory: "General",
        category: "General"
    })
    test = false

    @SwitchProperty({
        name: "Hide Useless Messages Main",
        description: "Main Toggle for Hides Useless Messages!",
        subcategory: "Hide Useless Messages",
        category: "Messages"
    })
    HideUselessMessagesMain = false

    @SwitchProperty({
        name: "Show all Useless Bazaar Messages!",
        description: "Shows all Useless Bazaar Messages!",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    ShowAllUselessBazzarMessages = false

    @SwitchProperty({
        name: "Show all Useless Auction House Messages!",
        description: "Shows Useless Auction House Messages!",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    ShowAllUselessAuctionHouseMessages = false

    @SwitchProperty({
        name: "Bazaar: Insta Sell Message",
        description: "Hides the Bazaar Instant Sell Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzInstaSellMsg = false

    @SwitchProperty({
        name: "Bazaar: Insta Buy Message",
        description: "Hides the Bazaar Instant Buy Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzInstaBuyMsg = false

    @SwitchProperty({
        name: "Bazaar: Too much Message",
        description: "Hides the Bazaar Too much Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzTooMuchMsg = false

    @SwitchProperty({
        name: "Bazaar: No Buyer Message",
        description: "Hides the Bazaar Couldn´t find Buyer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzNoBuyerMsg = false

    @SwitchProperty({
        name: "Bazaar: Goods in Escrow Message",
        description: "Hides the Bazaar Goods in Escrow Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzGoodsInEscrowMsg = false

    @SwitchProperty({
        name: "Bazaar: Sell offer Message",
        description: "Hides the Submitting Sell Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzSubmitSellOfferMsg = false

    @SwitchProperty({
        name: "Bazaar: Buy offer Message",
        description: "Hides the Submitting Buy Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzSubmitBuyOfferMsg = false

    @SwitchProperty({
        name: "Bazaar: Claim offer Message",
        description: "Hides the Claiming Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzClaimOfferMsg = false

    @SwitchProperty({
        name: "Bazaar: Cancel offer Message",
        description: "Hides the Cancel Offer Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Bazzar",
        category: "Messages"
    })
    BzCancelOfferMsg = false

    @SwitchProperty({
        name: "Auction House: Escrow Coin Message",
        description: "Hides the Escrow Coins Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    AhEscrowCoinMsg = false

    @SwitchProperty({
        name: "Auction House: Processing Purchase Message",
        description: "Hides the Processing Purchase Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    AhProcessingPurchaseMessage = false

    @SwitchProperty({
        name: "Auction House: Claiming BIN Message",
        description: "Hides the Claiming BIN Message! (off = hidden)",
        subcategory: "Hide Useless Messages: Auction House",
        category: "Messages"
    })
    AhClaimBINMessage = false

    @SwitchProperty({
        name: "Hide Debug Messages",
        description: "Hides all Debug Messages",
        subcategory: "Debug",
        category: "Messages"
    })
    HideAllDebugMessages = false

    @SwitchProperty({
        name: "Auto Open Potion Bag",
        description: "Autometicly Opens Potion Bag at The Start of a Run",
        subcategory: "UAYOR",
        category: "Dungeons"
    })
    PBOnStartOfRun = false

    @SwitchProperty({
        name: "Show all Party Command Messages!",
        description: "Shows all Party Command Messages!",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaShowAllMessagesMain = false

    @SwitchProperty({
        name: "Party Commands: Party Warp Message",
        description: "Hides the Party Warp Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaWarpMessage = false

    @SwitchProperty({
        name: "Party Commands: Party Help Message",
        description: "Hides the Party Help Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaHelpMessage = false

    @SwitchProperty({
        name: "Party Commands: Party AllInvite Message",
        description: "Hides the Party AllInvite Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaAllInviteMessage = false

    @SwitchProperty({
        name: "Party Commands: Party Pearls Message",
        description: "Hides the Party Pearls Message! (off = hidden)",
        subcategory: "Hide Messages: Party Commands",
        category: "Messages"
    })
    PaPearlsMessage = false

    @SwitchProperty({
        name: "Shut up Redshotz",
        description: "Hides Any Message Containing RedShotz",
        subcategory: "Random",
        category: "Random"
    })
    AntiYap = false

    @SwitchProperty({
        name: "Dungeon Title Toggle",
        description: "Main Toggle for Dungeon Titles",
        subcategory: "Titles",
        category: "Dungeons"
    })
    DungeonTitleMainToggle = false

    @SwitchProperty({
        name: "Bonzo Mask/Phoenix Cooldown",
        description: "Tells you how long it is until your Bonzo Mask is Ready!",
        subcategory: "Titles",
        category: "Dungeons"
    })
    BonzoMaskCDTitle = false

    @SwitchProperty({
        name: "Dungeon Key/Door Title",
        description: "Displays a Title when the Key is Picked up/Door Opens and who did it",
        subcategory: "Titles",
        category: "Dungeons"
    })
    DungeonKeyDoorTitle = false

    @SwitchProperty({
        name: "Blood Ready/Done Title",
        description: "Displayes a Title When Blood is Ready or Done",
        subcategory: "Titles",
        category: "Dungeons"
    })
    BloodReadyDoneTitle = false

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
        this.addDependency("Only Send Leapmessage in Boss (F7)", "Leap Announcement")
        this.addDependency("Manualrefill", "Autorefill")
        this.addDependency("Show Title Instad of Message", "Leap to Healer Message")
        this.addDependency("Bonzo Mask/Phoenix Cooldown", "Dungeon Title Toggle")
        this.addDependency("Dungeon Key/Door Title", "Dungeon Title Toggle")
        this.addDependency("Blood Ready/Done Title", "Dungeon Title Toggle")
    
        this.setSubcategoryDescription("Dungeons", "Leaping", "&bEverything About Leaping in Dungeons")
        this.setSubcategoryDescription("Dungeons", "UAYOR", "&4Use at your own Risk")
        this.setSubcategoryDescription("Chat", "UAYOR", "&4Use at your own Risk")
        this.setCategoryDescription("Random", "&eAnything against the biggest Yapper in Skyblock (YapShotz)")
        this.setSubcategoryDescription("Dungeons", "Titles", "&eGeneral Usage of Titles for Dungeons")
    }
}

export default new config()