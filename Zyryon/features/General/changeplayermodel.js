import { prefix } from "../../../BloomCore/utils/Utils";
import data from "../../data_";

register("command", (...args) => {
    if (!args[0]) return prefix("/changemodel <width, height> <scale>");
    if (!args[1] || isNaN(args[1])) return;
    switch (args[0]) {
        case "width": {
            data.width = parseFloat(args[1]);
            data.save();
            ChatLib.chat(`&aChanged player width to ${data.width}`);
            break;
        }
        case "height": {
            data.height = parseFloat(args[1]);
            data.save();
            ChatLib.chat(`&aChanged player height to ${data.height}`);
            break;
        }
    }
}).setName("changemodel");

register("renderEntity", (entity) => {
    /*
    if (entity.getName() == "ripbombdefuse"){
        Tessellator.pushMatrix();
        Tessellator.translate(1, 0.75, 1);
        Tessellator.scale(1, 0.75, 1);
    } 
    
    if(entity.getName() == "TeeQuee"){
        Tessellator.pushMatrix();
        Tessellator.translate(0.75, 0.75, 0.75);
        Tessellator.scale(0.75, 0.75, 0.75);
    }*/

    if(entity.getName() == Player.getName()){
    //if(Player.getName() == "ripbombdefuse" || Player.getName() == "RedShotz") return;
    Tessellator.pushMatrix();
    Tessellator.scale(data.width, data.height, data.width);
    }
});

register("postRenderEntity", (entity) => {
    /*
    if (entity.getName() == "ripbombdefuse"){
        Tessellator.translate(-entity.getX(), -entity.getY(), -entity.getZ());
        Tessellator.popMatrix();
    }

    if(entity.getName() == "TeeQuee"){
        Tessellator.translate(-entity.getX(), -entity.getY(), -entity.getZ());
        Tessellator.popMatrix();
    }*/
    
    if(entity.getName() == Player.getName()){
        //if(entity.getName() == "ripbombdefuse" || entity.getName() == "TeeQuee") return;
        Tessellator.popMatrix();
    }
});