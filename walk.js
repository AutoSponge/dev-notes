function walk(element, options = {}) {
  const { map = new Map(), isFramed } = options;
  const context = getContext(element);
  const root = getRoot(context);
  const walker = context.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode: node => {
      if (!node.tagName.match(/^script|br|hr$/i)) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  });
  const createVnode = vnodeFactory({ map, isFramed });
  createVnode(root, true);
  while (walker.nextNode()) {
    const vnode = createVnode(walker.currentNode);
    if (vnode.isFrame) {
      walk(walker.currentNode, { map, isFramed: vnode });
    }
  }
  return map;
}

function getContext(element) {
  return element.contentDocument || element.ownerDocument || element.document;
}

function getRoot(context) {
  return context.body;
}

function vnodeFactory({ map, isFramed }) {
  return (element, isRoot) => {
    const tagName = element.tagName;
    const isFrame = Boolean(tagName.match(/^(i){0,1}frame$/i));
    const parent = isRoot ? isFramed : map.get(element.parentElement);
    const depth = isRoot ? (isFramed ? isFramed.depth : 0) : parent.depth + 1;
    const previousSiblings = isRoot ? [] : parent.children.slice(0);
    const ancestors = isRoot
      ? isFramed
        ? [...isFramed.ancestors, isFramed]
        : []
      : [...parent.ancestors, parent];
    const vnode = {
      depth,
      isFrame,
      properties: {
        id: element.id,
        tagName,
        childElementCount: 0,
        className: element.className
      },
      previousSiblings,
      ancestors,
      attributes: {},
      selector: [],
      children: []
    };
    createSelector(vnode, isFramed);
    if (parent) {
      parent.children.push(vnode);
      parent.properties.childElementCount += 1;
    }
    map.set(element, vnode);
    return vnode;
  };
}

function attributeMap() {}

function createSelector(vnode, isFramed) {}
