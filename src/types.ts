import { ClientContext, Result, Callback } from 'ioredis';

export type Format = 'default' | 'buffer';

export type Optional<TArgs extends any[]> = TArgs | [];

export type TrimStart<TArgs extends any[]> = TArgs extends [any, ...infer TOtherArgs] ? TOtherArgs : [];

export type TrimEnd<TArgs extends any[]> = TArgs extends [...infer TOtherArgs, any] ? TOtherArgs : [];

export type Context = ClientContext;

export type Command<TArgs extends any[], TReturn, TContext extends Context> = (
    ...args: [...TArgs, ...Optional<[callback: Callback<TReturn>]>]
) => Result<TReturn, TContext>;

export type CAPACITY = ['CAPACITY', capacity: number];

export type ERROR = ['ERROR', errorRate: number];

export type NOCREATE = ['NOCREATE'];

export type SIZE = ['SIZE', size: number];

export type WIN = ['WIN', win: number];

export type FORMAT = ['FORMAT', 'XML' | 'YAML'];

export type ROOTNAME = ['ROOTNAME', root: string];

export type ARRNAME = ['ARRNAME', arr: string];

export type WITHOUTWKT = ['WITHOUTWKT'];

export type WITHDIST = ['WITHDIST'];

export type GEOM = ['GEOM', geom: string];

export type COUNT = ['COUNT', count: number];

export type RADIUS = ['RADIUS', longitude: number, latitude: number, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type MEMBER = ['MEMBER', field: string, distance: number, unit: 'M' | 'KM' | 'FT' | 'MI'];

export type KEEPTTL = ['KEEPTTL'];

export type MIN = ['MIN', minval: number];

export type MAX = ['MAX', maxval: number];

export type ITEMS = ['ITEMS', item: string | Buffer, ...items: (string | Buffer)[]];

export type VERSION = ['VER' | 'ABS', version: number];
export type EXPIRE = ['EX' | 'EXAT' | 'PX' | 'PXAT', time: number];
export type WRITE = ['NX' | 'XX'];
export type SORT = ['ASC' | 'DESC'];
