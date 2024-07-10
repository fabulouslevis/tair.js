const { redis } = require('./instance');

describe('gis', () => {

    it.skip('gis.add', async () => {
        await redis['gis.add']('gistest', '123', 'POINT(0 0)').then(console.log);
        await redis['gis.add']('gistest', '456', 'POLYGON ((30 10, 40 40, 20 40, 10 20, 30 10))').then(console.log)
    });

    it('gis.getall', async () => {
        await redis['gis.getall']('gistest', 'WITHOUTWKT').then(console.log);
    });

    it('gis.get', async () => {
        await redis['gis.get']('gistest', '123').then(console.log);
        await redis['gis.getBuffer']('gistest', '123').then(console.log);
    });

    it.skip('gis.del', async () => {
        await redis['gis.del']('gistest', '123').then(console.log);
    });

    it('gis.search', async () => {
        await redis['gis.search']('gistest', 'RADIUS', 0, 0, 10, 'M', 'WITHDIST').then(console.log);
    });


    it('gis.contains', async () => {
        await redis['gis.contains']('gistest', 'POINT (10 20)', 'WITHOUTWKT').then(console.log);
    });


    it('gis.within', async () => {
        await redis['gis.within']('gistest', 'POLYGON ((10 10, 10 -10, -10 -10, -10 10, 10 10))', 'WITHOUTWKT').then(console.log);
    });


    it('gis.intersects', async () => {
        await redis['gis.intersects']('gistest', 'POLYGON ((30 30, 30 10, 10 10, 10 30, 30 30))', 'WITHOUTWKT').then(console.log);
    })

})