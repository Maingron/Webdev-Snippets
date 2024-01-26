# Smart / Default CSS values

## Meta
-	Tags: css, scss
-	Device Type: All Desktop, All Mobile
-	Date initial: 2024-01-26
-	OP: @Maingron

## Use System font
```css
body {
	font-family: system-ui, -apple-system, 'Helvetica Neue', 'Helvetica', 'Segoe UI', 'Segoe UI Variable', 'Roboto', 'Tahoma', 'Ubuntu', sans-serif;
}
```
The above code tries to use the font used by the user's OS on the Website. Follows this order:
- `system-ui`:   Some browsers report the system font
- `-apple-system`:   Some browsers report the system font
- `'Helvetica Neue'`:   Apple
- `'Helvetica'`:   Apple
- `'Segoe UI'`: Windows 10
- `'Segoe UI Variable'`:   Windows 11 (?)
- `'Roboto'`:   Android
- `'Tahoma'`:   Windows XP
- `'Ubuntu'`:   Ubuntu
- `sans-serif`: If nothing else applies

This entire thing should be applied to `body {}`, not `* {}`.

## Multicolumn Text
```css
something {
	column-count: 3;
}
```
Compatibility is pretty good (>90%)

## Scroll Padding
```scss
html {
	scroll-padding-top: 100px; // 100px are the height of the header
}
```

## SCSS Variables in calc()
```scss
width: calc(100% - #{$myvar})
```

## Easy Darkmode
```css
html {
	color-scheme: dark;
	color-scheme: light;
}
@media (prefers-color-scheme: dark) {}
@media (prefers-color-scheme: light) {}
```

## CSS Variables
```css
/* define: */
:root {
	--my-variable: 10px;
}

/* use: */
.my-class {
	width: var(--my-variable);
}
	
/* https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties */
```

## CSS Environment Variables
```css
/* https://developer.mozilla.org/en-US/docs/Web/CSS/env() */
```
