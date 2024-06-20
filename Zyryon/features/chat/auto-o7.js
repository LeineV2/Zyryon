/// <reference types="../../../CTAutocomplete" />

import config from "../../config"

register("chat", (rank, name) => {
    if(config.AutoO7){
        ChatLib.command(`pc o/ ${name}`)
    }
}).setCriteria("${rank} ${name} joined the party.")