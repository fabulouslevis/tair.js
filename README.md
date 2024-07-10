# tairjs

Tair Nodejs Sdk

# Quick start

```
const { Redis } = require('ioredis');
const { tair } = require('tairjs');
const redis = tair(new Redis(...options));
redis['gis.get'](key);
redis['json.get'](key);
```
