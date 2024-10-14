
/*
 * You can call the array.last() method on any array, and it will return the last element. If there are no
 * elements in the array, it should return -1.
 */
Array.prototype.last = function() {
  return this.length > 0 ? this[this.length - 1] : -1
};

/*
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


/*
 * A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array
 * containing all items in the original array which generate that key. The provided callback fn will
 * accept an item in the array and return a string key.
 */
Array.prototype.groupBy = function(fn) {
  return this.reduce((res, item) => {
    const key = fn(item);

    if (key) {
      res.hasOwnProperty(key)
        ? res[key].push(item)
        : res[key] = [item];
    }

    return res
  }, {})

};
/*
 * const arr = [
 *  {"id":"1"},
 *  {"id":"1"},
 *  {"id":"2"}
 * ];
 *
 * fn = function (item) {
 *  return item.id;
 * }
 *
 * arr.groupBy(fn);
 *
 * output {
 *  "1": [{"id": "1"}, {"id": "1"}],
 *  "2": [{"id": "2"}]
 * }
 */
