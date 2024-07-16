const { redis } = require('./instance');

describe.skip('cpc', () => {

    it.skip('cpc.update', async () => {
        await redis['cpc.update']('cpctest', 'f1', 'EX', 3600).then(console.log);
    });

    it.skip('cpc.estimate', async () => {
        await redis['cpc.estimate']('cpctest').then(console.log);
    });

    it.skip('cpc.array.update', async () => {
        await redis['cpc.array.update']('cpcarrtest', 1645584510000, 'f1', 'SIZE', 120, 'WIN', 10000).then(console.log);
    });


    it('cpc.array.estimate', async () => {
        await redis['cpc.array.estimate']('cpcarrtest', Date.now()).then(console.log);
    });



});