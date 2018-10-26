/**
 * returns an iterable of all possible combinations of a set of items to a length of K
 * @param {array} items
 * @param {number} [limitK] defaults to items.length
 * @returns {iterable}
 * @private
 * @example
 *   kCombinations
 */
function* kCombinations(items, limitK = items.length) {
  let k = 1;
  for (; k <= limitK; k += 1) {
    yield* combine(items, k);
  }
}

/**
 * @param {array} items
 * @param {number} k
 * @param {object} continuation
 * @returns {iterable}
 * @private
 */
function* combine(items, k, continuation = {}) {
  const { data = [], start = 0, index = 0 } = continuation;
  if (index === k) {
    yield data.slice(0, index).join('');
  }
  const end = items.length - 1;
  for (let i = start; i <= end && end - i + 1 >= k - index; i += 1) {
    data[index] = items[i];
    yield* combine(items, k, { data, start: i + 1, index: index + 1 });
  }
}
