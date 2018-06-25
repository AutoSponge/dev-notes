greyscale: https://stackoverflow.com/questions/16858811/how-to-convert-hex-color-to-hex-black-and-white
```js
(((((((col >> 16) & 0xff)*76) + (((col >> 8) & 0xff)*150) +
((col & 0xff)*29)) >> 8)) << 16) |

(((((((col >> 16) & 0xff)*76) + (((col >> 8) & 0xff)*150) + 
((col & 0xff)*29)) >> 8)) << 8) | 

((((((col >> 16) & 0xff)*76) + (((col >> 8) & 0xff)*150) + 
((col & 0xff)*29)) >> 8))
```

https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
