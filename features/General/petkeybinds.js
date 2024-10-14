import config from "../../config";

register("guiKey", (_0, keyCode, _1, event) => {
	if(!config().petkeybinds) return;
	const container = Player.getContainer();
	if (!container) return;
	if (!container.getName().includes("Pets")) return;
	let keyInfo = -1;
	if (keyCode > 1 && keyCode < 11) {
		keyInfo = keyCode - 2;
	} else if ([30, 203].includes(keyCode)) {
		keyInfo = 9;
	} else if ([32, 205].includes(keyCode)) {
		keyInfo = 10;
	}
	if (keyInfo === -1) return;
	if (keyInfo < 9) {
		container.click(keyInfo + 10);
	} else if (keyInfo === 9) {
		container.click(45);
	} else if (keyInfo === 10) {
		container.click(53);
	}
	cancel(event);
})