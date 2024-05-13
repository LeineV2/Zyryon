import config from "../../config";

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.ShowAllUselessBazzarMessages) return
            if(config.BzInstaSellMsg) return
                cancel(event)
    }
}).setCriteria("&r&6[Bazaar] &r&7Executing instant buy...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzInstaBuyMsg) return
            cancel(event)
    }        
}).setCriteria("&r&6[Bazaar] &r&7Executing instant sell...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzInstaTooMuchMsg) return
            cancel(event)
    }            
}).setCriteria("&r&6[Bazaar] &r&cThe Buy Orders for this item changed too much!&r&7")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzInstaNoBuyerMsg) return
            cancel(event)
    }            
}).setCriteria("&r&6[Bazaar] &r&cCouldn't find any buyers for").setContains()

register("chat", (event) => {
    if(config.HideUselessMessagesMain){        
        if(config.BzInstaGoodsInEscrowMsg) return
            cancel(event)
    }            
}).setCriteria("&r&6[Bazaar] &r&7Putting goods in escrow...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzSubmitSellOfferMsg) return
            cancel(event)
    }
}).setCriteria("&r&6[Bazaar] &r&7Submitting sell offer...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzSubmitBuyOfferMsg) return
            cancel(event)
    }
}).setCriteria("&r&6[Bazaar] &r&7Submitting buy order...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzClaimOfferMsg) return
            cancel(event)
    }
}).setCriteria("&r&6[Bazaar] &r&7Claiming order...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzCancelOfferMsg) return
            cancel(event)
    }
}).setCriteria("&r&6[Bazaar] &r&7Cancelling order...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.BzCancelOfferMsg) return
            cancel(event)
    }
}).setCriteria("&r&7Putting coins in escrow...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.AhProcessingPurchaseMessage) return
            cancel(event)
    }
}).setCriteria("&r&7Processing purchase...&r")

register("chat", (event) => {
    if(config.HideUselessMessagesMain){
        if(config.AhClaimBINMessage) return
            cancel(event)
    }
}).setCriteria("&r&7Claiming BIN auction...&r")