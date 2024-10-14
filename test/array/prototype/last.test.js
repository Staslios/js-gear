import assert from 'assert'
import '../../../src/array/array.prototype.js'


describe('Array.prototype.last()', () => {

  it('generic cases', () => {
    assert.equal([1, 2, 3].last(), 3)
    assert.equal(['a', 'b', 'c'].last(), 'c');
    assert.equal([true, false].last(), false);
    assert.equal([undefined, undefined].last(), undefined);
    assert.equal([null, null].last(), null);
    assert.equal([2, -1].last(), -1);
  });

  it('empty array', () => {
    assert.equal([].last(), -1);
  });
});
