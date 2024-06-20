/// <reference types="../../../CTAutocomplete" />
import config from "../../config"

register("chat", () => {
    Client.showTitle(`&COMMISSION DONE`, " ", 10, 25, 10)
}).setCriteria("Commission Complete! Visit the King to claim your rewards!").setContains()
