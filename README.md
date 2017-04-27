# dev-notes

- [emoji list](https://github.com/J3QQ4/Full-Emoji-List/blob/master/Emoji.cs)
- [github repository data](https://help.github.com/articles/repository-metadata-on-github-pages/)

```js
const view = new Proxy(
  new String(path.join(__dirname, '..', '..', 'shared', 'view')),
  {get: (base, module) => require(base + path.sep + module)}
);
```
