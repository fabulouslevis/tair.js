const { redis } = require('./instance');

describe('hash', () => {
    it.skip('exhmset', async () => {
        await redis.exhmset('hashtest', 'field1', 10, 'field2', 'var1').then(console.log)
    });

    it('exhkeys', async () => {
        await redis.exhkeys('hashtest').then(console.log)
    });

    it('exhvals', async () => {
        await redis.exhvalsBuffer('hashtest').then(console.log)
    });

    it('exhgetall', async () => {
        await redis.exhgetall('hashtest').then(console.log)
        await redis.exhgetallBuffer('hashtest').then(console.log)
    });

    it('exhscan', async () => {
        await redis.exhscan('hashtest', '==', 'field1', 'COUNT', 1).then(console.log)
        await redis.exhscanBuffer('hashtest', '==', 'field1', 'COUNT', 1).then(console.log)
    });

})