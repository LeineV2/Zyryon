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
        const categories = ["General", "Dungeons", "Chat", "About", "Random", "Debug"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class config {

    @SwitchProperty({
        name: "Leap to Healer Message",
        description: "Says The Message Below in Chat.",
        subcategory: "F7",
        category: "Dungeons"
    })
    leapToHealer = false;

    @SwitchProperty({
        name: "Leap to Healer Debug Message",
        description: "Healer Leaping Debug Messages.",
        subcategory: "F7",
        category: "Dungeons"
    })
    leapToHealerDebugMessage = false;
    
    @SwitchProperty({
        name: "RNG Drop Paste",
        description: "Pastes RNG Dropes in Chat.",
        subcategory: "RNG Drops",
        category: "Random"
    })
    RNGDropPaste = false;

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

//    @SwitchProperty({
//        name: "Leap Announcement",
//        description: "Announces who you leap to.",
//        subcategory: "Party Commands",
//        category: "Chat"
//    })
//    leapAnnounce = false;

    @SwitchProperty({
        name: "Autorefill",
        description: "Autometicly Refills your Enderpearls on the Start of a new run,",
        subcategory: "UAYOR",
        category: "Dungeons"
    })
    AutoGFS = false;

    @SwitchProperty({
        name: "Wishing Messages",
        description: "Sends a Wishing Message.",
        subcategory: "F7",
        category: "Dungeons"
    })
    AutoWishMessage = false;

    @TextProperty({
        name: "Message for Wishing",
        description: "Message Send for Wishing",
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

    constructor() {
        this.initialize(this);
    }
}

export default new config()