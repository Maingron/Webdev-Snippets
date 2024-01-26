Meta:
-	Tags: **mobile**, overflow, html, css, javascript
-	Type: Workaround for a not(?)-bug
-	Device Type: Mobile (Android, iOS)
-	Affected: "All" but Firefox
-	**Not** affected: Firefox Mobile, Desktop
-	Date initial: 2024-01-26

This fixes the issue where the entire website window scrolls when the keyboard is shown on mobile devices. I wasn't able to find ANY other way to not scroll the entire Browser Window.
It works in Chrome, Firefox isn't affected anyway, but Safari still doesn't work. Maybe I'm stupid, maybe it's possible, but this seems to work for Chrome, at least.

## Noteable

### Javascript
``` javascript
navigator.virtualKeyboard.overlaysContent = true;
// straightup ignores the keyboard. No "virtual" height is applied, it's just as if you sticked a keyboard-sticker on your screen. Might already be the solution you're looking for.
```


### CSS
Nothing too special here. You might want to take a look at those sizing units which include [s,l,d]vh. Unfortunately I didn't see any true effects here: https://www.terluinwebdesign.nl/en/css/incoming-20-new-css-viewport-units-svh-lvh-dvh-svw-lvw-dvw/

There are CSS **Environment variables**. Did you know that?! Some examples are: `env(available-screen-height)`, `env(safe-area-inset-*)`
See https://developer.mozilla.org/en-US/docs/Web/CSS/env
