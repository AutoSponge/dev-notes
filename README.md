# dev-notes

- [emoji list](https://github.com/J3QQ4/Full-Emoji-List/blob/master/Emoji.cs)
- [github repository data](https://help.github.com/articles/repository-metadata-on-github-pages/)

```js
const view = new Proxy(
  new String(path.join(__dirname, '..', '..', 'shared', 'view')),
  {get: (base, module) => require(base + path.sep + module)}
);
```

# TODO
- [ ] look at [NDJSON](http://specs.okfnlabs.org/ndjson/) [implementation](https://www.npmjs.com/package/ndjson)
- [ ] look at alt clients 
    - [jsonparse](https://github.com/creationix/jsonparse)
    - [jake](https://jakearchibald.com/2016/fun-hacks-faster-content/)
    - [ld-jsonstream](https://www.npmjs.com/package/ld-jsonstream)
    - [nano-json-stream-parser](https://github.com/MaiaVictor/nano-json-stream-parser)

https://bloomberg.github.io/bucklescript/Manual.html
