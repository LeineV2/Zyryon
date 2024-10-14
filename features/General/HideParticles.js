import config from "../../config";
import { Itemutils } from "../../utils/utils";

register("spawnParticle", (part, type, event) => {
    if(config().hideaotvparticles){
    if(Itemutils.HeldItemCheck("Aspect of the")){
    if(part.toString().includes("EntitySpellParticleFX")){
    cancel(event)
    }}}

    if(config().hidewithershieldparticles){
    if(Itemutils.HeldItemCheck("Hyperion") || Itemutils.HeldItemCheck("Astraea") || Itemutils.HeldItemCheck("Valkyrie") || Itemutils.HeldItemCheck("Scylla") || Itemutils.HeldItemCheck("Necron's Blade (Unrefined)")){
    if(part.toString().includes("EntitySpellParticleFX")){
    cancel(event)
    }}}
})