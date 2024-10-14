import PogObject from "../PogData";
const data = new PogObject("Zyryon", {
    width: 1,
    height: 1,

    pdtimer: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2 - 15,
        scale: 1,
        shadow: false
    },

    coords: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },

    fps: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },

    armorhud: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },

    debuffhud: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },

    pitch: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },
    yaw: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },

    stormtimer: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2 - 15,
        scale: 1,
        shadow: false
    },

    p3info: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2 - 15,
        scale: 1,
        shadow: false
    },

    customtermtitle: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2 - 15,
        scale: 1,
        shadow: false
    },

    withershield: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2 - 15,
        scale: 1,
        shadow: false
    },

    withercloak: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2 - 25,
        scale: 1,
        shadow: false
    },

    maskcooldown: {
        x: Renderer.screen.getWidth() * 0.33,
        y: Renderer.screen.getHeight() * 0.33,
        scale: 1,
        shadow: false
    },

    test: {
        x: 100,
        y: 100,
        scale: 1,
        shadow: false
    },

    pbs: {
        c1: 999999,
        c2: 999999,
        c3: 999999,
        c4: 999999,
        pd: 999999,
        lights: 999999,
        align: 999999,
    },

    perm: [],

    firstinstall: false,
    customhiddenmessages: [],
    catalvl: null,
}, "data.json") 

export default data