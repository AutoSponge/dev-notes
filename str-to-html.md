## HTML

```js
element.innerHTML = string
```

```js
element.insertAdjacentHTML(position, string);
```

```js
var fragment = document.createRange().createContextualFragment(string)
```

```js
let domparser = new DOMParser()
let doc = domparser.parseFromString(string, mimeType)
```

## Text

```js
elem.innerText = string
```


```js
elem.textContent = string
```


```js
elem.firstChild.data = string // fastest
```


```js
elem.insertAdjacentText(position, string)
```
