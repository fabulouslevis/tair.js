const { redis } = require('./instance');

describe.skip('bloom', () => {

    it('bf.add', async () => {
        await redis['bf.add']('bloomtest', '123').then(console.log);
    });

    it('bf.madd', async () => {
        await redis['bf.madd']('bloomtest', '123', '456').then(console.log);
    });

    it('bf.exists', async () => {
        await redis['bf.exists']('bloomtest', '123').then(console.log);
        await redis['bf.exists']('bloomtest', '567').then(console.log);
    });

    it('bf.mexists', async () => {
        await redis['bf.mexists']('bloomtest', '123', '456', '678').then(console.log);
    });

    it.skip('bf.insert', async () => {
        await redis['bf.insert']('bloomtest1', 'NOCREATE', 'ITEMS', '123', '456').then(console.log);

        await redis['bf.insert']('bloomtest2', 'CAPACITY', 2, 'ERROR', 0.5, 'ITEMS', '123', '456', '789').then(console.log);
    });

    it.skip('bf.reserve', async () => {
        await redis['bf.reserve']('bloomtest3', 0.01, 100).then(console.log);
    });

    it('bf.info', async () => {
        await redis['bf.info']('bloomtest1').then(console.log);
        await redis['bf.infoBuffer']('bloomtest2').then(console.log);
        await redis['bf.info']('bloomtest3').then(console.log);
    });

    it('bf.debug', async () => {
        await redis['bf.debug']('bloomtest1').then(console.log);
        await redis['bf.debugBuffer']('bloomtest2').then(console.log);
        await redis['bf.debug']('bloomtest3').then(console.log);
    });

});