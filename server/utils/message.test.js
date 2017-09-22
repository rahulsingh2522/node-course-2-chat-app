const expect = require('expect');

var {generateMessage,generateLocationMessage } = require('./message.js');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        
        var res = generateMessage('rahul2','Hello World');

        expect(res).toInclude({
            from: 'rahul2',
            text: 'Hello World'
        });
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'rahul';
        var lat = 1;
        var long =1;
        var url = 'https://www.google.com/maps?q=1,1';

        var res = generateLocationMessage(from, lat, long);

        expect(res).toInclude({from,url});
        expect(res.createdAt).toBeA('number');
    });
});