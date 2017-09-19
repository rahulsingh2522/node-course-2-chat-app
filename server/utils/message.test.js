var expect = require('expect');

var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
    it('should geenrate correct message object', () => {
        
        var res = generateMessage('rahul2','Hello World');

        expect(res).toInclude({
            from: 'rahul2',
            text: 'Hello World'
        });
        expect(res.createdAt).toBeA('number');
    });
});