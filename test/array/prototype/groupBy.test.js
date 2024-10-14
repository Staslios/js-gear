import assert from 'assert'
import '../../../src/array/array.prototype.js'


describe('Array.prototype.groupBy()', () => {

  it('even and odd split', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = arr.groupBy(num => num % 2 === 0 ? 'even' : 'odd');

    const expected = {
      odd: [1, 3, 5],
      even: [2, 4, 6]
    };

    assert.deepStrictEqual(result, expected);
  });

  it('group strings by length', () => {
    const arr = ['one', 'two', 'three', 'four', 'five'];
    const result = arr.groupBy(str => str.length);

    const expected = {
      3: ['one', 'two'],
      4: ['four', 'five'],
      5: ['three']
    };

    assert.deepStrictEqual(result, expected);
  });

  it('empty object for empty array', () => {
    const result = [].groupBy(item => item);
    assert.deepStrictEqual(result, {});
  });

  it('groups objects by a specific key', () => {
    const arr = [{ age: 23 }, { age: 30 }, { age: 23 }];
    const result = arr.groupBy(obj => obj.age);

    const expected = {
      23: [{ age: 23 }, { age: 23 }],
      30: [{ age: 30 }]
    };

    assert.deepStrictEqual(result, expected);
  });

  it('skips items that do not respect the fn', () => {
    const arr = [{ age: 23 }, { age: 30 }, { age: 23 }, { name: "hello" }];
    const result = arr.groupBy(obj => obj.name);

    const expected = { hello: [{name: "hello"}] }

    assert.deepStrictEqual(result, expected);
  });
});