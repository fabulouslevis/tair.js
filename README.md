# tair.js

A client packaged based on [ioredis](https://github.com/redis/ioredis) that operates [Tair](https://www.alibabacloud.com/help/en/apsaradb-for-redis/latest/apsaradb-for-redis-enhanced-edition-overview) For Redis Modules.

-   [TairString](https://www.alibabacloud.com/help/en/tair/developer-reference/exstring), is a string that contains s version number.([Open sourced](https://github.com/alibaba/TairString))
-   [TairHash](https://www.alibabacloud.com/help/en/tair/developer-reference/exhash), is a hash that allows you to specify the expiration time and version number of a field.([Open sourced](https://github.com/alibaba/TairHash))
-   [TairZset](https://www.alibabacloud.com/help/en/tair/developer-reference/tairzset), allows you to sort data of the double type based on multiple dimensions. ([Open sourced](https://github.com/alibaba/TairZset))
-   [TairBloom](https://www.alibabacloud.com/help/en/tair/developer-reference/bloom), is a Bloom filter that supports dynamic scaling.
-   [TairRoaring](https://www.alibabacloud.com/help/en/tair/developer-reference/roaring), is a more efficient and balanced type of compressed bitmaps recognized by the industry.
-   [TairSearch](https://www.alibabacloud.com/help/en/tair/developer-reference/search), is a full-text search module developed in-house based on Redis modules.
-   [TairDoc](https://www.alibabacloud.com/help/en/tair/developer-reference/doc), to perform create, read, update, and delete (CRUD) operations on JSON data.
-   [TairGis](https://www.alibabacloud.com/help/en/tair/developer-reference/gis), allowing you to query points, linestrings, and polygons. ([Open Sourced](https://github.com/tair-opensource/TairGis))
-   [TairTs](https://www.alibabacloud.com/help/en/tair/developer-reference/ts), is a time series data structure that is developed on top of Redis modules.
-   [TairCpc](https://www.alibabacloud.com/help/en/tair/developer-reference/taircpc), is a data structure developed based on the compressed probability counting (CPC) sketch.
-   [TairVector](https://www.alibabacloud.com/help/en/tair/developer-reference/vector), is a vector that allows you to find similar data points in a high-dimensional vector space.

# Installation

```
npm i tair.js
```

# Quickstart

```
const { Redis } = require('ioredis');
const { tair } = require('tair.js');
const redis = tair(new Redis(...options));
redis['gis.get'](key);
redis['json.get'](key);
```
