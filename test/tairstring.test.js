const { redis } = require('./instance');

describe.skip('string', () => {

    it('exset', async () => {
        await redis.exset('stringtest', '123', 'VER', 0).then(console.log);
    });

    it('exget', async () => {
        await redis.exget('stringtest').then(console.log);
        await redis.exgetBuffer('stringtest').then(console.log);
    });

    it('exsetver', async () => {
        await redis.exsetver('stringtest', 7).then(console.log);
    });

    it.skip('exincrby', async () => {
        await redis.exincrby('stringinttest', 2).then(console.log);
    });


    it.skip('exincrbyfloat', async () => {
        await redis.exincrbyfloat('stringfloattest', 0.05).then(console.log);
    });

    it.skip('excas', async () => {
        await redis.excas('stringtest', '456', 13).then(console.log);
    });

    it.skip('excad', async () => {
        await redis.excad('stringtest', 1).then(console.log);
    });

    it.skip('exappend', async () => {
        await redis.exappend('stringtest', '12', 'XX', 'ABS', 1).then(console.log);
    });

    it.skip('exprepend', async () => {
        await redis.exprepend('stringtest', '12', 'XX', 'ABS', 1).then(console.log);
    });

    it.skip('exgae', async () => {
        await redis.exgaeBuffer('stringtest', 'EX', 10).then(console.log);
    })

});