const { redis } = require('./instance');

describe('zset', () => {
    it.skip('exzadd', async () => {
        await redis.exzadd('zsettest', 'INCR', '1#0#3', 'a').then(console.log);
        await redis.exzadd('zsettest', 'NX', 'CH', '1#0#3', 'a', '1#0#2', 'b').then(console.log);
    });

    it('exzincrby', async () => {
        await redis.exzincrby('zsettest', '0#0#0', 'b').then(console.log);
    });

})