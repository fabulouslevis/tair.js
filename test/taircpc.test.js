const { redis } = require('./instance');

describe.skip('cpc', () => {

    it('cpc.estimate', async () => {
        await redis['cpc.estimate']('cpctest').then(console.log);
    });

    it('cpc.array.estimate', async () => {
        await redis['cpc.array.estimate']('cpcarrtest', Date.now()).then(console.log);
    });

});