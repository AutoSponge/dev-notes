# Web Fonts

1. Pick a good one for accessibility (mobile too) [article](http://alistapart.com/article/accessibility-whack-a-mole)
1. Make it the right size:
```css
html { font-size: calc(1em + 1vw) }
```
1. Allow it to be replaced by the user [guide](http://www.bbc.co.uk/accessibility/guides/change_fonts/)
1. Lazy load it [article](https://davidwalsh.name/font-loading)
1. Optimize payload for locale by using a subset [guide](http://brettklamer.com/diversions/non-statistical/subset-and-self-host-webfonts/) and [article](https://www.bramstein.com/writing/web-font-anti-patterns-subsetting.html)

idea: fallback to system font [ios](https://webkit.org/blog/3709/using-the-system-font-in-web-content/), [prollyfill](https://github.com/jonathantneal/system-font-css), [availability](http://www.cssfontstack.com/)

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
             "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
             "Helvetica Neue", Arial, sans-serif;
```
