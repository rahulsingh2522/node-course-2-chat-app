const expect = require('expect');

var {isRealString } = require('./validation.js');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(9);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('   ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var res = isRealString(' L O R  ');
        expect(res).toBe(true);
    });
});