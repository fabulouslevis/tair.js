const { redis } = require('./instance');

describe('roaring', () => {

    it.skip('tr.setbit', async () => {
        await redis['tr.setbit']('roaringtest', 0, 0).then(console.log)
    });

    it.skip('tr.setbits', async () => {
        await redis['tr.setbits']('roaringtest', Math.pow(2, 7), Math.pow(2, 6)).then(console.log)
    });

    it.skip('tr.clearbits', async () => {
        await redis['tr.clearbits']('roaringtest', Math.pow(2, 7), Math.pow(2, 6)).then(console.log)
    });

    it.skip('tr.appendbitarray', async () => {
        await redis['tr.appendbitarray']('roaringtest', 0, '1101').then(console.log);
    });

    it('tr.stat', async () => {
        await redis['tr.stat']('roaringtest').then(console.log);
    });
})