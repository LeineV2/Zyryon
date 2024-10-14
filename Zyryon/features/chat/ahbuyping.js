import config from "../../config";
import { Soundutils } from "../../utils/utils";
register("chat", (name, item, coins) => {
    if(!config().ahbuyping) return
    Soundutils.ping()
}).setCriteria("[Auction] ${name} bought ${item} for ${coins} coins CLICK")