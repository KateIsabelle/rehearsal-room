const { expect } = require('chai');

// Dummy test
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      const array = [1, 2, 3]
      const result = array.indexOf(4)
      expect(result).to.equal(-1);
    });
  });
});