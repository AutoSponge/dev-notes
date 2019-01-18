/**
 * returns an iterable of all possible combinations of a collection of items
 * @param {array} items
 * @param {number} [start] defaults to permutations of length 1
 * @param {number} [limit] defaults to permutations of length items.length
 * @returns {iterable}
 * @private
 * @example
 *   [...powerCombinations([1,2,3])] // => [ [ 1 ], [ 2 ], [ 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
 */
function* powerCombinations(items, start = 1, limit = items.length) {
  let K = start;
  for (; K <= limit; K += 1) {
    yield* combine(items, K);
  }
}

/**
 * @param {array} items
 * @param {number} K
 * @param {object} continuation
 * @returns {iterable}
 * @private
 */
function* combine(items, K, continuation = {}) {
  const { data = [], start = 0, index = 0 } = continuation;
  if (index === K) {
    yield data.slice(0, index);
  }
  const end = items.length - 1;
  for (let i = start; i <= end && end - i + 1 >= K - index; i += 1) {
    data[index] = items[i];
    yield* combine(items, K, { data, start: i + 1, index: index + 1 });
  }
}

// https://gist.github.com/axelpale/3118596
// https://www.npmjs.com/package/js-combinatorics
// https://en.wikipedia.org/wiki/Power_set
