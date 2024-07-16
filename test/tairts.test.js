const { redis } = require('./instance');

describe('ts', () => {
    it.skip('exts.p.create', async () => {
        await redis['exts.p.create']('tsfoo').then(console.log);
    });

    it.skip('exts.s.create', async () => {
        await redis['exts.s.create']('tsfoo', 'temperature', 'DATA_ET', 10000000, 'LABELS', 'sensor_id', '1').then(console.log);
    });

    it.skip('exts.s.alter', async () => {
        await redis['exts.s.alter']('tsfoo', 'temperature', 'DATA_ET', 100000).then(console.log);
    });

    it.skip('exts.s.add', async () => {
        await redis['exts.s.add']('tsfoo', 'temperature', '*', 30.5, 'DATA_ET', 1000000, 'LABELS', 'sensor_id', '1').then(console.log);
    });

    it.skip('exts.s.madd', async () => {
        await redis['exts.s.madd']('tsfoo', 3, 'temperature', '*', 30.2, 'pressure', '*', 2.05, 'distance', '*', 0.5).then(console.log);
    });

    it.skip('exts.s.info', async () => {
        await redis['exts.s.info']('tsfoo', 'temperature').then(console.log);
    });

    it('exts.s.mrange', async () => {
        await redis['exts.s.mrange']('tsfoo', 1644451031662, '*', 'AGGREGATION', 'MAX', 10000, 'WITHLABELS', 'FILTER', 'sensor_id=1').then(JSON.stringify).then(console.log);
    })
})