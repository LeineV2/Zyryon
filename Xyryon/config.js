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

@Vigilant("Xyryon", "Xyryon", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "About", "Random", "Debug"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class config {

    @SwitchProperty({
        name: "Leap to Healer Message",
        description: "Says The Message Below in Chat.",
        subcategory: "Messages",
        category: "Dungeons"
    })
    leapToHealer = false;

    @SwitchProperty({
        name: "Leap to Healer Debug Message",
        description: "Healer Leaping Debug Messages.",
        subcategory: "Messages",
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

    constructor() {
        this.initialize(this);
    }
}

export default new config()