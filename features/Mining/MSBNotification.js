/// <reference types="../../../CTAutocomplete" />
import config from "../../config"

register("chat", () => {
    if(!config().MiningSpeedBoostNotifier) return
    Client.showTitle(`&0&kKK&r &eMining Speed Boost &aReady!&r &0&kKK&r`, " ", 10, 25, 10)
}).setCriteria("Mining Speed Boost is now available!")