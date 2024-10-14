/// <reference types="../../../CTAutocomplete" />

import config from "../../config";
import { Timerutils } from "../../utils/utils";

let time = null

register("chat", () => {
  if(!config().MaxorSpawnTimer) return;
  Timerutils.TickTimer(8500, 2.5, Renderer.screen.getHeight() / 15)
}).setCriteria("[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!");