if('virtualKeyboard' in navigator) {
	// If virtualKeyboard API is supported


	navigator.virtualKeyboard.overlaysContent = true; // straightup ignores the keyboard. No "virtual" height is applied, it's just as if you sticked a sticker on your screen. Might already be the solution you're looking for.

	navigator.virtualKeyboard.addEventListener('geometrychange', function () {
		// If geometry of Keyboard changes
		window.setTimeout(function() {
			doResize()
		},100)
	});

	window.addEventListener('resize', function () {
		// If window resizes or orientation changes
		window.setTimeout(function() {
			doResize()
		},100)
	});
}


function doResize() {
	// Calculate the heights and apply style to CSS variable height1
	document.documentElement.style.setProperty("--height1", "calc(" + window.innerHeight + "px - " + (navigator?.virtualKeyboard?.boundingRect?.height ?? 0) + "px - 0px)");
}
