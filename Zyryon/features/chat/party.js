/// <reference types="../../../CTAutocomplete" />
import config from "../../config";
import { Soundutils } from "../../utils/utils";

register("chat", (rn) => {
    if(!config().partyinviteping) return;
    Soundutils.ping()
}).setCriteria("${rn} has invited you to join their party!").setContains()

register("chat", (rank, name) => {
    if(!config().partykicknotif) return;
    Soundutils.ping()
    Client.showTitle(`&bKicked`, ` `, 10, 50, 10)
}).setCriteria("You have been kicked from the party by ${rank} ${name}")

register("chat", () => {
    ChatLib.command("chat party")
}).setCriteria("Attempting to add you to the party...")

register("chat", () => {
    ChatLib.command("chat party")
}).setCriteria("The conversation you were in expired and you have been moved back to the ALL channel.")