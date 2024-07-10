const { redis } = require('./instance');

describe.skip('doc', () => {

    it('json.set', async () => {
        await redis['json.set']('jsontest', '.', JSON.stringify({ name: 'ok', id: 123, arr: [1, 2, 3, 4, 5] })).then(console.log);
        await redis['json.set']('jsonarrtest', '.', JSON.stringify(['a', 1])).then(console.log);
        await redis['json.set']('jsonnumbertest', '.', JSON.stringify(1)).then(console.log);
        await redis['json.set']('jsonstringtest', '.', JSON.stringify('ok')).then(console.log);
    });

    it('json.get', async () => {
        await redis['json.get']('jsontest', '.', 'FORMAT', 'YAML').then(console.log);
        await redis['json.get']('jsonarrtest', '.', 'FORMAT', 'YAML').then(console.log);
    });

    it('json.mget', async () => {
        await redis['json.mget']('jsontest', 'jsonarrtest', '.').then(console.log);
    });

    it('json.type', async () => {
        await redis['json.type']('jsontest', '.id').then(console.log);
        await redis['json.type']('jsonarrtest').then(console.log);
    });

    it.skip('json.numincrby', async () => {
        await redis['json.numincrby']('jsonnumbertest', 2).then(console.log);
        await redis['json.numincrbyBuffer']('jsonnumbertest', '.', 1).then(console.log);
        await redis['json.numincrby']('jsontest', '.id', 1).then(console.log);
    });

    it.skip('json.strappend', async () => {
        await redis['json.strappend']('jsonstringtest', 'yes').then(console.log);
        await redis['json.strappend']('jsontest', '.name', 'yes').then(console.log);
    });

    it('json.strlen', async () => {
        await redis['json.strlen']('jsonstringtest').then(console.log);
        await redis['json.strlen']('jsontest', '.name').then(console.log);
    });

    it.skip('json.del', async () => {
        await redis['json.del']('jsontest', '.id').then(console.log)
    });

    it('json.arrlen', async () => {
        await redis['json.arrlen']('jsonarrtest').then(console.log);
        await redis['json.arrlen']('jsontest', '.arr').then(console.log);
    });

    it.skip('json.arrinsert', async () => {
        await redis['json.arrinsert']('jsonarrtest', '.', 0, JSON.stringify('haha'), JSON.stringify(2)).then(console.log);
    });

    it.skip('json.arrappend', async () => {
        redis['json.arrappend']('jsonarrtest', '.', JSON.stringify(5));
    });

    it.skip('json.arrpop', async () => {
        await redis['json.arrpop']('jsonarrtest', '.').then(console.log);
        await redis['json.arrpop']('jsontest', '.arr', 0).then(console.log);
    });

    it.skip('json.arrtrim', async () => {
        await redis['json.arrtrim']('jsonarrtest', '.', 0, 0).then(console.log);
    });


});