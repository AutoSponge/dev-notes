- [createTreeWalker polyfill](https://github.com/Krinkle/dom-TreeWalker-polyfill)
- [nodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator)
- [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker)


Make it a real iterator (see https://github.com/Redisrupt/refined-github)
```js
export default el => {
	const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
	const next = () => {
		const value = walker.nextNode();
		return {
			value,
			done: !value
		};
	};
	walker[Symbol.iterator] = () => ({next});
	return walker;
};
```

es6-style (https://github.com/nylas-mail-lives/nylas-mail)
```js
const DOMWalkers = {
  * walk(...treeWalkerArgs) {
    const walker = document.createTreeWalker(...treeWalkerArgs);
    let node = walker.nextNode();
    while (node) {
      yield node;
      node = walker.nextNode();
    }
    return;
  },

  * walkBackwards(node) {
    if (!node) { return; }
    if (node.childNodes.length > 0) {
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
        yield* this.walkBackwards(node.childNodes[i]);
      }
    }
    yield node;
    return;
  },
}
export default DOMWalkers
```
