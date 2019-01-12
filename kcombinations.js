/**
 * returns an iterable of all possible combinations of a set of items to a length of K
 * @param {array} items
 * @param {number} [start] defatuls to permutations of length 1
 * @param {number} [limitK] defaults to permutations of length items.length
 * @returns {iterable}
 * @private
 * @example
 *   kCombinations
 */
function* kCombinations(items, start = 1, limitK = items.length) {
  let k = start;
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
