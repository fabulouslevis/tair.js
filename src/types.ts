import { ClientContext, Result, Callback } from 'ioredis';

export type Format = 'default' | 'buffer';

export type Optional<TArgs extends any[]> = TArgs | [];

export type Shift<TArgs extends any[]> = TArgs extends [any, ...infer TOtherArgs] ? TOtherArgs : TArgs;

export type Pop<TArgs extends any[]> = TArgs extends [...infer TOtherArgs, any] ? TOtherArgs : TArgs;

export type Context = ClientContext;

export type Command<TArgs extends any[], TReturn, TContext extends Context> = (
    ...args: [...TArgs, ...Optional<[callback: Callback<TReturn>]>]
) => Result<TReturn, TContext>;

export type CAPACITY = ['CAPACITY', capacity: number];

export type ERROR = ['ERROR', errorRate: number];

export type NOCREATE = ['NOCREATE'];

export type SIZE = ['SIZE', size: number];

export type WIN = ['WIN', windowLength: number];

export type FORMAT = ['FORMAT', 'XML' | 'YAML'];

export type ROOTNAME = ['ROOTNAME', root: string | Buffer];

export type ARRNAME = ['ARRNAME', arr: string | Buffer];

export type WITHOUTWKT = ['WITHOUTWKT'];

export type WITHDIST = ['WITHDIST'];

export type GEOM = ['GEOM', geom: string | Buffer];

export type COUNT = ['COUNT', count: number];

export type RADIUS = ['RADIUS', longitude: number, latitude: number, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type MEMBER = ['MEMBER', field: string | Buffer, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type KEEPTTL = ['KEEPTTL'];

export type MIN = ['MIN', minval: number];

export type MAX = ['MAX', maxval: number];

export type ITEMS = ['ITEMS', item: string | Buffer, ...items: (string | Buffer)[]];

export type NOEXP = ['NOEXP'];

export type MATCH = ['MATCH', pattern: string | Buffer];

export type CH = ['CH'];

export type INCR = ['INCR'];

export type WITHSCORES = ['WITHSCORES'];

export type LIMIT = ['LIMIT', offset: number, count: number];

export type WITH_ID = ['WITH_ID', docId: string | Buffer];

export type INDEX = ['INDEX', indexName: string | Buffer];

export type SHOW_TIME = ['SHOW_TIME'];

export type MAX_COUNT = ['MAX_COUNT', count: number];

export type FUZZY = ['FUZZY'];

export type JSON = ['JSON'];

export type VERSION = ['VER' | 'ABS', version: number];
export type EXPIRY = ['EX' | 'EXAT' | 'PX' | 'PXAT', time: number];
export type LOCK = ['NX' | 'XX'];
export type SORT = ['ASC' | 'DESC'];
