/// <reference types="../../../CTAutocomplete" />
import config from "../../config"
import { title } from "../../utils/utils"

let comdone = false

register("chat", (b4) => {
    if(!config().ComDoneTitle) return
    title("&lCOMMISSION DONE", "", 1500, 20, 2, true)
}).setCriteria("${b4} Commission Complete! Visit the King to claim your rewards!")
