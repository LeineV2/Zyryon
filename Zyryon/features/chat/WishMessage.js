import config from "../../config";
import variables from "../../utils/variables";

register("chat", () => {
    if(config.AutoWishMessage && config.MessageForWishing == ""){
    ChatLib.command(`pc Wish or gay`)}
    }
).setCriteria("&r&c⚠ Maxor is enraged! ⚠&r").setContains()

register("chat", () => {
    if(config.AutoWishMessage && config.MessageForWishing == ""){
        ChatLib.command(`pc Wish or gay`)}
    }
).setCriteria("&r&4[BOSS] Goldor&r&c: &r&cYou have done it, you destroyed the factory…&r").setContains()

register("chat", () => {
    if(config.AutoWishMessage && !config.MessageForWishing == ""){
    ChatLib.command(`pc ${config.MessageForWishing}`)}
    }
).setCriteria("&r&c⚠ Maxor is enraged! ⚠&r").setContains()

register("chat", () => {
    if(config.AutoWishMessage && !config.MessageForWishing == ""){
    ChatLib.command(`pc ${config.MessageForWishing}`)}
    }
).setCriteria("&r&4[BOSS] Goldor&r&c: &r&cYou have done it, you destroyed the factory…&r").setContains()