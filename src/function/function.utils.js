/*
 * A memoized function is a function that will never be called twice with the same inputs.
 * Instead it will return a cached value.
 */
function memoize(fn) {
  let history = {}

  return function (...args) {
    const key = JSON.stringify(args)

    if (key in history) {
      return history[key];
    }

    const res = fn(...args)
    history[key] = res;

    return res
  }
}
/*
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */


/*
 * A debounced function is a function whose execution is delayed by time milliseconds
 * and whose execution is cancelled if it is called again within that window of
 * time. The debounced function also receives the passed parameters.
 */
function debounce(fn, time) {
  let timer = null;

  return function(...args) {
    if (timer)
      clearTimeout(timer);

    return new Promise((res, rej) => {
      timer = setTimeout(()=> res(fn(...args)), time)
    })
  }
}
/*
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */