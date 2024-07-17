import { ClientContext, Result, Callback } from 'ioredis';

export type Format = 'default' | 'buffer';

export type Optional<TArgs extends any[]> = TArgs | [];

export type Shift<TArgs extends any[]> = TArgs extends [any, ...infer TOtherArgs] ? TOtherArgs : TArgs;

export type Pop<TArgs extends any[]> = TArgs extends [...infer TOtherArgs, any] ? TOtherArgs : TArgs;

export type Context = ClientContext;

export type Command<TArgs extends any[], TReturn, TContext extends Context> = (
    ...args: [...TArgs, ...Optional<[callback: Callback<TReturn>]>]
) => Result<TReturn, TContext>;

export type StringType = string | Buffer;

export type NumberType = `${number}`;

export type BitType = 0 | 1;

export type OkType = 'OK';

export type CAPACITY = ['CAPACITY', capacity: number];

export type ERROR = ['ERROR', errorRate: number];

export type NOCREATE = ['NOCREATE'];

export type SIZE = ['SIZE', size: number];

export type WIN = ['WIN', windowLength: number];

export type FORMAT = ['FORMAT', 'XML' | 'YAML'];

export type ROOTNAME = ['ROOTNAME', root: StringType];

export type ARRNAME = ['ARRNAME', arr: StringType];

export type WITHOUTWKT = ['WITHOUTWKT'];

export type WITHDIST = ['WITHDIST'];

export type GEOM = ['GEOM', geom: StringType];

export type COUNT = ['COUNT', count: number];

export type RADIUS = ['RADIUS', longitude: number, latitude: number, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type MEMBER = ['MEMBER', field: StringType, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type KEEPTTL = ['KEEPTTL'];

export type MIN = ['MIN', minval: number];

export type MAX = ['MAX', maxval: number];

export type ITEMS = ['ITEMS', item: StringType, ...items: StringType[]];

export type NOEXP = ['NOEXP'];

export type MATCH = ['MATCH', pattern: StringType];

export type CH = ['CH'];

export type INCR = ['INCR'];

export type WITHSCORES = ['WITHSCORES'];

export type LIMIT = ['LIMIT', offset: number, count: number];

export type WITH_ID = ['WITH_ID', docId: StringType];

export type INDEX = ['INDEX', indexName: StringType];

export type SHOW_TIME = ['SHOW_TIME'];

export type MAX_COUNT = ['MAX_COUNT', count: number];

export type FUZZY = ['FUZZY'];

export type JSON = ['JSON'];

export type DATA_ET = ['DATA_ET', time: number];

export type CHUNK_SIZE = ['CHUNK_SIZE', size: number];

export type UNCOMPRESSED = ['UNCOMPRESSED'];

export type LABELS = ['LABELS', label: StringType, val: StringType, ...labelVals: StringType[]];

export type MAXCOUNT = ['MAXCOUNT', count: number];

export type AGGREGATION = [
    'AGGREGATION',
    aggregationType:
        | 'MAX'
        | 'MIN'
        | 'AVG'
        | 'SUM'
        | 'FIRST'
        | 'LAST'
        | 'RANGE'
        | 'COUNT'
        | 'STD.P'
        | 'STD.S'
        | 'VAR.P'
        | 'VAR.S',
    timeBucket: number,
];

export type FILTER = ['FILTER', filter: StringType, ...filters: StringType[]];

export type WITHLABELS = ['WITHLABELS'];

export type VERSION = ['VER' | 'ABS', version: number];
export type EXPIRY = ['EX' | 'EXAT' | 'PX' | 'PXAT', time: number];
export type LOCK = ['NX' | 'XX'];
export type SORT = ['ASC' | 'DESC'];
