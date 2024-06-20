import config from "../../config";

const thread = new Thread(() => {
    ChatLib.say(`MONKEY SPOTTED!`)
    thread.sleep(600)
    ChatLib.command(`p leave`)
})

const thread2 = new Thread(() => {
    ChatLib.say(`MONKEY SPOTTED!`)
    thread.sleep(600)
    ChatLib.command(`p kick redshotz`)
})

register("chat", () => {
    if(config.AntiMonkey){
        thread.start()
    }
}).setCriteria("RedShotz's party!").setContains()

register("chat", () => {
    if(config.AntiMonkey){
        thread2.start()
    }
}).setCriteria("RedShotz joined the party.").setContains()

register("chat", (event) => {
    if(config.AntiYap){
        cancel(event)
    }    
}).setCriteria("RedShotz").setContains()