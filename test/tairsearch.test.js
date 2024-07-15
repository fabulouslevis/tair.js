const { redis } = require('./instance');

describe.skip('search', () => {

    it.skip('tft.createindex', async () => {
        await redis['tft.createindex']('tfttest', JSON.stringify({
            "mappings": {
                "_source": { "enabled": true }, "properties": {
                    "product_id": { "type": "keyword", "ignore_above": 128 },
                    "product_name": { "type": "text" },
                    "product_title": { "type": "text", "analyzer": "jieba" },
                    "price": { "type": "double" }
                }
            }
        })).then(console.log);
    });

    it.skip('tft.getindex', async () => {
        await redis['tft.getindex']('tfttest').then(console.log);
    });


    it.skip('tft.updateindex', async () => {
        await redis['tft.updateindex']('tfttest', JSON.stringify({
            "mappings": { "properties": { "product_group2": { "type": "text", "analyzer": "chinese" } } }
        }
        )).then(console.log);
    });

    it.skip('tft.deldocfield', async () => {
        await redis['tft.deldocfield']('tfttest', 'product_group').then(console.log);
    });

    it.skip('tft.scandocid', async () => {
        await redis['tft.scandocid']('tfttest', 0).then(console.log);
    });

    it.skip('tft.deldoc', async () => {
        await redis['tft.deldoc']('tfttest', '00011').then(console.log);
    });


    it.skip('tft.msearch:prepare', async () => {
        await redis['tft.createindex']('testftmsearch0', JSON.stringify({ "mappings": { "properties": { "f0": { "type": "long" } } } }));
        await redis['tft.createindex']('testftmsearch1', JSON.stringify({ "mappings": { "properties": { "f0": { "type": "long" } } } }));
        await redis['tft.createindex']('testftmsearch2', JSON.stringify({ "mappings": { "properties": { "f0": { "type": "long" } } } }));
        await redis['tft.adddoc']('testftmsearch0', JSON.stringify({ "f0": 120 }));
        await redis['tft.adddoc']('testftmsearch0', JSON.stringify({ "f0": 130 }));
        await redis['tft.adddoc']('testftmsearch1', JSON.stringify({ "f0": 140 }));
        await redis['tft.adddoc']('testftmsearch1', JSON.stringify({ "f0": 150 }));
        await redis['tft.adddoc']('testftmsearch2', JSON.stringify({ "f0": 160 }));
        await redis['tft.adddoc']('testftmsearch2', JSON.stringify({ "f0": 170 }));
    });

    it('tft.msearch', async () => {
        await redis['tft.msearchBuffer'](3, 'testftmsearch0', 'testftmsearch1', 'testftmsearch2', JSON.stringify({ "size": 2, "query": { "range": { "f0": { "gt": 120, "lte": 170 } } }, "sort": [{ "f0": { "order": "desc" } }], "reply_with_keys_cursor": true })).then(console.log);
    });
})