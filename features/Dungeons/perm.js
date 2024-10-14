/// <reference types="../../../CTAutocomplete" />
import { prefix } from "../../utils/utils";
import data from "../../data_";
register("command", (...args) => {
    if (!args || args.length === 0) {
        if (data.perm.length === 0) {
            prefix(`The perm is empty.`);
        } else {
            const permList = data.perm.map(item => {
                const inviteButton = new TextComponent(`&a[Invite]`).setClick("run_command", `/party ${item.username}`).setHoverValue(`&aClick to invite ${item.username} to the party`);
                const pvButton = new TextComponent(`&b[PV]`).setClick("run_command", `/pv ${item.username}`).setHoverValue(`&bClick to view ${item.username}'s profile`);
                const removeButton = new TextComponent(`&c[Remove]`).setClick("run_command", `/perm remove ${item.username}`).setHoverValue(`&cClick to remove ${item.username} from the perm`);
                return new Message(
                    new TextComponent(`&e${item.username} &7(${item.userClass.charAt(0).toUpperCase() + item.userClass.slice(1)}) `),
                    inviteButton,
                    new TextComponent(` `),
                    pvButton,
                    new TextComponent(` `),
                    removeButton
                );
            });
            permList.forEach(message => ChatLib.chat(message));
            prefix(`&7(${data.perm.length} perm ${data.perm.length === 1 ? 'member' : 'members'})`);
        }
        return;
    }

    const action = args[0];
    const username = args[1] ? args[1].toLowerCase() : null;
    let userClass = args[2] ? args[2].toLowerCase() : null;

    const validClasses = ["healer", "archer", "berserker", "tank", "mage"];

    if (action === "help") {
        prefix(`Usage: /perm (add/remove/clear/help/invite/replaceclass) <username> <class>`);
    } else if (action === "add") {
        if (args.length !== 3) {
            prefix(`Usage: /perm add <username> <class>`);
        } else {
            const classMap = {
                "h": "healer",
                "heal": "healer",
                "healer": "healer",
                "a": "archer",
                "arch": "archer",
                "archer": "archer",
                "b": "berserker",
                "bers": "berserker",
                "berserker": "berserker",
                "t": "tank",
                "tank": "tank",
                "tank": "tank",
                "m": "mage",
                "mage": "mage"            
            };
            userClass = classMap[userClass] || userClass;

            if (!validClasses.includes(userClass)) {
                prefix(`Invalid class. Use one of the following: ${validClasses.join(", ")}`);
            } else {
                const existingPlayer = data.perm.find(item => item.username.toLowerCase() === username);
                if (existingPlayer) {
                    const oldClass = existingPlayer.userClass;
                    existingPlayer.userClass = userClass;
                    data.save();
                    prefix(`Changed ${existingPlayer.username}'s class from ${oldClass.charAt(0).toUpperCase() + oldClass.slice(1)} to ${userClass.charAt(0).toUpperCase() + userClass.slice(1)}.`);
                } else {
                    data.perm.push({ username: args[1], userClass });
                    data.save();
                    prefix(`Added ${args[1]} (${userClass.charAt(0).toUpperCase() + userClass.slice(1)}) to the list. (${data.perm.length} perm ${data.perm.length === 1 ? 'member' : 'members'})`);
                }
            }
        }
    } else if (action === "remove") {
        if (data.perm.length === 0) {
            prefix(`The perm is empty.`);
        } else if (!username) {
            prefix(`Usage: /perm remove <username>`);
        } else {
            var index = data.perm.findIndex(item => item.username.toLowerCase() === username);
            if (index > -1) {
                const removedUser = data.perm.splice(index, 1)[0];
                data.save();
                prefix(`Removed ${removedUser.username} (${removedUser.userClass.charAt(0).toUpperCase() + removedUser.userClass.slice(1)}) from the perm. (${data.perm.length} perm ${data.perm.length === 1 ? 'member' : 'members'})`);
            } else {
                prefix(`${args[1]} is not in the perm.`);
            }
        }
    } else if (action === "clear") {
        data.perm = [];
        data.save();
        prefix("Cleared the perm.");
    } else if (action === "invite" || action === "inv") {
        if (data.perm.length === 0) {
            prefix(`The perm is empty.`);
        } else {
            const inviteMembers = function() {
                const usernames = data.perm.map(member => member.username).join(" ");
                ChatLib.command(`party ${usernames}`);
                prefix(`Invited all perm members to the party.`);
            };
            inviteMembers();
        }
    } else if (action === "replaceclass" || action === "replace" || action === "rc") {
        if (data.perm.length === 0) {
            prefix(`The perm is empty.`);
        } else if (args.length !== 3) {
            prefix(`Usage: /perm replaceclass <username> <class>`);
        } else {
            const classMap = {
                "h": "healer",
                "heal": "healer",
                "healer": "healer",
                "a": "archer",
                "arch": "archer",
                "archer": "archer",
                "b": "berserker",
                "bers": "berserker",
                "berserker": "berserker",
                "t": "tank",
                "ta": "tank",
                "tank": "tank",
                "m": "mage",
                "ma": "mage",
                "mage": "mage"
            };
            userClass = classMap[userClass] || userClass;

            if (!validClasses.includes(userClass)) {
                prefix(`Invalid class. Use one of the following: ${validClasses.join(", ")}`);
            } else {
                const existingPlayer = data.perm.find(item => item.username.toLowerCase() === username);
                if (existingPlayer) {
                    if (existingPlayer.userClass === userClass) {
                        prefix(`${existingPlayer.username} is already a ${userClass.charAt(0).toUpperCase() + userClass.slice(1)}.`);
                    } else {
                        const oldClass = existingPlayer.userClass;
                        existingPlayer.userClass = userClass;
                        data.save();
                        prefix(`Changed ${existingPlayer.username}'s class from ${oldClass.charAt(0).toUpperCase() + oldClass.slice(1)} to ${userClass.charAt(0).toUpperCase() + userClass.slice(1)}.`);
                    }
                } else {
                    data.perm.push({ username: args[1], userClass });
                    data.save();
                    prefix(`Replaced and added ${args[1]} (${userClass.charAt(0).toUpperCase() + userClass.slice(1)}) to the list. (${data.perm.length} perm ${data.perm.length === 1 ? 'member' : 'members'})`);
                }
            }
        }
    } else {
        prefix(`Invalid arguments. Use /perm (add/remove/clear/help/invite/replaceclass) <username> <class>`);
    }
}).setName("perm")